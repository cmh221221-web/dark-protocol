(function () {
  'use strict';
  const api = '/api';
  const storageKey = 'dp_access_token';
  const telegram = window.Telegram && window.Telegram.WebApp;
  if (telegram) {
    telegram.ready();
    telegram.expand();
    try { telegram.setHeaderColor('#09080D'); telegram.setBackgroundColor('#09080D'); } catch (_) {}
  }

  function notify(message) {
    if (telegram && telegram.showAlert) telegram.showAlert(message);
    else if (typeof window.showNotice === 'function') window.showNotice(message);
    else console.info('[DARK PROTOCOL]', message);
  }
  function getToken() { try { return sessionStorage.getItem(storageKey); } catch (_) { return null; } }
  function setToken(value) { try { sessionStorage.setItem(storageKey, value); } catch (_) {} }
  async function request(url, options) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, options && options.headers);
    if (getToken()) headers.Authorization = `Bearer ${getToken()}`;
    const response = await fetch(api + url, Object.assign({}, options, { headers }));
    if (response.status === 204) return null;
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || `Request failed (${response.status})`);
    return result;
  }
  window.DPApi = { request, getToken, notify };

  async function authenticate() {
    if (!telegram || !telegram.initData) {
      document.documentElement.dataset.dpPreview = 'true';
      return;
    }
    try {
      const result = await request('/auth/telegram', { method: 'POST', body: JSON.stringify({ initData: telegram.initData }) });
      setToken(result.token);
      window.DPTelegramUser = result.user;
      document.documentElement.dataset.dpAuthenticated = 'true';
      window.dispatchEvent(new CustomEvent('dp:authenticated', { detail: result.user }));
      const name = result.user.name;
      const title = document.querySelector('.brand-subtitle');
      if (title && name) title.textContent = `WELCOME, ${name.toUpperCase()}`;
    } catch (error) {
      document.documentElement.dataset.dpAuthError = 'true';
      notify(`Не удалось войти через Telegram: ${error.message}`);
    }
  }
  authenticate();
})();
