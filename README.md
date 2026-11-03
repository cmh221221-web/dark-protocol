<!DOCTYPE html>
<html lang="ru">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta name="theme-color" content="#09080D">
 <title>DARK PROTOCOL</title>

 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">

 <style>
 /* =================================
 DARK PROTOCOL — ЧАСТЬ 1
 GLOBAL FOUNDATION
 ================================= */

 :root {
 --bg: #09080D;
 --panel: rgba(255,255,255,0.055);
 --panel-hover: rgba(255,255,255,0.09);
 --border: rgba(255,255,255,0.10);
 --purple: #A879F5;
 --purple-light: #D2B5FF;
 --text: #F7F3FC;
 --muted: #958C9F;
 --red: #9C354D;
 --radius: 22px;
 }

 * {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 }

 html {
 scroll-behavior: smooth;
 }

 body {
 min-height: 100vh;
 background: var(--bg);
 color: var(--text);
 font-family: 'Manrope', sans-serif;
 overflow-x: hidden;
 }

 button {
 font: inherit;
 color: inherit;
 cursor: pointer;
 border: none;
 }

 a {
 color: inherit;
 text-decoration: none;
 }

 /* BACKGROUND */

 .background-glow {
 position: fixed;
 inset: 0;
 z-index: -2;
 pointer-events: none;
 фон:
 radial-gradient(
 ellipse at 15% 5%,
 rgba(105, 48, 153, 0.22),
 transparent 42%
 ),
 radial-gradient(
 ellipse at 90% 55%,
 rgba(75, 35, 110, 0.16),
 transparent 40%
 ),
 linear-gradient(
 145deg,
 #09080D 0%,
 #100B17 48%,
 #08080D 100%
 );
 animation: ambientGlow 12s ease-in-out infinite alternate;
 }

 @keyframes ambientGlow {
 from {
 filter: hue-rotate(0deg);
 opacity: 0.8;
 }
 to {
 filter: hue-rotate(18deg);
 opacity: 1;
 }
 }

 .noise {
 position: fixed;
 inset: 0;
 z-index: -1;
 pointer-events: none;
 opacity: 0.025;
 background-image: url(
 "данные: изображение/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg '%3E%3Cfilter id='n'%3E%3CfeTurbulence type='Фрактальный шум' baseFrequency='.9' numOctaves='3' stitchTiles='стежок'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E"
 );
 }

 /* GLASS */

 .glass {
 background: var(--panel);
 border: 1px solid var(--border);
 backdrop-filter: blur(22px);
 -webkit-backdrop-filter: blur(22px);
 box-shadow:
 inset 0 1px 0 rgba(255,255,255,0.07),
 0 12px 40px rgba(0,0,0,0.22);
 }

 /* ОСНОВНОЙ МАКЕТ */

 .app {
 width: min(100% - 40px, 1180px);
 margin: 0 auto;
 padding: 28px 0 130px;
 }

 /* HEADER */

 .header {
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 20px;
 margin-bottom: 42px;
 }

 .brand {
 display: flex;
 align-items: center;
 gap: 13px;
 }

 .бренд-символ { 
 ширина: 45 пикселей;
 высота: 45 пикселей;
 отображение: сетка;
 размещение элементов: по центру;
 радиус границы: 15 пикселей;
 цвет: var (--фиолетовый-светлый);
 размер шрифта: 24px;
 font-weight: 800;
 background: linear-gradient(
 145deg,
 rgba(178,130,255,0.24),
 rgba(95,55,135,0.08)
 );
 border: 1px solid rgba(194,155,255,0.25);
 box-shadow: 0 0 30px rgba(154,99,224,0.12);
 }

 .brand-name {
 font-size: 15px;
 font-weight: 800;
 letter-spacing: 2.2px;
 }

 .brand-subtitle {
 color: var(--muted);
 font-size: 9px;
 letter-spacing: 3px;
 margin-top: 3px;
 }

 .header-actions {
 display: flex;
 align-items: center;
 gap: 12px;
 }

 .status {
 display: flex;
 align-items: center;
 gap: 7px;
 padding: 9px 13px;
 border-radius: 30px;
 color: #A5D9B9;
 font-size: 10px;
 letter-spacing: 1px;
 }

 .status-dot {
 width: 6px;
 height: 6px;
 border-radius: 50%;
 background: #75D39A;
 box-shadow: 0 0 10px #75D39A;
 }

 .icon-button {
 width: 39px;
 height: 39px;
 display: grid;
 place-items: center;
 border-radius: 13px;
 font-size: 17px;
 }

 /* СОДЕРЖАНИЕ ПРОДОЛЖАЕТСЯ ВО ВТОРОЙ ЧАСТИ */
</style>
</head>
<body>
 <div class="background-glow"></div>
 <div class="noise"></div>

 <main class="app">
 <header class="header">
 <div class="brand">
 <div class="brand-symbol">D</div>
 <div>
 <div class="brand-name">DARK PROTOCOL</div>
 <div class="brand-subtitle">DIGITAL ECOSYSTEM</div>
 </div>
 </div>

 <div class="header-actions">
 <div class="status glass">
 <span class="status-dot"></span>
 СИСТЕМА ОНЛАЙН
 </div>
 <button class="icon-button glass" aria-label="Настройки">⚙</button>
 </div>
 </header>

 <!-- ЧАСТЬ 2 ПРОДОЛЖАЕТСЯ ЗДЕСЬ -->
</main>
</body>
</html>
<!-- =================================
 DARK PROTOCOL — ЧАСТЬ 2
 ГЛАВНАЯ ПАНЕЛЬ
================================= -->

<style>
 /* HERO */

 .hero {
 position: relative;
 min-height: 370px;
 padding: 38px;
 border-radius: 30px;
 overflow: hidden;
 margin-bottom: 26px;
 фон:
 linear-gradient(
 90deg,
 rgba(10,8,17,0.97) 0%,
 rgba(13,9,22,0.78) 48%,
 rgba(13,9,22,0.15) 100%
 ),
 url("https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85")
 center / cover;
 border: 1px solid rgba(195,155,255,0.2);
 box-shadow: 0 25px 80px rgba(0,0,0,0.35);
 display: flex;
 align-items: center;
 }

 .hero::after {
 content: "";
 position: absolute;
 inset: 0;
 pointer-events: none;
 background: linear-gradient(
 135deg,
 rgba(125,70,180,0.13),
 transparent 55%,
 rgba(0,0,0,0.25)
 );
 }

 .hero-content {
 position: relative;
 z-index: 2;
 max-width: 560px;
 }

 .hero-label {
 display: inline-flex;
 align-items: center;
 gap: 9px;
 padding: 8px 13px;
 border-radius: 30px;
 background: rgba(175,130,230,0.12);
 border: 1px solid rgba(195,155,255,0.25);
 color: #D7B8FF;
 font-size: 10px;
 font-weight: 700;
 letter-spacing: 2px;
 margin-bottom: 23px;
 }

 .hero h1 {
 font-size: clamp(38px, 6vw, 70px);
 line-height: 1.02;
 font-weight: 800;
 letter-spacing: -3px;
 margin-bottom: 17px;
 }

 .hero h1 span {
 color: #BD93F5;
 text-shadow: 0 0 35px rgba(170,110,240,0.4);
 }

 .hero-description {
 max-width: 420px;
 color: #C0B5CB;
 font-size: 14px;
 line-height: 1.8;
 margin-bottom: 28px;
 }

 .hero-actions {
 display: flex;
 align-items: center;
 gap: 12px;
 flex-wrap: wrap;
 }

 .primary-button {
 display: inline-flex;
 justify-content: center;
 align-items: center;
 gap: 10px;
 padding: 14px 22px;
 border-radius: 13px;
 color: #160E20;
 background: linear-gradient(135deg,#D5B8FF,#A97AE9);
 font-size: 12px;
 font-weight: 800;
 letter-spacing: .5px;
 transition: .25s;
 }

 .primary-button:hover {
 transform: translateY(-3px);
 box-shadow: 0 10px 30px rgba(170,120,245,.3);
 }

 .secondary-button {
 display: inline-flex;
 align-items: center;
 justify-content: center;
 padding: 13px 20px;
 border-radius: 13px;
 background: rgba(255,255,255,.06);
 border: 1px solid rgba(255,255,255,.15);
 color: white;
 font-size: 12px;
 font-weight: 700;
 }

 /* ЗАГОЛОВКИ РАЗДЕЛОВ */

 .section-heading {
 display: flex;
 align-items: end;
 justify-content: space-between;
 gap: 15px;
 margin: 38px 0 18px;
 }

 .section-kicker {
 color: #A986D0;
 font-size: 9px;
 font-weight: 800;
 letter-spacing: 3px;
 margin-bottom: 8px;
 }

 .section-title {
 font-size: 23px;
 font-weight: 800;
 letter-spacing: -.8px;
 }

 .section-link {
 color: #B99AE0;
 font-size: 11px;
 font-weight: 700;
 }

 /* ACCOUNT OVERVIEW */

 .overview-grid {
 display: grid;
 grid-template-columns: 1.2fr 1fr 1fr;
 gap: 13px;
 }

 .overview-card {
 padding: 20px;
 border-radius: 19px;
 min-height: 115px;
 }

 .overview-label {
 color: #A69BAF;
 font-size: 10px;
 letter-spacing: 1px;
 margin-bottom: 12px;
 }

 .overview-value {
 font-size: 25px;
 font-weight: 800;
 letter-spacing: -.5px;
 }

 .overview-note {
 color: #8F829A;
 font-size: 10px;
 margin-top: 5px;
 }

 .purple-value {
 color: #D1B2FF;
 }

 /* MODULES */

 .modules-grid {
 display: grid;
 grid-template-columns: repeat(2,minmax(0,1fr));
 gap: 16px;
 }

 .module-card {
 position: relative;
 min-height: 235px;
 padding: 23px;
 border-radius: 23px;
 overflow: hidden;
 transition: .3s;
 cursor: pointer;
 }

 .module-card:hover {
 transform: translateY(-5px);
 background: rgba(255,255,255,.09);
 border-color: rgba(190,145,245,.35);
 }

 .module-card::after {
 content: "";
 position: absolute;
 width: 170px;
 height: 170px;
 right: -50px;
 bottom: -80px;
 border-radius: 50%;
 background: var(--module-glow,rgba(155,100,230,.18));
 filter: blur(35px);
 pointer-events: none;
 }

 .module-top {
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 30px;
 }

 .module-icon {
 width: 47px;
 height: 47px;
 display: grid;
 place-items: center;
 border-radius: 15px;
 font-size: 22px;
 background: rgba(180,135,240,.12);
 border: 1px solid rgba(190,150,255,.18);
 }

 .module-arrow {
 color: #95879F;
 font-size: 19px;
 }

 .module-title {
 font-size: 20px;
 font-weight: 800;
 letter-spacing: -.5px;
 margin-bottom: 8px;
 }

 .module-description {
 max-width: 270px;
 color: #A69BAF;
 font-size: 11px;
 line-height: 1.8;
 }

 .module-tag {
 display: inline-block;
 margin-top: 19px;
 color: #C6A7EF;
 font-size: 9px;
 font-weight: 800;
 letter-spacing: 1.5px;
 }

 /* RESPONSIVE */

 @media(max-width:700px) {
 .hero {
 min-height: 410px;
 padding: 25px;
 background-position: 60% center;
 }

 .hero h1 {
 font-size: 43px;
 letter-spacing: -2px;
 }

 .overview-grid {
 grid-template-columns: 1fr 1fr;
 }

 .overview-card:first-child {
 grid-column: span 2;
 }

 .modules-grid {
 grid-template-columns: 1fr;
 }

 .module-card {
 min-height: 200px;
 }

 .section-title {
 font-size: 20px;
 }
 }

 @media(max-width:400px) {
 .hero {
 padding: 20px;
 }

 .hero h1 {
 font-size: 36px;
 }

 .overview-card {
 padding: 15px;
 }
 }
</style>

<!-- HERO SECTION -->

<section class="hero">
 <div class="hero-content">

 <div class="hero-label">
 <span class="status-dot"></span>
 СИСТЕМА АКТИВНА
 </div>

 <h1>
 ВСТУПИТЕ<br>
 <span>НА ТЕМНУЮ СТОРОНУ.</span>
 </h1>

 <p class="hero-description">
 Добро пожаловать в новую цифровую экосистему.
 Открывайте для себя музыку, стройте свою империю,
 общайтесь с людьми и изучайте
 возможности искусственного интеллекта.
 </p>

 <div class="hero-actions">
 <button class="primary-button" onclick="document.getElementById('modules').scrollIntoView({behavior:'smooth'})">
 ИЗУЧИТЬ СИСТЕМУ <span>↗</span>
 </button>

 <button class="secondary-button" onclick="document.getElementById('overview').scrollIntoView({behavior:'smooth'})">
 МОЙ АККАУНТ
 </button>
 </div>

 </div>
</section>

<!-- ОБЗОР АККАУНТА -->

<section id="overview">

 <div class="section-heading">
 <div>
 <div class="section-kicker">ЛИЧНАЯ ПАНЕЛЬ УПРАВЛЕНИЯ</div>
 <h2 class="section-title">Ваш обзор</h2>
 </div>
 <div class="section-link">СТАТУС АККАУНТА ↗</div>
 </div>

 <div class="overview-grid">

 <div class="overview-card glass">
 <div class="overview-label">СТАТУС АККАУНТА</div>
 <div class="overview-value purple-value">АКТИВЕН</div>
 <div class="overview-note">Добро пожаловать в DARK PROTOCOL</div>
 </div>

 <div class="overview-card glass">
 <div class="overview-label">ВАШ УРОВЕНЬ</div>
 <div class="overview-value">01</div>
 <div class="overview-note">Новый пользователь протокола</div>
 </div>

 <div class="overview-card glass">
 <div class="overview-label">ДОСТУП К СИСТЕМЕ</div>
 <div class="overview-value purple-value">06</div>
 <div class="overview-note">Доступные модули</div>
 </div>

 </div>
</section>

<!-- ОСНОВНЫЕ МОДУЛИ -->

<section id="modules">

 <div class="section-heading">
 <div>
 <div class="section-kicker">ПОЗНАКОМЬТЕСЬ С ЭКОСИСТЕМОЙ</div>
 <h2 class="section-title">Выберите направление</h2>
 </div>
 <div class="section-link">ВСЕ МОДУЛИ</div>
 </div>

 <div class="modules-grid">

 <!-- MUSIC -->
 <article class="module-card glass"
 style="--module-glow:rgba(169,113,235,.25)"
 onclick="alert('МУЗЫКАЛЬНЫЙ МОДУЛЬ — СКОРО ПОЯВИТСЯ')">

 <div class="module-top">
 <div class="module-icon">♫</div>
 <div class="module-arrow">↗</div>
 </div>

 <h3 class="module-title">МУЗЫКА</h3>

 <p class="module-description">
 Ваша личная музыкальная вселенная.
 Находите треки, создавайте плейлисты
 и открывайте для себя новые звуки.
 </p>

 <div class="module-tag">СЛУШАТЬ БЕЗ ОГРАНИЧЕНИЙ</div>
 </article>

 <!-- DARK EMPIRE -->

 <article class="module-card glass"
 style="--module-glow:rgba(125,70,180,.3)"
 onclick="alert('DARK EMPIRE — СКОРО')">

 <div class="module-top">
 <div class="module-icon">♜</div>
 <div class="module-arrow">↗</div>
 </div>

 <h3 class="module-title">DARK EMPIRE</h3>

 <p class="module-description">
 Постройте собственную цифровую империю.
 Расширяйте свою территорию, развивайте
 свой город и контролируйте ресурсы.
 </p>

 <div class="module-tag">СОЗДАЙТЕ СВОЕ НАСЛЕДИЕ</div>
 </article>

 <!-- PROJECT AI -->

 <article class="module-card glass"
 style="--module-glow:rgba(110,110,220,.25)"
 onclick="alert('PROJECT AI — COMING SOON')">

 <div class="module-top">
 <div class="module-icon">✧</div>
 <div class="module-arrow">↗</div>
 </div>

 <h3 class="module-title">PROJECT AI</h3>

 <p class="module-description">
 Познакомьтесь со своим интеллектуальным цифровым
 помощником. Исследуйте, создавайте
 и открывайте новые возможности.
 </p>

 <div class="module-tag">INTELLIGENCE REDEFINED</div>
 </article>

 <!-- СООБЩЕСТВО -->

 <article class="module-card glass"
 style="--module-glow:rgba(160,70,100,.23)"
 onclick="alert('СООБЩЕСТВО — СКОРО')">

 <div class="module-top">
 <div class="module-icon">◎</div>
 <div class="module-arrow">↗</div>
 </div>

 <h3 class="module-title">СООБЩЕСТВО</h3>

 <p class="module-description">
 Общайтесь с другими пользователями,
 просматривайте профили и станьте
 частью протокола.
 </p>

 <div class="module-tag">ОБЩАЙТЕСЬ С ДРУГИМИ</div>
 </article>

 </div>
</section>

<!-- КОНЕЦ ЧАСТИ 2 -->
<style>
/* ===== ЧАСТЬ 3: НАВИГАЦИЯ И ПЛЕЕР ===== */

.quick-panel {
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 12px;
 margin-top: 22px;
}

.quick-item {
 min-height: 92px;
 padding: 16px;
 border: 1px solid rgba(255,255,255,.07);
 border-radius: 19px;
 background: rgba(255,255,255,.035);
 color: var(--text);
 text-align: left;
 transition: .25s ease;
 cursor: pointer;
}

.quick-item:hover {
 background: rgba(153,112,255,.1);
 border-color: rgba(171,137,255,.3);
 transform: translateY(-3px);
}

.quick-icon {
 display: block;
 font-size: 21px;
 margin-bottom: 12px;
}

.quick-name {
 display: block;
 font-size: 12px;
 font-weight: 700;
}

.quick-description {
 display: block;
 color: var(--muted);
 font-size: 10px;
 margin-top: 5px;
}

.system-footer {
 margin: 28px 0 105px;
 padding: 17px 4px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 border-top: 1px solid rgba(255,255,255,.07);
 color: var(--muted);
 font-size: 10px;
 letter-spacing: .7px;
}

.system-status {
 display: flex;
 align-items: center;
 gap: 7px;
}

.system-dot {
 width: 6px;
 height: 6px;
 border-radius: 50%;
 background: #9b7aff;
 box-shadow: 0 0 10px #9b7aff;
}

.mini-player {
 position: fixed;
 z-index: 20;
 bottom: 83px;
 left: 50%;
 transform: translateX(-50%);
 width: min(680px, calc(100% - 28px));
 padding: 11px 14px;
 display: flex;
 align-items: center;
 gap: 12px;
 border: 1px solid rgba(190,170,255,.18);
 border-radius: 18px;
 background: rgba(19,17,27,.82);
 backdrop-filter: blur(24px);
 -webkit-backdrop-filter: blur(24px);
 box-shadow: 0 10px 40px rgba(0,0,0,.35);
}

.player-cover {
 width: 43px;
 height: 43px;
 flex-shrink: 0;
 display: grid;
 place-items: center;
 border-radius: 12px;
 background: linear-gradient(135deg,#34244f,#111018);
 font-size: 19px;
}

.player-info {
 min-width: 0;
 flex: 1;
}

.player-title {
 font-size: 12px;
 font-weight: 700;
}

.player-subtitle {
 margin-top: 4px;
 color: var(--muted);
 font-size: 10px;
}

.player-button {
 width: 36px;
 height: 36px;
 flex-shrink: 0;
 border: 1px solid rgba(255,255,255,.1);
 border-radius: 50%;
 background: rgba(255,255,255,.08);
 color: white;
 cursor: pointer;
 font-size: 13px;
}

.player-progress {
 position: absolute;
 bottom: 0;
 left: 14px;
 right: 14px;
 height: 2px;
 overflow: hidden;
 background: rgba(255,255,255,.08);
 border-radius: 5px;
}

.player-progress-fill {
 width: 28%;
 height: 100%;
 background: #a78bfa;
 border-radius: 5px;
}

.bottom-nav {
 position: fixed;
 z-index: 19;
 bottom: 12px;
 left: 50%;
 transform: translateX(-50%);
 width: min(680px, calc(100% - 28px));
 min-height: 59px;
 padding: 8px 10px;
 display: flex;
 justify-content: space-around;
 align-items: center;
 border: 1px solid rgba(255,255,255,.09);
 border-radius: 20px;
 background: rgba(13,12,19,.88);
 backdrop-filter: blur(25px);
 -webkit-backdrop-filter: blur(25px);
 box-shadow: 0 10px 35px rgba(0,0,0,.4);
}

.nav-item {
 min-width: 52px;
 padding: 5px 7px;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 4px;
 border: 0;
 border-radius: 12px;
 background: transparent;
 color: #85818f;
 cursor: pointer;
 transition: .2s ease;
}

.nav-item.active {
 color: #c2aaff;
 background: rgba(158,121,255,.1);
}

.nav-icon {
 font-size: 17px;
 line-height: 1;
}

.nav-label {
 font-size: 9px;
 font-weight: 600;
}

@media (max-width: 480px) {
 .quick-panel {
 gap: 8px;
 }

 .quick-item {
 padding: 12px;
 min-height: 85px;
 }

 .quick-description {
 font-size: 9px;
 }

 .mini-player {
 bottom: 80px;
 }

 .bottom-nav {
 bottom: 10px;
 }
}
</style>

<section class="quick-panel">
 <button class="quick-item" onclick="showNotice('Скоро здесь появятся уведомления')">
 <span class="quick-icon">◈</span>
 <span class="quick-name">Уведомления</span>
 <span class="quick-description">Центр событий</span>
 </button>

 <button class="quick-item" onclick="showNotice('Раздел достижений готовится')">
 <span class="quick-icon">✧</span>
 <span class="quick-name">Достижения</span>
 <span class="quick-description">Твой прогресс</span>
 </button>

 <button class="quick-item" onclick="showNotice('Настройки скоро будут доступны')">
 <span class="quick-icon">⚙</span>
 <span class="quick-name">Настройки</span>
 <span class="quick-description">Управление системой</span>
 </button>
</section>

<footer class="system-footer">
 <span>DARK PROTOCOL © 2026</span>
 <span class="system-status">
 <span class="system-dot"></span>
 ВСЕ СИСТЕМЫ В НОРМЕ
 </span>
</footer>

<!-- МИНИ-МУЗЫКАЛЬНЫЙ ПЛЕЕР -->
<div class="mini-player">
 <div class="player-cover">♫</div>

 <div class="player-info">
 <div class="player-title">DARK MUSIC</div>
 <div class="player-subtitle" id="playerStatus">
 Выбери трек в разделе Music
 </div>
 </div>

 <button class="player-button" id="playerButton"
 onclick="togglePlayer()" aria-label="Play or pause">
 ▶
 </button>

 <div class="player-progress">
 <div class="player-progress-fill"></div>
 </div>
</div>

<!-- НИЖНЯЯ НАВИГАЦИЯ -->
<nav class="bottom-nav">
 <button class="nav-item active" onclick="setActiveNav(this,'home')">
 <span class="nav-icon">⌂</span>
 <span class="nav-label">Главная</span>
 </button>

 <button class="nav-item" onclick="setActiveNav(this,'music')">
 <span class="nav-icon">♫</span>
 <span class="nav-label">Музыка</span>
 </button>

 <button class="nav-item" onclick="setActiveNav(this,'empire')">
 <span class="nav-icon">♜</span>
 <span class="nav-label">Империя</span>
 </button>

 <button class="nav-item" onclick="setActiveNav(this,'ai')">
 <span class="nav-icon">✧</span>
 <span class="nav-label">AI</span>
 </button>

 <button class="nav-item" onclick="setActiveNav(this,'profile')">
 <span class="nav-icon">◉</span>
 <span class="nav-label">Профиль</span>
 </button>
</nav>
<script>
/* ===== ЧАСТЬ 4: ВЗАИМОДЕЙСТВИЕ ===== */

// Переключение нижней навигации
function setActiveNav(button, section) {
 document.querySelectorAll('.nav-item').forEach(item => {
 item.classList.remove('active');
 });

 button.classList.add('active');

 const sectionNames = {
 home: 'Главная',
 music: 'Музыка',
 empire: 'Dark Empire',
 ai: 'Project AI',
 profile: 'Профиль'
 };

 showNotice('Раздел «' + sectionNames[section] + '»');

 // Позже здесь подключатся переходы между настоящими разделами.
}

// Уведомления
function showNotice(message) {
 let toast = document.getElementById('systemToast');

 if (!toast) {
 toast = document.createElement('div');
 toast.id = 'systemToast';

 Object.assign(тост.стиль, { 
 позиция: 'фиксированная', 
 вверху: '22px', 
 слева: '50%', 
 преобразовать: 'перевести (-50%, -15 пикселей)', 
 zIndex: '100', 
 padding: '13x20px', 
 borderRadius: '14px', 
 граница: "сплошной rgba размером 1 пиксель (180,150,255,.25)", 
 фон: "rgba (25,22,35,.94)", 
 цвет: '#eee9ff', 
 Размер шрифта: '12 пикселей', 
 Выравнивание текста: 'по центру', 
 непрозрачность: '0', 
 переход: '.легкость на 25 секунд', 
 Фоновый фильтр: "размытие (20 пикселей)", 
 Максимальная ширина: "85%"
 });

 document.body.appendChild(toast);
 }

 toast.textContent = message;
 toast.style.opacity = '1';
 toast.style.transform = 'translate(-50%, 0)';

 clearTimeout(window.toastTimer);

 window.toastTimer = setTimeout(() => {
 toast.style.opacity = '0';
 toast.style.transform = 'translate(-50%, -15px)';
 }, 2300);
}

// Визуальное переключение музыкального плеера
let playerIsPlaying = false;

function togglePlayer() {
 playerIsPlaying = !playerIsPlaying;

 const button = document.getElementById('playerButton');
 const status = document.getElementById('playerStatus');

 if (playerIsPlaying) {
 button.textContent = 'Ⅱ';
 status.textContent = 'Демо-режим · источник не подключен';
 showNotice('Музыкальный модуль ожидает подключения аудио');
 } else {
 button.textContent = '▶';
 status.textContent = 'Воспроизведение остановлено';
 }
}

// Карточки основных модулей
function openModule(moduleName) {
 const messages = {
 music: 'Музыкальный модуль скоро откроется',
 empire: 'DARK EMPIRE — подготовка системы',
 ai: 'PROJECT AI — модуль в разработке',
 community: 'COMMUNITY — скоро будет доступно'
 };

 showNotice(messages[moduleName] || 'Модуль скоро появится');
}

// Приветствие при загрузке
window.addEventListener('DOMContentLoaded', () => {
 console.log('DARK PROTOCOL: SYSTEM INITIALIZED');
});
</script>
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#09090d">
<title>DARK PROTOCOL</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>
:root {
 --bg: #09090d;
 --bg-soft: #101016;
 --panel: rgba(23, 22, 31, .72);
 --panel-strong: rgba(29, 27, 39, .88);
 --border: rgba(255,255,255,.085);
 --border-light: rgba(255,255,255,.14);
 --text: #f4f1fa;
 --muted: #898596;
 --purple: #a77bff;
 --purple-light: #c5a6ff;
 --purple-soft: rgba(167,123,255,.14);
 --red: #a94d67;
 --green: #76d6a5;
 --radius: 22px;
 --transition: .25s ease;
}

* {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}

html {
 min-height: 100%;
 background: var(--bg);
 scroll-behavior: smooth;
}

body {
 min-height: 100vh;
 overflow-x: hidden;
 color: var(--text);
 фон:
 radial-gradient(ellipse at 12% 0%, rgba(105,65,170,.17), transparent 38%),
 radial-gradient(ellipse at 92% 35%, rgba(74,44,112,.12), transparent 34%),
 linear-gradient(145deg, #09090d 0%, #0d0c13 52%, #09090d 100%);
 font-family: 'Manrope', sans-serif;
 -webkit-font-smoothing: antialiased;
}

button, input {
 font: inherit;
}

button {
 color: inherit;
 cursor: pointer;
}

button:focus-visible,
input:focus-visible {
 outline: 2px solid var(--purple);
 outline-offset: 3px;
}

button:disabled {
 opacity: .4;
 cursor: not-allowed;
}

.app-background {
 position: fixed;
 inset: 0;
 z-index: -2;
 pointer-events: none;
 overflow: hidden;
}

.background-orb {
 position: absolute;
 width: 420px;
 height: 420px;
 border-radius: 50%;
 filter: blur(110px);
 opacity: .12;
 animation: floatOrb 16s ease-in-out infinite alternate;
}

.orb-one {
 top: -190px;
 left: -150px;
 background: #8952e8;
}

.orb-two {
 right: -210px;
 top: 38%;
 background: #57318e;
 animation-delay: -7s;
}

@keyframes floatOrb {
 from { transform: translate(0,0) scale(1); }
 to { transform: translate(55px,35px) scale(1.15); }
}

.app-shell {
 width: min(100% - 36px, 1120px);
 margin: 0 auto;
 padding: 28px 0 150px;
}

.topbar {
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 18px;
 margin-bottom: 38px;
}

.brand {
 display: flex;
 align-items: center;
 gap: 12px;
 min-width: 0;
}

.brand-symbol {
 display: grid;
 place-items: center;
 width: 43px;
 height: 43px;
 border: 1px solid rgba(190,155,255,.35);
 border-radius: 15px;
 background: linear-gradient(145deg, rgba(167,123,255,.2), rgba(255,255,255,.025));
 box-shadow: 0 0 28px rgba(139,91,220,.12);
 color: var(--purple-light);
 font-size: 19px;
 font-weight: 800;
}

.brand-name {
 font-size: 14px;
 font-weight: 800;
 letter-spacing: .19em;
}

.brand-subtitle {
 margin-top: 3px;
 color: var(--muted);
 font-size: 9px;
 letter-spacing: .23em;
}

.topbar-actions {
 display: flex;
 align-items: center;
 gap: 10px;
}

.icon-button,
.profile-button {
 display: grid;
 place-items: center;
 border: 1px solid var(--border);
 background: rgba(255,255,255,.035);
 color: var(--text);
 transition: var(--transition);
}

.icon-button {
 width: 42px;
 height: 42px;
 border-radius: 14px;
 font-size: 17px;
}

.icon-button:hover,
.profile-button:hover {
 border-color: rgba(180,145,255,.4);
 background: var(--purple-soft);
}

.profile-button {
 width: 42px;
 height: 42px;
 border-radius: 50%;
 font-size: 13px;
 font-weight: 800;
 background: linear-gradient(145deg, #6844a0, #272033);
}

.screen {
 display: none;
 animation: screenIn .3s ease both;
}

.screen.active {
 display: block;
}

@keyframes screenIn {
 from { opacity: 0; transform: translateY(8px); }
 to { opacity: 1; transform: translateY(0); }
}

.eyebrow {
 display: flex;
 align-items: center;
 gap: 9px;
 color: var(--purple-light);
 font-size: 10px;
 font-weight: 800;
 letter-spacing: .22em;
 text-transform: uppercase;
}

.status-dot {
 width: 6px;
 height: 6px;
 border-radius: 50%;
 background: var(--green);
 box-shadow: 0 0 12px rgba(118,214,165,.6);
}

.page-title {
 margin-top: 12px;
 font-size: clamp(29px, 5vw, 46px);
 line-height: 1.12;
 font-weight: 800;
 letter-spacing: -.055em;
}

.page-description {
 max-width: 570px;
 margin-top: 12px;
 color: var(--muted);
 font-size: 13px;
 line-height: 1.8;
}

.glass-card {
 border: 1px solid var(--border);
 border-radius: var(--radius);
 background: linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.018));
 box-shadow: 0 18px 55px rgba(0,0,0,.18);
 backdrop-filter: blur(24px);
 -webkit-backdrop-filter: blur(24px);
}

.section-heading {
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 14px;
 margin: 34px 0 16px;
}

.section-heading h2 {
 font-size: 16px;
 font-weight: 800;
 letter-spacing: -.025em;
}

.section-heading span {
 color: var(--muted);
 font-size: 10px;
 letter-spacing: .1em;
 text-transform: uppercase;
}

.primary-button {
 min-height: 44px;
 padding: 0 18px;
 border: 1px solid rgba(190,155,255,.28);
 border-radius: 14px;
 background: linear-gradient(135deg, #9b70ed, #6842ad);
 color: white;
 font-size: 12px;
 font-weight: 800;
 box-shadow: 0 8px 25px rgba(125,78,200,.2);
 transition: var(--transition);
}

.primary-button:hover {
 transform: translateY(-2px);
 filter: brightness(1.1);
}

.secondary-button {
 min-height: 40px;
 padding: 0 15px;
 border: 1px solid var(--border-light);
 border-radius: 13px;
 background: rgba(255,255,255,.045);
 color: var(--text);
 font-size: 11px;
 font-weight: 700;
}

.muted {
 color: var(--muted);
}

@media (max-width: 600px) {
 .app-shell {
 width: min(100% - 26px, 1120px);
 padding-top: 19px;
 }

 .topbar {
 margin-bottom: 29px;
 }

 .brand-name {
 font-size: 12px;
 }

 .page-title {
 font-size: 32px;
 }
}
</style>
</head>

<body>
<div class="app-background">
 <div class="background-orb orb-one"></div>
 <div class="background-orb orb-two"></div>
</div>

<div class="app-shell">

<header class="topbar">
 <div class="brand">
 <div class="brand-symbol">D</div>
 <div>
 <div class="brand-name">DARK PROTOCOL</div>
 <div class="brand-subtitle">PERSONAL DIGITAL ECOSYSTEM</div>
 </div>
 </div>

 <div class="topbar-actions">
 <button class="icon-button" type="button" aria-label="Уведомления">♧</button>
 <button class="profile-button" type="button" onclick="navigateTo('profile')">DP</button>
 </div>
</header>

<!-- ЗДЕСЬ НАЧИНАЕТСЯ ЧАСТЬ 2 -->
 <!-- ГЛАВНЫЙ ЭКРАН -->
<section class="screen active" id="home-screen">

 <div class="eyebrow">
 <span class="status-dot"></span>
 SYSTEM ONLINE
 </div>

 <h1 class="page-title">
 Добро пожаловать в<br>
 <span style="color:var(--purple-light)">DARK PROTOCOL.</span>
 </h1>

 <p class="page-description">
 Твоя персональная цифровая экосистема.
 Музыка, проекты, сообщество и собственный мир
 в одном пространстве.
 </p>

 <div class="glass-card hero-card" style="margin-top:28px;padding:25px;position:relative;overflow:hidden">
 <div style="position:absolute;right:-35px;top:-65px;width:190px;height:190px;border-radius:50%;background:rgba(151,100,240,.16);filter:blur(55px)"></div>

 <div class="eyebrow">PERSONAL SPACE</div>
 <h2 style="font-size:25px;margin-top:13px;letter-spacing:-.04em">Ваш мир.<br>Ваши правила.</h2>
 <p class="muted" style="font-size:12px;line-height:1.8;margin-top:10px;max-width:340px">
 Управляй своим пространством, создавай коллекции
 и развивай собственные проекты.
 </p>

 <button class="primary-button" style="margin-top:20px" onclick="navigateTo('music')">
 Открыть Music <span style="margin-left:8px">↗</span>
 </button>
 </div>

 <div class="section-heading">
 <h2>Модули</h2>
 <span>ВАША ЭКОСИСТЕМА</span>
 </div>

 <div class="modules-grid">

 <button class="module-card glass-card" onclick="navigateTo('music')">
 <div class="module-icon">♫</div>
 <div class="module-info">
 <strong>МУЗЫКА</strong>
 <span>Музыкальная библиотека</span>
 </div>
 <span class="module-arrow">↗</span>
 </button>

 <button class="module-card glass-card" onclick="navigateTo('empire')">
 <div class="module-icon">♜</div>
 <div class="module-info">
 <strong>DARK EMPIRE</strong>
 <span>Твой игровой мир</span>
 </div>
 <span class="module-arrow">↗</span>
 </button>

 <button class="module-card glass-card" onclick="navigateTo('ai')">
 <div class="module-icon">✧</div>
 <div class="module-info">
 <strong>PROJECT AI</strong>
 <span>Интеллектуальный модуль</span>
 </div>
 <span class="module-arrow">↗</span>
 </button>

 <button class="module-card glass-card" onclick="navigateTo('community')">
 <div class="module-icon">⌘</div>
 <div class="module-info">
 <strong>СООБЩЕСТВО</strong>
 <span>Сообщество пользователей</span>
 </div>
 <span class="module-arrow">↗</span>
 </button>

 </div>

 <div class="section-heading">
 <h2>Состояние системы</h2>
 <span>ОБЗОР</span>
 </div>

 <div class="status-grid">
 <div class="glass-card status-card">
 <span class="status-label">SYSTEM</span>
 <strong>ONLINE</strong>
 <span class="status-dot"></span>
 </div>

 <div class="glass-card status-card">
 <span class="status-label">MUSIC</span>
 <strong>READY</strong>
 <span class="status-dot"></span>
 </div>
 </div>

</section>


<!-- MUSIC SCREEN -->
<section class="screen" id="music-screen">

 <div class="eyebrow">
 <span class="status-dot"></span>
 МУЗЫКАЛЬНАЯ ЭКОСИСТЕМА
 </div>

 <h1 class="page-title">Your sound<span style="color:var(--purple-light)">.</span></h1>

 <p class="page-description">
 Твоя музыка. Твоя библиотека. Твои правила.
 </p>

 <div class="glass-card music-welcome" style="margin-top:25px">
 <div>
 <div class="eyebrow">PERSONAL COLLECTION</div>
 <h2>Музыкальная библиотека</h2>
 <p class="muted">Собирай собственную музыкальную коллекцию.</p>
 </div>
 <div class="music-welcome-icon">♫</div>
 </div>

 <div class="music-toolbar">
 <div class="music-search">
 <span>⌕</span>
 <input id="music-search" type="search" placeholder="Поиск треков и исполнителей...">
 </div>
 <button class="icon-button add-track-button" onclick="openMusicImport()" aria-label="Добавить музыку">＋</button>
 </div>

 <div class="music-tabs" id="music-tabs">
 <button class="music-tab active" data-music-tab="library" onclick="switchMusicTab('library')">Library</button>
 <button class="music-tab" data-music-tab="albums" onclick="switchMusicTab('albums')">Альбомы</button>
 <button class="music-tab" data-music-tab="playlists" onclick="switchMusicTab('playlists')">Плейлисты</button>
 <button class="music-tab" data-music-tab="favorites" onclick="switchMusicTab('favorites')">Избранное</button>
 </div>

 <div class="music-content" id="music-content">

 <div class="music-section-heading">
 <div>
 <span class="eyebrow">ВАША КОЛЛЕКЦИЯ</span>
 <h2>Все треки</h2>
 </div>
 <span class="track-count" id="track-count">0 ТРЕКОВ</span>
 </div>

 <div id="music-track-list" class="music-track-list">
 <div class="music-empty glass-card">
 <div class="empty-icon">♫</div>
 <h3>Пока здесь тихо</h3>
 <p>Добавьте первый аудиофайл или прямую ссылку на музыку.</p>
 <button class="primary-button" onclick="openMusicImport()">Добавить музыку</button>
 </div>
 </div>

 </div>

</section>


<!-- ЭКРАН ТЕМНОЙ ИМПЕРИИ -->
<section class="screen" id="empire-screen">

 <div class="eyebrow">ИГРОВОЙ МОДУЛЬ</div>
 <h1 class="page-title">DARK EMPIRE<span style="color:var(--purple-light)">.</span></h1>
 <p class="page-description">Создавай собственную империю и развивай свой игровой мир.</p>

 <div class="glass-card placeholder-card">
 <div class="placeholder-symbol">♜</div>
 <h2>Империя ждет.</h2>
 <p>Игровой мир находится в разработке.</p>
 <span class="coming-soon">МОДУЛЬ В РАЗРАБОТКЕ</span>
 </div>

</section>

<!-- ЭКРАН ПРОЕКТА AI -->
<section class="screen" id="ai-screen">

 <div class="eyebrow">ИНТЕЛЛЕКТУАЛЬНЫЙ МОДУЛЬ</div>
 <h1 class="page-title">PROJECT AI<span style="color:var(--purple-light)">.</span></h1>
 <p class="page-description">Персональный интеллектуальный помощник внутри DARK PROTOCOL.</p>

 <div class="glass-card placeholder-card">
 <div class="placeholder-symbol">✧</div>
 <h2>Что-то умное.</h2>
 <p>Подключение искусственного интеллекта будет добавлено отдельно.</p>
 <span class="coming-soon">МОДУЛЬ В РАЗРАБОТКЕ</span>
 </div>

</section>


<!-- ЭКРАН СООБЩЕСТВА -->
<section class="screen" id="community-screen">

 <div class="eyebrow">SOCIAL SPACE</div>
 <h1 class="page-title">COMMUNITY<span style="color:var(--purple-light)">.</span></h1>
 <p class="page-description">Пространство для общения, профилей и взаимодействия.</p>

 <div class="glass-card placeholder-card">
 <div class="placeholder-symbol">⌘</div>
 <h2>Найдите своих людей.</h2>
 <p>Социальная система будет подключена на следующем этапе.</p>
 <span class="coming-soon">МОДУЛЬ В РАЗРАБОТКЕ</span>
 </div>

</section>


<!-- ЭКРАН ПРОФИЛЯ -->
<section class="screen" id="profile-screen">

 <div class="eyebrow">ЛИЧНЫЙ КАБИНЕТ</div>
 <h1 class="page-title">ПРОФИЛЬ<span style="color:var(--purple-light)">.</span></h1>

 <div class="glass-card profile-card">
 <div class="profile-avatar">DP</div>
 <h2>DARK USER</h2>
 <p class="muted">Участник DARK PROTOCOL</p>
 <div class="profile-divider"></div>
 <div class="profile-stat">
 <span>Статус аккаунта</span>
 <strong>АКТИВНО</strong>
 </div>
 <div class="profile-stat">
 <span>Платформа</span>
 <strong>ЛИЧНАЯ</strong>
 </div>
 </div>

</section>


<!-- ЭКРАН СИСТЕМЫ -->
<section class="screen" id="system-screen">

 <div class="eyebrow">ЦЕНТР УПРАВЛЕНИЯ</div>
 <h1 class="page-title">СИСТЕМА<span style="color:var(--purple-light)">.</span></h1>

 <div class="glass-card system-card">
 <h3>Приложение</h3>
 <div class="profile-stat">
 <span>Интерфейс</span>
 <strong>LIQUID GLASS</strong>
 </div>
 <div class="profile-stat">
 <span>Тема</span>
 <strong>ТЁМНО-ФИОЛЕТОВАЯ</strong>
 </div>
 <div class="profile-stat">
 <span>Версия</span>
 <strong>1.0.0</strong>
 </div>
 </div>

</section>


<style>
/* HOME AND MODULES */

.modules-grid {
 display: grid;
 grid-template-columns: repeat(2, minmax(0,1fr));
 gap: 13px;
}
 .module-card {
 min-height: 115px;
 padding: 17px;
 display: flex;
 align-items: center;
 gap: 13px;
 text-align: left;
 transition: var(--transition);
}

.module-card:hover {
 transform: translateY(-3px);
 border-color: rgba(174,137,255,.35);
 background: rgba(167,123,255,.08);
}

.module-icon {
 flex: 0 0 43px;
 height: 43px;
 display: grid;
 place-items: center;
 border-radius: 14px;
 background: var(--purple-soft);
 color: var(--purple-light);
 font-size: 23px;
}

.module-info {
 min-width: 0;
 display: flex;
 flex-direction: column;
 gap: 6px;
}

.module-info strong {
 font-size: 11px;
 letter-spacing: .08em;
}

.module-info span {
 color: var(--muted);
 font-size: 10px;
 line-height: 1.4;
}

.module-arrow {
 margin-left: auto;
 align-self: flex-start;
 color: var(--muted);
 font-size: 14px;
}

.status-grid {
 display: grid;
 grid-template-columns: repeat(2,1fr);
 gap: 12px;
}

.status-card {
 padding: 16px;
 display: flex;
 flex-direction: column;
 gap: 9px;
}

.status-label {
 color: var(--muted);
 font-size: 9px;
 letter-spacing: .14em;
}

.status-card strong {
 font-size: 13px;
 letter-spacing: .08em;
}

.status-card .status-dot {
 align-self: flex-end;
 margin-top: -20px;
}

.placeholder-card {
 min-height: 260px;
 margin-top: 25px;
 padding: 35px 22px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;
}

.placeholder-symbol {
 width: 64px;
 height: 64px;
 display: grid;
 place-items: center;
 margin-bottom: 20px;
 border-radius: 20px;
 background: var(--purple-soft);
 color: var(--purple-light);
 font-size: 31px;
}

.placeholder-card h2 {
 font-size: 21px;
}

.placeholder-card p {
 margin-top: 9px;
 color: var(--muted);
 font-size: 12px;
}

.coming-soon {
 margin-top: 22px;
 color: var(--purple-light);
 font-size: 9px;
 font-weight: 800;
 letter-spacing: .17em;
}

.profile-card,
.system-card {
 margin-top: 25px;
 padding: 23px;
}

.profile-card {
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
}

.profile-avatar {
 width: 75px;
 height: 75px;
 display: grid;
 place-items: center;
 margin-bottom: 15px;
 border: 1px solid rgba(190,155,255,.35);
 border-radius: 25px;
 background: linear-gradient(145deg,#7951b9,#211b2d);
 font-size: 23px;
 font-weight: 800;
}

.profile-card h2 {
 font-size: 17px;
}

.profile-card > p {
 margin-top: 6px;
 font-size: 11px;
}

.profile-divider {
 width: 100%;
 height: 1px;
 margin: 23px 0 10px;
 background: var(--border);
}

.profile-stat {
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 15px;
 padding: 13px 0;
 border-bottom: 1px solid var(--border);
 text-align: left;
}

.profile-stat:last-child {
 border-bottom: 0;
}

.profile-stat span {
 color: var(--muted);
 font-size: 11px;
}

.profile-stat strong {
 font-size: 10px;
 letter-spacing: .08em;
}

.system-card h3 {
 margin-bottom: 10px;
 font-size: 15px;
}


/* MUSIC SCREEN */

.music-welcome {
 min-height: 125px;
 padding: 22px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 15px;
 overflow: hidden;
}

.music-welcome h2 {
 margin-top: 10px;
 font-size: 20px;
 letter-spacing: -.04em;
}

.music-welcome p {
 margin-top: 7px;
 font-size: 10px;
}

.music-welcome-icon {
 width: 65px;
 height: 65px;
 flex: 0 0 65px;
 display: grid;
 place-items: center;
 border: 1px solid rgba(190,155,255,.22);
 border-radius: 21px;
 background: linear-gradient(145deg,rgba(167,123,255,.24),rgba(255,255,255,.025));
 color: var(--purple-light);
 font-size: 30px;
 box-shadow: 0 0 40px rgba(167,123,255,.12);
}

.music-toolbar {
 display: flex;
 gap: 10px;
 margin-top: 20px;
}

.music-search {
 min-width: 0;
 height: 46px;
 flex: 1;
 display: flex;
 align-items: center;
 gap: 11px;
 padding: 0 14px;
 border: 1px solid var(--border);
 border-radius: 15px;
 background: rgba(255,255,255,.035);
 color: var(--muted);
}

.music-search > span {
 font-size: 23px;
}

.music-search input {
 width: 100%;
 min-width: 0;
 border: 0;
 outline: 0;
 background: transparent;
 color: var(--text);
 font-size: 11px;
}

.music-search input::placeholder {
 color: #777282;
}

.add-track-button {
 flex: 0 0 46px;
 width: 46px;
 height: 46px;
 font-size: 24px;
 color: var(--purple-light);
}

.music-tabs {
 display: flex;
 gap: 7px;
 overflow-x: auto;
 padding: 3px 0 9px;
 margin-top: 20px;
 scrollbar-width: none;
}

.music-tabs::-webkit-scrollbar {
 display: none;
}

.music-tab {
 flex: 0 0 auto;
 min-height: 36px;
 padding: 0 14px;
 border: 1px solid var(--border);
 border-radius: 12px;
 background: rgba(255,255,255,.025);
 color: var(--muted);
 font-size: 10px;
 font-weight: 700;
 transition: var(--transition);
}

.music-tab.active {
 border-color: rgba(180,145,255,.36);
 background: var(--purple-soft);
 color: var(--purple-light);
}

.music-section-heading {
 display: flex;
 align-items: flex-end;
 justify-content: space-between;
 gap: 12px;
 margin: 25px 0 15px;
}

.music-section-heading h2 {
 margin-top: 6px;
 font-size: 19px;
}

.track-count {
 color: var(--muted);
 font-size: 9px;
 letter-spacing: .12em;
}

.music-track-list {
 display: flex;
 flex-direction: column;
 gap: 9px;
}

.music-empty {
 padding: 35px 18px;
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
}

.empty-icon {
 width: 57px;
 height: 57px;
 display: grid;
 place-items: center;
 margin-bottom: 17px;
 border-radius: 18px;
 background: var(--purple-soft);
 color: var(--purple-light);
 font-size: 26px;
}

.music-empty h3 {
 font-size: 15px;
}

.music-empty p {
 max-width: 250px;
 margin: 9px 0 19px;
 color: var(--muted);
 font-size: 11px;
 line-height: 1.7;
}

@media (max-width: 480px) {
 .modules-grid {
 gap: 9px;
 }

 .module-card {
 min-height: 105px;
 padding: 12px;
 gap: 9px;
 }

 .module-icon {
 flex-basis: 36px;
 height: 36px;
 font-size: 19px;
 }

 .module-info strong {
 font-size: 9px;
 }

 .module-info span {
 font-size: 9px;
 }
}
</style>
<!-- MODAL ДЛЯ ИМПОРТА МУЗЫКИ -->

<div class="modal-overlay" id="music-import-modal" onclick="if(event.target===this)closeMusicImport()">
 <div class="modal-window glass-card">
 <div class="modal-header">
 <div>
 <div class="eyebrow">MUSIC MANAGER</div>
 <h2>Add new music</h2>
 </div>
 <button class="modal-close" onclick="closeMusicImport()">×</button>
 </div>

 <div class="import-tabs">
 <button class="import-tab active" data-import-tab="file" onclick="switchImportTab('file')">Локальные файлы</button>
 <button class="import-tab" data-import-tab="link" onclick="switchImportTab('link')">Прямые ссылки</button>
 </div>

 <div id="file-import-panel">
 <label class="upload-zone" for="music-file-input">
 <div class="upload-icon">↑</div>
 <strong>Загрузить аудиофайлы</strong>
 <span>MP3, WAV, M4A, OGG, FLAC</span>
 <span class="upload-hint">Нажмите, чтобы выбрать файлы</span>
 </label>

 <input id="music-file-input" type="file" accept="audio/*,.mp3,.wav,.m4a,.ogg,.flac" multiple hidden>

 <p class="form-hint">Файлы сохраняются в локальной базе приложения на этом устройстве.</p>
 </div>

 <div id="link-import-panel" hidden>
 <label class="field-label" for="link-track-title">Название композиции</label>
 <input class="form-input" id="link-track-title" placeholder="Название трека">

 <label class="field-label" for="link-track-artist">Исполнитель</label>
 <input class="form-input" id="link-track-artist" placeholder="Исполнитель">

 <label class="field-label" for="link-track-url">Прямая ссылка на аудио</label>
 <input class="form-input" id="link-track-url" type="url" placeholder="https://example.com/audio.mp3">

 <label class="field-label" for="link-track-cover">Ссылка на обложку (необязательно)</label>
 <input class="form-input" id="link-track-cover" type="url" placeholder="https://example.com/cover.jpg">

 <button class="primary-button full-button" onclick="addTrackFromLink()">Добавить композицию</button>

 <p class="form-hint">Нужна прямая ссылка на аудиофайл, а не ссылка на страницу Spotify или YouTube.</p>
 </div>

 <div class="import-status" id="import-status" aria-live="polite"></div>
 </div>
</div>


<!-- МОДАЛЬНОЕ ОКНО ПЛЕЙЛИСТА -->
<div class="modal-overlay" id="playlist-modal" onclick="if(event.target===this)closePlaylistModal()">
 <div class="modal-window glass-card">
 <div class="modal-header">
 <div>
 <div class="eyebrow">ВАША КОЛЛЕКЦИЯ</div>
 <h2>Создать плейлист</h2>
 </div>
 <button class="modal-close" onclick="closePlaylistModal()">×</button>
 </div>

 <label class="field-label" for="playlist-name">Название плейлиста</label>
 <input class="form-input" id="playlist-name" maxlength="50" placeholder="Мой плейлист">

 <label class="field-label" for="playlist-description">Описание</label>
 <input class="form-input" id="playlist-description" maxlength="120" placeholder="A collection of your favorite tracks">

 <button class="primary-button full-button" onclick="createPlaylist()">Создать плейлист</button>
 </div>
</div>


<!-- МОДАЛЬНОЕ ОКНО АЛЬБОМА -->
<div class="modal-overlay" id="album-modal" onclick="if(event.target===this)closeAlbumModal()">
 <div class="modal-window glass-card">
 <div class="modal-header">
 <div>
 <div class="eyebrow">МУЗЫКАЛЬНАЯ КОЛЛЕКЦИЯ</div>
 <h2>Создать альбом</h2>
 </div>
 <button class="modal-close" onclick="closeAlbumModal()">×</button>
 </div>

 <label class="field-label" for="album-name">Название альбома</label>
 <input class="form-input" id="album-name" maxlength="60" placeholder="Название альбома">

 <label class="field-label" for="album-artist">Исполнитель</label>
 <input class="form-input" id="album-artist" maxlength="60" placeholder="Artist">

 <label class="field-label" for="album-cover">Ссылка на обложку</label>
 <input class="form-input" id="album-cover" type="url" placeholder="https://example.com/cover.jpg">

 <button class="primary-button full-button" onclick="createAlbum()">Создать альбом</button>
 </div>
</div>


<!-- МУЗЫКАЛЬНОЕ ЯДРО -->

<script>
const DP = window.DP || {};
window.DP = DP;

DP.db = null;
DP.tracks = [];
DP.playlists = [];
DP.albums = [];
DP.favorites = [];
DP.currentTab = 'library';
DP.currentPlaylist = null;
DP.currentAlbum = null;


/* БАЗА ДАННЫХ */

function openMusicDatabase() {
 return new Promise((resolve, reject) => {
 if (!('indexedDB' in window)) {
 reject(new Error('IndexedDB недоступна.'));
 return;
 }

 const request = indexedDB.open('DarkProtocolMusic', 1);

 request.onupgradeneeded = event => {
 const db = event.target.result;

 if (!db.objectStoreNames.contains('tracks')) {
 db.createObjectStore('tracks', { keyPath: 'id' });
 }
 };

 request.onsuccess = event => {
 DP.db = event.target.result;
 resolve(DP.db);
 };

 request.onerror = () => reject(request.error);
 });
}


function saveAudioFile(track) {
 return new Promise((resolve, reject) => {
 const transaction = DP.db.transaction('tracks', 'readwrite');
 transaction.objectStore('tracks').put(track);

 transaction.oncomplete = () => resolve(true);
 transaction.onerror = () => reject(transaction.error);
 });
}


function deleteAudioFile(id) {
 return new Promise((resolve, reject) => {
 const transaction = DP.db.transaction('tracks', 'readwrite');
 transaction.objectStore('tracks').delete(id);

 transaction.oncomplete = () => resolve(true);
 transaction.onerror = () => reject(transaction.error);
 });
}


function loadAudioFiles() {
 return new Promise((resolve, reject) => {
 const transaction = DP.db.transaction('tracks', 'readonly');
 const request = transaction.objectStore('tracks').getAll();

 request.onsuccess = () => resolve(request.result || []);
 request.onerror = () => reject(request.error);
 });
}


/* ХРАНЕНИЕ */

function readMusicStorage(key, fallback) {
 try {
 const value = localStorage.getItem('dp_music_' + key);
 return value ? JSON.parse(value) : fallback;
 } catch (error) {
 return fallback;
 }
}


function writeMusicStorage(key, value) {
 localStorage.setItem('dp_music_' + key, JSON.stringify(value));
}


function createMusicId() {
 return 'dp_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
}


function persistMusicMetadata() {
 writeMusicStorage('playlists', DP.playlists);
 writeMusicStorage('albums', DP.albums);
 writeMusicStorage('favorites', DP.favorites);

 const linkTracks = DP.tracks
 .filter(track => track.sourceType === 'url');

 writeMusicStorage('link_tracks', linkTracks);
}


/* ИМПОРТ АУДИОФАЙЛОВ */

async function importMusicFiles(fileList) {
 const files = Array.from(fileList || []);
 if (!files.length) return;

 const status = document.getElementById('import-status');
 status.textContent = 'Сохраняем композиции...';

 если (!DP.db) {
 status.textContent = 'Музыкальная база не готова. Перезагрузите страницу.';
 return;
 }

 let added = 0;

 for (const file of files) {
 if (!file.type.startsWith('audio/') &&
 !/\.(mp3|wav|m4a|ogg|flac|aac)$/i.test(file.name)) {
 continue;
 }

 const track = {
 id: createMusicId(),
 title: file.name.replace(/\.[^/.]+$/, ''),
 artist: 'Unknown artist',
 sourceType: 'file',
 file,
 cover: '',
 createdAt: Date.now()
 };

 try {
 await saveAudioFile(track);
 DP.tracks.push(track);
 added++;
 } catch (error) {
 console.error(error);
 status.textContent = 'Ошибка сохранения файла. Возможно, недостаточно места.';
 break;
 }
 }

 renderMusic();

 if (added > 0) {
 status.textContent = 'Добавлено композиций: ' + added;
 } else if (!status.textContent.startsWith('Ошибка')) {
 status.textContent = 'Подходящие аудиофайлы не найдены.';
 }
}


/* ДОБАВИТЬ ПРЯМУЮ АУДИОССЫЛКУ */
 function addTrackFromLink() {
 const title = document.getElementById('link-track-title').value.trim();
 const artist = document.getElementById('link-track-artist').value.trim();
 const url = document.getElementById('link-track-url').value.trim();
 const cover = document.getElementById('link-track-cover').value.trim();

 const status = document.getElementById('import-status');

 if (!title || !url) {
 status.textContent = 'Укажи название композиции и ссылку.';
 return;
 }

 try {
 const parsed = new URL(url);

 if (!['http:', 'https:'].includes(parsed.protocol)) {
 throw new Error('Invalid URL');
 }

 if (cover) {
 const coverURL = new URL(cover);

 if (!['http:', 'https:'].includes(coverURL.protocol)) {
 throw new Error('Invalid cover URL');
 }
 }
 } catch (error) {
 status.textContent = 'Проверь правильность ссылки.';
 return;
 }

 const track = {
 id: createMusicId(),
 title,
 artist: artist || 'Unknown artist',
 sourceType: 'url',
 src: url,
 cover,
 createdAt: Date.now()
 };

 DP.tracks.push(track);
 persistMusicMetadata();
 renderMusic();

 document.getElementById('link-track-title').value = '';
 document.getElementById('link-track-artist').value = '';
 document.getElementById('link-track-url').value = '';
 document.getElementById('link-track-cover').value = '';

 status.textContent = 'Композиция добавлена в библиотеку.';
}


/* ИНИЦИАЛИЗАЦИЯ */

async function initializeMusic() {
 DP.playlists = readMusicStorage('playlists', []);
 DP.albums = readMusicStorage('albums', []);
 DP.favorites = readMusicStorage('favorites', []);

 const linkTracks = readMusicStorage('link_tracks', []);
 DP.tracks = linkTracks;

 try {
 await openMusicDatabase();

 const fileTracks = await loadAudioFiles();
 DP.tracks = [...fileTracks, ...linkTracks];
 } catch (error) {
 console.error('Music database:', error);

 const status = document.getElementById('import-status');
 if (status) {
 status.textContent = 'Ошибка музыкальной базы: ' + error.message;
 }
 }

 renderMusic();
}


/* БЕЗОПАСНЫЙ ТЕКСТ */

function escapeMusicText(value) {
 return String(value ?? '').replace(/[&<>"']/g, char => ({
 '&': '&amp;',
 '<': '<',
 '>': '>',
 '"': '"',
 "'": '&#39;'
 })[char]);
}


/* RENDER MUSIC */

function renderMusic() {
 const container = document.getElementById('music-track-list');
 const count = document.getElementById('track-count');

 if (!container || !count) return;

 const search = (
 document.getElementById('music-search')?.value || ''
 ).toLowerCase().trim();

 let tracks = [...DP.tracks];

 if (DP.currentTab === 'favorites') {
 tracks = tracks.filter(track => DP.favorites.includes(track.id));
 }

 if (DP.currentTab === 'playlists' && DP.currentPlaylist) {
 tracks = tracks.filter(track => DP.currentPlaylist.tracks.includes(track.id));
 }

 if (DP.currentTab === 'albums' && DP.currentAlbum) {
 tracks = tracks.filter(track => DP.currentAlbum.tracks.includes(track.id));
 }

 if (search) {
 tracks = tracks.filter(track =>
 (track.title + ' ' + track.artist).toLowerCase().includes(search)
 );
 }

 count.textContent = tracks.length + ' TRACKS';

 if (!tracks.length) {
 container.innerHTML = 
 <div class="music-empty glass-card">
 <div class="empty-icon">♫</div>
 <h3>Здесь пока пусто</h3>
 <p>Добавьте музыку или выберите другую категорию.</p>
 <button class="primary-button" onclick="openMusicImport()">Добавить музыку</button>
 </div>
 ;
 return;
 }

 container.innerHTML = tracks.map(track => {
 const safeTitle = escapeMusicText(track.title);
 const safeArtist = escapeMusicText(track.artist);
 const isFavorite = DP.favorites.includes(track.id);

 const cover = track.cover
 ? <img src="${escapeMusicText(track.cover)}" alt="" class="track-cover" loading="lazy">
 : <div class="track-cover track-cover-placeholder">♫</div>;

 return 
 <div class="track-row glass-card">
 ${cover}

 <button class="track-main" onclick="playTrack('${track.id}')">
 <strong>${safeTitle}</strong>
 <span>${safeArtist}</span>
 </button>

 <button class="track-favorite ${isFavorite ? 'is-favorite' : ''}"
 onclick="toggleFavorite('${track.id}')">
 ${isFavorite ? '♥' : '♡'}
 </button>

 <button class="track-more"
 onclick="showTrackMenu('${track.id}')">⋯</button>
 </div>
 ;
 }).join('');
}


/* MUSIC TABS */

function switchMusicTab(tab) {
 DP.currentTab = tab;
 DP.currentPlaylist = null;
 DP.currentAlbum = null;

 документ.querySelectorAll('.music-tab').forEach(button => {
 button.classList.toggle('active', button.dataset.musicTab === tab);
 });

 const heading = {
 библиотека: 'Все треки',
 альбомы: 'Альбомы',
 плейлисты: 'Плейлисты',
 избранное: 'Избранное'
 };

 const title = document.querySelector('.music-section-heading h2');
 if (title) title.textContent = heading[tab] || 'Музыка';

 if (tab === 'albums') {
 renderAlbums();
 } else if (tab === 'playlists') {
 renderPlaylists();
 } else {
 renderMusic();
 }
}


/* ИЗБРАННОЕ */

function toggleFavorite(id) {
 if (DP.favorites.includes(id)) {
 DP.favorites = DP.favorites.filter(item => item !== id);
 } else {
 DP.favorites.push(id);
 }

 persistMusicMetadata();
 renderMusic();
}


/* ПЛЕЙЛИСТЫ */

function openPlaylistModal() {
 document.getElementById('playlist-modal').classList.add('visible');
 document.getElementById('playlist-name').value = '';
 document.getElementById('playlist-description').value = '';
}


function closePlaylistModal() {
 document.getElementById('playlist-modal').classList.remove('visible');
}


function createPlaylist() {
 const name = document.getElementById('playlist-name').value.trim();
 const description = document.getElementById('playlist-description').value.trim();

 if (!name) {
 alert('Введи название плейлиста.');
 return;
 }

 DP.playlists.push({
 id: createMusicId(),
 name,
 description,
 tracks: [],
 createdAt: Date.now()
 });

 persistMusicMetadata();
 closePlaylistModal();
 renderPlaylists();
}


function renderPlaylists() {
 const container = document.getElementById('music-track-list');

 документ.querySelector('.music-section-heading h2').textContent = 'Ваши плейлисты';
 document.getElementById('track-count').textContent =
 DP.playlists.length + ' ПЛЕЙЛИСТЫ';

 container.innerHTML = 
 <button class="primary-button full-button" onclick="openPlaylistModal()">
 ＋ Создать плейлист
 </button>

 ${DP.playlists.map(item => 
 <div class="collection-row glass-card">
 <div class="collection-art">♫</div>
 <div class="collection-info">
 <strong>${escapeMusicText(item.name)}</strong>
 <span>${item.tracks.length} треков</span>
 </div>
 <button class="secondary-button" onclick="openPlaylist('${item.id}')">Открыть</button>
 </div>
 ).join('')}
 ;
}


function openPlaylist(id) {
 DP.currentPlaylist = DP.playlists.find(item => item.id === id);

 if (!DP.currentPlaylist) return;

 документ.querySelector('.music-section-heading h2').textContent =
 DP.currentPlaylist.name;

 renderMusic();
}


/* АЛЬБОМЫ */

function openAlbumModal() {
 document.getElementById('album-modal').classList.add('visible');
 document.getElementById('album-name').value = '';
 document.getElementById('album-artist').value = '';
 document.getElementById('album-cover').value = '';
}


function closeAlbumModal() {
 document.getElementById('album-modal').classList.remove('visible');
}


function createAlbum() {
 const name = document.getElementById('album-name').value.trim();
 const artist = document.getElementById('album-artist').value.trim();
 const cover = document.getElementById('album-cover').value.trim();

 if (!name) {
 alert('Введи название альбома.');
 return;
 }

 DP.albums.push({
 id: createMusicId(),
 name,
 artist,
 cover,
 tracks: [],
 createdAt: Date.now()
 });
 persistMusicMetadata();
 closeAlbumModal();
 renderAlbums();
}


function renderAlbums() {
 const container = document.getElementById('music-track-list');

 документ.querySelector('.music-section-heading h2').textContent = 'Ваши альбомы';
 document.getElementById('track-count').textContent =
 DP.albums.length + ' АЛЬБОМОВ';

 container.innerHTML = 
 <button class="primary-button full-button" onclick="openAlbumModal()">
 ＋ Создать альбом
 </button>

 ${DP.albums.map(item => 
 <div class="collection-row glass-card">
 <div class="collection-art">
 ${item.cover
 ? <img src="${escapeMusicText(item.cover)}" alt="">
 : '◈'}
 </div>

 <div class="collection-info">
 <strong>${escapeMusicText(item.name)}</strong>
 <span>${escapeMusicText(item.artist || 'Unknown artist')}</span>
 </div>

 <button class="secondary-button" onclick="openAlbum('${item.id}')">Открыть</button>
 </div>
 ).join('')}
 ;
}


function openAlbum(id) {
 DP.currentAlbum = DP.albums.find(item => item.id === id);

 если (!DP.currentAlbum), то ничего не делать

 документ.querySelector('.music-section-heading h2').textContent =
 DP.currentAlbum.name;

 renderMusic();
}


/* ДОБАВИТЬ ТРЕК В КОЛЛЕКЦИЮ */

function addTrackToPlaylist(trackId, playlistId) {
 const playlist = DP.playlists.find(item => item.id === playlistId);

 if (!playlist || !DP.tracks.some(track => track.id === trackId)) return;

 if (!playlist.tracks.includes(trackId)) {
 playlist.tracks.push(trackId);
 }

 persistMusicMetadata();
 renderPlaylists();
}


function addTrackToAlbum(trackId, albumId) {
 const album = DP.albums.find(item => item.id === albumId);

 if (!album || !DP.tracks.some(track => track.id === trackId)) return;

 if (!album.tracks.includes(trackId)) {
 album.tracks.push(trackId);
 }

 persistMusicMetadata();
 renderAlbums();
}


/* МЕНЮ ТРЕКА */

function showTrackMenu(id) {
 const track = DP.tracks.find(item => item.id === id);
 if (!track) return;

 const options = [];

 if (DP.playlists.length) options.push('Добавить в плейлист');
 if (DP.albums.length) options.push('Добавить в альбом');

 options.push('Удалить композицию');

 const choice = prompt(
 track.title + '\n\n' +
 options.map((item, index) => ${index + 1}. ${item}).join('\n') +
 '\n\nВведи номер действия:'
 );

 const index = Number(choice) - 1;

 if (!Number.isInteger(index) index < 0 index >= options.length) return;

 const selected = options[index];

 if (selected === 'Добавить в плейлист') {
 const answer = Number(prompt(
 DP.playlists.map((item, i) => ${i + 1}. ${item.name}).join('\n') +
 '\n\nНомер плейлиста:'
 ));

 if (answer >= 1 && answer <= DP.playlists.length) {
 addTrackToPlaylist(id, DP.playlists[answer - 1].id);
 }

 } else if (selected === 'Добавить в альбом') {
 const answer = Number(prompt(
 DP.albums.map((item, i) => ${i + 1}. ${item.name}).join('\n') +
 '\n\nНомер альбома:'
 ));

 if (answer >= 1 && answer <= DP.albums.length) {
 addTrackToAlbum(id, DP.albums[answer - 1].id);
 }

 } else if (selected === 'Удалить композицию') {
 if (confirm('Удалить ' + track.title + '?')) {
 removeTrack(id);
 }
 }
}


/* УДАЛИТЬ ТРЕК */

async function removeTrack(id) {
 const track = DP.tracks.find(item => item.id === id);
 if (!track) return;

 if (window.currentTrack?.id === id) {
 stopMusic();
 }

 if (track.sourceType === 'file' && DP.db) {
 await deleteAudioFile(id);
 }

 DP.tracks = DP.tracks.filter(item => item.id !== id);
 DP.favorites = DP.favorites.filter(item => item !== id);

 DP.playlists.forEach(item => {
 item.tracks = item.tracks.filter(trackId => trackId !== id);
 });

 DP.albums.forEach(item => {
 item.tracks = i
 <!-- DARK PROTOCOL AUDIO PLAYER -->

<style>
/* PLAYER */

.dp-player {
 position: fixed;
 left: 50%;
 bottom: 88px;
 transform: translateX(-50%);
 width: min(680px, calc(100% - 28px));
 z-index: 90;
 display: grid;
 grid-template-columns: 48px minmax(0, 1fr) auto;
 align-items: center;
 gap: 13px;
 padding: 12px 15px;
 border: 1px solid rgba(197,166,255,.2);
 border-radius: 20px;
 background: rgba(19,17,27,.88);
 backdrop-filter: blur(24px);
 -webkit-backdrop-filter: blur(24px);
 box-shadow: 0 12px 45px rgba(0,0,0,.38);
 opacity: 0;
 visibility: hidden;
 pointer-events: none;
 transition: opacity .25s ease, transform .25s ease, visibility .25s;
}

.dp-player.visible {
 opacity: 1;
 visibility: visible;
 pointer-events: auto;
}

.dp-player-cover {
 width: 48px;
 height: 48px;
 border-radius: 13px;
 object-fit: cover;
 background: linear-gradient(145deg,#302344,#17131f);
 display: grid;
 place-items: center;
 color: #c5a6ff;
 font-size: 22px;
 overflow: hidden;
}

.dp-player-cover img {
 width: 100%;
 height: 100%;
 object-fit: cover;
}

.dp-player-info {
 min-width: 0;
}

.dp-player-title {
 display: block;
 color: var(--text);
 font-size: 13px;
 font-weight: 800;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
}

.dp-player-artist {
 display: block;
 color: var(--muted);
 font-size: 11px;
 margin-top: 3px;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
}

.dp-player-controls {
 display: flex;
 align-items: center;
 gap: 7px;
}

.dp-player-button {
 width: 34px;
 height: 34px;
 border: 0;
 border-radius: 50%;
 background: transparent;
 color: #d9c7ff;
 font-size: 17px;
 cursor: pointer;
 transition: background .2s, transform .2s;
}

.dp-player-button:hover {
 background: rgba(255,255,255,.09);
 transform: scale(1.06);
}

.dp-player-button.main {
 width: 39px;
 height: 39px;
 color: #17121f;
 background: #c5a6ff;
 font-size: 16px;
}

.dp-player-progress {
 grid-column: 1 / -1;
 display: flex;
 align-items: center;
 gap: 9px;
 margin-top: 1px;
}

.dp-player-time {
 color: var(--muted);
 font-size: 10px;
 min-width: 31px;
 font-variant-numeric: tabular-nums;
}

.dp-player-range {
 flex: 1;
 min-width: 0;
 accent-color: var(--purple);
 cursor: pointer;
}

.dp-player-volume {
 display: flex;
 align-items: center;
 gap: 7px;
 margin-left: 5px;
}

.dp-player-volume input {
 width: 65px;
 accent-color: var(--purple);
 cursor: pointer;
}

.dp-player-error {
 grid-column: 1 / -1;
 color: #ff9caa;
 font-size: 10px;
 display: none;
 margin-top: 3px;
}

@media(max-width:480px) {
 .dp-player {
 bottom: 82px;
 grid-template-columns: 40px minmax(0, 1fr) auto;
 gap: 9px;
 padding: 10px;
 }

 .dp-player-cover {
 width: 40px;
 height: 40px;
 }

 .dp-player-controls {
 gap: 2px;
 }

 .dp-player-button {
 width: 30px;
 height: 30px;
 }

 .dp-player-button.main {
 width: 35px;
 height: 35px;
 }

 .dp-player-volume {
 display: none;
 }
}
</style>


<!-- PLAYER HTML -->

<div class="dp-player" id="dp-player">

 <div class="dp-player-cover" id="dp-player-cover">
 ♫
 </div>

 <div class="dp-player-info">
 <span class="dp-player-title" id="dp-player-title">Ничего не воспроизводится</span>
 <span class="dp-player-artist" id="dp-player-artist">Выберите трек</span>
 </div>

 <div class="dp-player-controls">
 <button class="dp-player-button"
 onclick="playPrevious()"
 aria-label="Previous track">‹</button>

 <button class="dp-player-button main"
 id="dp-play-button"
 onclick="togglePlayer()"
 aria-label="Воспроизведение или пауза">▶</button>

 <button class="dp-player-button"
 onclick="playNext()"
 aria-label="Следующий трек">›</button>
 </div>

 <div class="dp-player-progress">
 <span class="dp-player-time" id="dp-current-time">0:00</span>

 <input
 class="dp-player-range"
 id="dp-progress"
 type="range"
 min="0"
 max="100"
 value="0"
 шаг = "0,1"
 oninput="seekMusic(this.value)"
 >

 <span class="dp-player-time" id="dp-duration">0:00</span>

 <div class="dp-player-volume">
 <span>◖</span>
 <input
 id="dp-volume"
 type="range"
 min="0"
 max="1"
 step="0.01"
 value="0.8"
 oninput="setMusicVolume(this.value)"
 >
 </div>
 </div>

 <div class="dp-player-error" id="dp-player-error"></div>

</div>

<audio id="dp-audio" preload="metadata"></audio>


<!-- PLAYER LOGIC -->

<script>
(function () {

 const audio = document.getElementById('dp-audio');

 if (!audio) return;

 окно.dpAudio = audio;
 window.currentTrack = null;

 let currentObjectURL = null;
 let currentTrackIndex = -1;


 /* ФОРМАТ ВРЕМЕНИ */

 function formatMusicTime(seconds) {
 if (!Number.isFinite(seconds)) return '0:00';

 const minutes = Math.floor(seconds / 60);
 const remaining = Math.floor(seconds % 60);

 return minutes + ':' + String(remaining).padStart(2, '0');
 }


 /* PLAYER UI */

 function updatePlayerUI() {
 const progress = document.getElementById('dp-progress');
 const currentTime = document.getElementById('dp-current-time');
 const duration = document.getElementById('dp-duration');
 const button = document.getElementById('dp-play-button');

 if (!progress !currentTime !duration || !button) return;

 const total = audio.duration || 0;
 const current = audio.currentTime || 0;

 progress.max = total || 100;
 progress.value = current;

 currentTime.textContent = formatMusicTime(current);
 duration.textContent = formatMusicTime(total);

 button.textContent = audio.paused ? '▶' : 'Ⅱ';
 }

 window.updatePlayerUI = updatePlayerUI;


 /* ИНФОРМАЦИЯ О ТРЕКЕ */

 function updateTrackInfo(track) {
 const player = document.getElementById('dp-player');
 const title = document.getElementById('dp-player-title');
 const artist = document.getElementById('dp-player-artist');
 const cover = document.getElementById('dp-player-cover');

 if (!player !title !artist || !cover) return;

 player.classList.add('visible');

 title.textContent = track.title || 'Unknown track';
 artist.textContent = track.artist || 'Unknown artist';

 if (track.cover) {
 cover.innerHTML = '';

 const image = document.createElement('img');
 image.src = track.cover;
 image.alt = 'Обложка альбома';

 image.onerror = () => {
 cover.innerHTML = '♫';
 };

 cover.appendChild(image);
 } else {
 cover.textContent = '♫';
 }

 document.getElementById('dp-player-error').style.display = 'none';
 }


 /* PLAY TRACK */

 window.playTrack = async function (id) {
 const track = DP.tracks.find(item => item.id === id);

 if (!track) return;

 try {
 if (currentObjectURL) {
 URL.revokeObjectURL(currentObjectURL);
 currentObjectURL = null;
 }

 let source = '';

 if (track.sourceType === 'file') {
 if (!track.file) {
 throw new Error('Аудиофайл не найден в локальной базе.');
 }

 currentObjectURL = URL.createObjectURL(track.file);
 source = currentObjectURL;

 } else if (track.sourceType === 'url') {
 source = track.src;

 } else {
 throw new Error('Неизвестный формат композиции.');
 }

 audio.pause();
 audio.src = source;
 audio.load();

 window.currentTrack = track;
 currentTrackIndex = DP.tracks.findIndex(item => item.id === id);

 updateTrackInfo(track);

 await audio.play();

 updatePlayerUI();

 if (typeof renderMusic === 'function') {
 renderMusic();
 }

 } catch (error) {
 console.error('Ошибка воспроизведения:', error);

 const errorElement = document.getElementById('dp-player-error');

 errorElement.textContent =
 'Не удалось воспроизвести аудио. Проверьте файл или прямую ссылку.';

 errorElement.style.display = 'block';
 }
 };

 /* PLAY / PAUSE */
 window.togglePlayer = async function () {
 if (!window.currentTrack) {
 if (DP.tracks.length) {
 window.playTrack(DP.tracks[0].id);
 }
 return;
 }

 if (audio.paused) {
 try {
 await audio.play();
 } catch (error) {
 console.error(error);
 }
 } else {
 audio.pause();
 }

 updatePlayerUI();
 };


 /* NEXT TRACK */

 window.playNext = function () {
 if (!DP.tracks.length) return;

 const nextIndex = currentTrackIndex + 1;
 const nextTrack = DP.tracks[nextIndex >= DP.tracks.length ? 0 : nextIndex];

 if (nextTrack) {
 window.playTrack(nextTrack.id);
 }
 };


 /* PREVIOUS TRACK */

 window.playPrevious = function () {
 if (!DP.tracks.length) return;

 if (audio.currentTime > 3) {
 audio.currentTime = 0;
 return;
 }

 const previousIndex = currentTrackIndex - 1;
 const track = DP.tracks[
 previousIndex < 0 ? DP.tracks.length - 1 : previousIndex
 ];

 if (track) {
 window.playTrack(track.id);
 }
 };


 /* SEEK */

 window.seekMusic = function (value) {
 const position = Number(value);

 if (Number.isFinite(position) && Number.isFinite(audio.duration)) {
 audio.currentTime = position;
 }
 };


 /* VOLUME */

 window.setMusicVolume = function (value) {
 const volume = Math.max(0, Math.min(1, Number(value)));

 audio.volume = volume;
 };

 audio.volume = 0.8;


 /* STOP */

 window.stopMusic = function () {
 audio.pause();
 audio.removeAttribute('src');
 audio.load();

 if (currentObjectURL) {
 URL.revokeObjectURL(currentObjectURL);
 currentObjectURL = null;
 }

 window.currentTrack = null;
 currentTrackIndex = -1;

 document.getElementById('dp-player').classList.remove('visible');

 updatePlayerUI();
 };


 /* АУДИОСОБЫТИЯ */

 audio.addEventListener('timeupdate', updatePlayerUI);
 audio.addEventListener('loadedmetadata', updatePlayerUI);
 audio.addEventListener('durationchange', updatePlayerUI);
 audio.addEventListener('play', updatePlayerUI);
 audio.addEventListener('pause', updatePlayerUI);

 audio.addEventListener('ended', () => {
 window.playNext();
 });

 audio.addEventListener('error', () => {
 if (!window.currentTrack) return;

 const errorElement = document.getElementById('dp-player-error');

 errorElement.textContent =
 'Ошибка загрузки аудио. Возможно, ссылка недоступна.';

 errorElement.style.display = 'block';
 });

})();
</script>

<!-- ЗДЕСЬ НАЧИНАЕТСЯ ЧАСТЬ 5 -->
 <!-- ЧАСТЬ 5: ЗАКЛЮЧИТЕЛЬНАЯ НАВИГАЦИЯ -->
<style>
/* ОБОЛОЧКА ПРИЛОЖЕНИЯ, ЗАКЛЮЧИТЕЛЬНАЯ ЧАСТЬ */

.app-shell {
 padding-bottom: 150px;
}

/* НИЖНЯЯ НАВИГАЦИЯ */

.dp-bottom-nav {
 position: fixed;
 z-index: 100;
 left: 50%;
 bottom: 14px;
 transform: translateX(-50%);
 width: min(680px, calc(100% - 28px));
 display: grid;
 grid-template-columns: repeat(5, 1fr);
 gap: 5px;
 padding: 9px;
 border: 1px solid rgba(255,255,255,.1);
 border-radius: 22px;
 background: rgba(17,16,24,.9);
 backdrop-filter: blur(25px);
 -webkit-backdrop-filter: blur(25px);
 box-shadow: 0 12px 40px rgba(0,0,0,.4);
}

.dp-nav-item {
 min-width: 0;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 5px;
 padding: 9px 3px;
 border: 0;
 border-radius: 15px;
 color: #858091;
 background: transparent;
 cursor: pointer;
 transition: .2s ease;
}

.dp-nav-item:hover {
 color: #d9c7ff;
 background: rgba(255,255,255,.045);
}

.dp-nav-item.active {
 color: #d2b8ff;
 background: rgba(167,123,255,.13);
}

.dp-nav-icon {
 font-size: 19px;
 line-height: 1;
}

.dp-nav-label {
 font-size: 9px;
 font-weight: 800;
 letter-spacing: .5px;
}

/* МУЗЫКАЛЬНЫЕ КОЛЛЕКЦИИ */

.collection-row {
 display: flex;
 align-items: center;
 gap: 12px;
 padding: 13px;
 margin-top: 10px;
}

.collection-art {
 width: 48px;
 height: 48px;
 flex-shrink: 0;
 display: grid;
 place-items: center;
 overflow: hidden;
 border-radius: 13px;
 background: linear-gradient(145deg,#392650,#17131f);
 color: #c5a6ff;
 font-size: 22px;
}

.collection-art img {
 width: 100%;
 height: 100%;
 object-fit: cover;
}

.collection-info {
 min-width: 0;
 flex: 1;
}

.collection-info strong,
.collection-info span {
 display: block;
}

.collection-info strong {
 font-size: 13px;
 color: var(--text);
}

.collection-info span {
 margin-top: 4px;
 color: var(--muted);
 font-size: 11px;
}

.secondary-button {
 padding: 9px 13px;
 border: 1px solid var(--border-light);
 border-radius: 12px;
 color: var(--text);
 background: rgba(255,255,255,.05);
 font-size: 11px;
 cursor: pointer;
}

.full-button {
 width: 100%;
 margin-top: 12px;
}

/* TRACK ROW */

.track-row {
 display: flex;
 align-items: center;
 gap: 11px;
 padding: 10px;
 margin-top: 9px;
}

.track-cover {
 width: 45px;
 height: 45px;
 flex-shrink: 0;
 object-fit: cover;
 border-radius: 11px;
}

.track-cover-placeholder {
 display: grid;
 place-items: center;
 color: #c5a6ff;
 background: linear-gradient(145deg,#392650,#17131f);
 font-size: 20px;
}

.track-main {
 flex: 1;
 min-width: 0;
 padding: 4px 0;
 border: 0;
 text-align: left;
 background: transparent;
 cursor: pointer;
}

.track-main strong,
.track-main span {
 display: block;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
}

.track-main strong {
 color: var(--text);
 font-size: 12px;
}

.track-main span {
 margin-top: 4px;
 color: var(--muted);
 font-size: 10px;
}

.track-favorite,
.track-more {
 width: 30px;
 height: 34px;
 border: 0;
 background: transparent;
 color: #aaa2b8;
 font-size: 20px;
 cursor: pointer;
}

.track-favorite.is-favorite {
 color: #d58aa5;
}

.track-more {
 font-size: 22px;
}

/* EMPTY MUSIC */

.music-empty {
 padding: 30px 18px;
 margin-top: 12px;
 text-align: center;
}

.empty-icon {
 margin-bottom: 10px;
 color: #c5a6ff;
 font-size: 34px;
}

.music-empty h3 {
 margin: 0;
 color: var(--text);
 font-size: 16px;
}

.music-empty p {
 margin: 8px 0 16px;
 color: var(--muted);
 font-size: 12px;
}

/* MODALS */

.modal-overlay {
 position: fixed;
 inset: 0;
 z-index: 200;
 display: none;
 align-items: center;
 justify-content: center;
 padding: 18px;
 background: rgba(0,0,0,.65);
 backdrop-filter: blur(8px);
}

.modal-overlay.visible {
 display: flex;
}

.modal-window {
 width: min(440px,100%);
 max-height: 85vh;
 overflow-y: auto;
 padding: 22px;
 border: 1px solid rgba(255,255,255,.12);
 border-radius: 23px;
 background: #17151f;
 box-shadow: 0 25px 80px rgba(0,0,0,.5);
}

.modal-header {
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
 margin-bottom: 22px;
}

.modal-header h2 {
 margin: 5px 0 0;
 color: var(--text);
 font-size: 21px;
}

.eyebrow {
 color: #b99aff;
 font-size: 9px;
 font-weight: 800;
 letter-spacing: 1.5px;
}

.modal-close {
 width: 34px;
 height: 34px;
 border: 1px solid var(--border);
 border-radius: 50%;
 background: rgba(255,255,255,.05);
 color: var(--text);
 font-size: 22px;
 cursor: pointer;
}

.import-tabs {
 display: flex;
 gap: 8px;
 margin-bottom: 18px;
}

.import-tab {
 flex: 1;
 padding: 11px;
 border: 1px solid var(--border);
 border-radius: 12px;
 background: rgba(255,255,255,.04);
 color: var(--muted);
 font-size: 12px;
 cursor: pointer;
}

.import-tab.active {
 border-color: rgba(167,123,255,.4);
 background: rgba(167,123,255,.14);
 color: #d4baff;
}

.upload-zone {
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 8px;
 padding: 30px 15px;
 border: 1px dashed rgba(197,166,255,.4);
 border-radius: 17px;
 background: rgba(167,123,255,.055);
 color: var(--text);
 text-align: center;
 cursor: pointer;
}

.upload-icon {
 color: #c5a6ff;
 font-size: 30px;
}

.upload-zone span {
 color: var(--muted);
 font-size: 11px;
}

.upload-hint {
 margin-top: 5px;
 color: #c5a6ff !important;
}

.field-label {
 display: block;
 margin: 14px 0 7px;
 color: #c5bdd2;
 font-size: 11px;
 font-weight: 700;
}

.form-input {
 width: 100%;
 padding: 12px 13px;
 border: 1px solid rgba(255,255,255,.1);
 border-radius: 12px;
 outline: none;
 background: rgba(255,255,255,.045);
 color: var(--text);
 font: inherit;
 font-size: 12px;
}

.form-input:focus {
 border-color: rgba(167,123,255,.55);
}

.form-input::placeholder {
 color: #706a7d;
}

.form-hint {
 color: var(--muted);
 font-size: 10px;
 line-height: 1.6;
}

.import-status {
 min-height: 18px;
 margin-top: 12px;
 color: #c5a6ff;
 font-size: 11px;
}

/* RESPONSIVE */

@media(max-width:480px) {
 .dp-nav-label {
 font-size: 8px;
 }

 .dp-nav-icon {
 font-size: 17px;
 }
}
</style>


<!-- BOTTOM NAV -->

<nav class="dp-bottom-nav">

 <button class="dp-nav-item active"
 data-screen="home"
 onclick="navigateTo('home')">
 <span class="dp-nav-icon">⌂</span>
 <span class="dp-nav-label">HOME</span>
 </button>

 <button class="dp-nav-item"
 data-screen="music"
 onclick="navigateTo('music')">
 <span class="dp-nav-icon">♫</span>
 <span class="dp-nav-label">MUSIC</span>
 </button>

 <button class="dp-nav-item"
 data-screen="empire"
 onclick="navigateTo('empire')">
 <span class="dp-nav-icon">♜</span>
 <span class="dp-nav-label">EMPIRE</span>
 </button>

 <button class="dp-nav-item"
 data-screen="community"
 onclick="navigateTo('community')">
 <span class="dp-nav-icon">◎</span>
 <span class="dp-nav-label">SOCIAL</span>
 </button>

 <button class="dp-nav-item"
 data-screen="profile"
 onclick="navigateTo('profile')">
 <span class="dp-nav-icon">◉</span>
 <span class="dp-nav-label">PROFILE</span>
 </button>

</nav>


<!-- ОКОНЧАТЕЛЬНАЯ ЛОГИКА ПРИЛОЖЕНИЯ -->

<script>

/* НАВИГАЦИЯ */

function navigateTo(screenName) {

 const screens = {
 home: 'home-screen',
 music: 'music-screen',
 empire: 'empire-screen',
 ai: 'ai-screen',
 community: 'community-screen',
 profile: 'profile-screen',
 system: 'system-screen'
 };

 const targetId = screens[screenName];

 if (!targetId) return;

 const target = document.getElementById(targetId);

 if (!target) {
 console.warn('Экран не найден:', targetId);
 return;
 }

 документ.querySelectorAll('.screen').forEach(screen => {
 screen.classList.remove('active');
 screen.style.display = 'none';
 });

 target.classList.add('active');
 target.style.display = 'block';

 документ.querySelectorAll('.dp-nav-item').forEach(button => {
 button.classList.toggle(
 'active',
 button.dataset.screen === screenName
 );
 });

 window.scrollTo({
 top: 0,
 behavior: 'smooth'
 });
 if (screenName === 'music') {
 if (window.DP) {
 renderMusic();
 }
 }
}


/* ПОДДЕРЖКА НАВИГАЦИИ В ЗАГОЛОВКЕ */

документ.querySelectorAll('[data-navigate]').forEach(element => {
 element.addEventListener('click', () => {
 navigateTo(element.dataset.navigate);
 });
});


/* КНОПКИ МУЗЫКАЛЬНЫХ ТАБЛИЦ */

документ.querySelectorAll('.music-tab').forEach(button => {
 button.addEventListener('click', () => {
 const tab = button.dataset.musicTab;

 if (tab) {
 switchMusicTab(tab);
 }
 });
});


/* НАЧАЛО ПРИЛОЖЕНИЯ */

document.addEventListener('DOMContentLoaded', async () => {

 документ.querySelectorAll('.screen').forEach(screen => {
 screen.style.display = 'none';
 });

 const home = document.getElementById('home-screen');

 if (home) {
 home.style.display = 'block';
 home.classList.add('active');
 }

 await initializeMusic();

 console.log('DARK PROTOCOL initialized.');
});


</script>

</div>
</body>
</html>
<!-- КАРТА ГОРОДА ТЕМНОЙ ИМПЕРИИ -->

<style>
#empire-screen .empire-world {
 width: 100%;
 position: relative;
 overflow: hidden;
 border: 1px solid rgba(197,166,255,.15);
 border-radius: 22px;
 background: #0b0c12;
 box-shadow: 0 15px 55px rgba(0,0,0,.35);
}

.empire-topline {
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 12px;
 margin-bottom: 15px;
}

.empire-kicker {
 color: #aa8ae9;
 font-size: 9px;
 font-weight: 800;
 letter-spacing: 2px;
}

.empire-heading {
 margin: 5px 0 0;
 color: #f4f1fa;
 font-size: 24px;
 font-weight: 800;
}

.empire-coordinates {
 color: #777487;
 font-size: 10px;
 text-align: right;
}

.empire-map-toolbar {
 position: absolute;
 z-index: 5;
 top: 13px;
 right: 13px;
 display: flex;
 flex-direction: column;
 gap: 6px;
}

.empire-map-toolbar button {
 width: 36px;
 height: 36px;
 border: 1px solid rgba(255,255,255,.13);
 border-radius: 11px;
 background: rgba(15,15,23,.88);
 color: #d9c7ff;
 font-size: 19px;
 cursor: pointer;
}

.empire-map-toolbar button:hover {
 background: rgba(167,123,255,.2);
}

.empire-svg {
 display: block;
 width: 100%;
 height: auto;
 min-height: 370px;
 touch-action: none;
 cursor: grab;
 user-select: none;
}

.empire-svg.dragging {
 cursor: grabbing;
}

.empire-map-bg {
 fill: #11141b;
}

.empire-water {
 fill: #111d2b;
 stroke: #26364b;
 stroke-width: 2;
}

.empire-road {
 fill: none;
 stroke: #343743;
 stroke-width: 18;
}

.empire-road-line {
 fill: none;
 stroke: #555565;
 stroke-width: 1.3;
 stroke-dasharray: 9 9;
 opacity: .7;
}

.empire-block {
 stroke: rgba(255,255,255,.09);
 stroke-width: 2;
 cursor: pointer;
 transition: filter .2s, opacity .2s;
}

.empire-block:hover {
 filter: brightness(1.55);
}

.empire-block.owned {
 fill: rgba(137,91,204,.36);
 stroke: #a77bff;
}

.empire-block.enemy {
 fill: rgba(164,61,82,.3);
 stroke: #b6536d;
}

.empire-block.neutral {
 fill: rgba(120,126,143,.2);
 stroke: #747b8e;
}

.empire-block.selected {
 stroke: #e1caff;
 stroke-width: 4;
 filter: brightness(1.7);
}

.empire-building {
 cursor: pointer;
}

.empire-building rect {
 fill: #272a36;
 stroke: #55576b;
 stroke-width: 1.5;
 transition: .2s;
}

.empire-building:hover rect {
 fill: #49405e;
 stroke: #d1b5ff;
 stroke-width: 2.5;
}

.empire-building.owned-building rect {
 fill: #493765;
 stroke: #b18bfa;
}

.empire-building.enemy-building rect {
 fill: #56303b;
 stroke: #c46b7d;
}

.empire-building text {
 fill: #d9d3e6;
 font-size: 9px;
 text-anchor: middle;
 pointer-events: none;
}

.empire-zone-label {
 fill: rgba(255,255,255,.72);
 font-size: 15px;
 font-weight: 800;
 letter-spacing: 2px;
 text-anchor: middle;
 pointer-events: none;
}

.empire-map-caption {
 position: absolute;
 left: 13px;
 bottom: 13px;
 padding: 8px 11px;
 border: 1px solid rgba(255,255,255,.1);
 border-radius: 10px;
 background: rgba(10,10,17,.83);
 color: #b7b1c5;
 font-size: 9px;
 letter-spacing: 1px;
 pointer-events: none;
}

.empire-legend {
 display: flex;
 flex-wrap: wrap;
 gap: 13px;
 padding: 14px 2px;
}

.empire-legend-item {
 display: flex;
 align-items: center;
 gap: 6px;
 color: #9993a7;
 font-size: 10px;
}

.empire-legend-dot {
 width: 8px;
 height: 8px;
 border-radius: 3px;
}

.empire-info-panel {
 margin-top: 13px;
 padding: 17px;
 border: 1px solid rgba(255,255,255,.09);
 border-radius: 19px;
 background: rgba(23,22,31,.76);
}

.empire-info-header {
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
 gap: 10px;
}

.empire-info-type {
 color: #a98bdf;
 font-size: 9px;
 font-weight: 800;
 letter-spacing: 1.5px;
}

.empire-info-title {
 margin: 6px 0;
 color: #f4f1fa;
 font-size: 19px;
 font-weight: 800;
}

.empire-info-description {
 color: #9993a7;
 font-size: 11px;
 line-height: 1.6;
}

.empire-status {
 padding: 6px 9px;
 border: 1px solid rgba(167,123,255,.25);
 border-radius: 9px;
 color: #c5a6ff;
 background: rgba(167,123,255,.1);
 font-size: 9px;
 white-space: nowrap;
}

.empire-info-stats {
 display: grid;
 grid-template-columns: repeat(3,1fr);
 gap: 8px;
 margin-top: 15px;
}

.empire-stat {
 padding: 11px;
 border-radius: 12px;
 background: rgba(255,255,255,.035);
}

.empire-stat span {
 display: block;
 color: #817b90;
 font-size: 9px;
}

.empire-stat strong {
 display: block;
 margin-top: 5px;
 color: #eee8fa;
 font-size: 13px;
}

.empire-action {
 width: 100%;
 margin-top: 14px;
 padding: 12px;
 border: 1px solid rgba(167,123,255,.3);
 border-radius: 12px;
 background: rgba(167,123,255,.13);
 color: #d7c2ff;
 font-size: 11px;
 font-weight: 800;
 cursor: pointer;
}

.empire-action:disabled {
 opacity: .5;
 cursor: not-allowed;
}

.empire-section-label {
 margin: 20px 0 10px;
 color: #b5adbf;
 font-size: 10px;
 font-weight: 800;
 letter-spacing: 1.5px;
}

@media(max-width:480px) {
 .empire-heading {
 font-size: 21px;
 }

 .empire-svg {
 min-height: 340px;
 }
}
</style>


<script>
(function () {

 const screen = document.getElementById('empire-screen');

 if (!screen) {
 console.warn('Empire screen not found.');
 return;
 }

 /* CITY DATA */

 const territories = [
 {
 id: 'center',
 name: 'ЦЕНТРАЛЬНЫЙ РАЙОН',
 owner: 'Твоя фракция',
 status: 'Под контролем',
 type: 'ТВОЯ ТЕРРИТОРИЯ',
 description: 'Центральный район города. Здесь расположена твоя основная инфраструктура.',
 доход: '2 400',
 безопасность: '85%',
 уровень: '03',
 класс: 'собственность'
 },
 {
 id: 'north',
 name: 'NORTH BLOCK',
 owner: 'North Syndicate',
 status: 'Чужая территория',
 type: 'ВРАЖЕСКАЯ ЗОНА',
 description: 'Северный промышленный район. Территория контролируется конкурирующей фракцией.',
 доход: '1 800',
 безопасность: '92%',
 уровень: '05',
 класс: 'враг'
 },
 {
 id: 'east',
 name: 'EAST QUARTER',
 owner: 'Neutral zone',
 status: 'Free territory',
 type: 'NEUTRAL ZONE',
 description: 'Eastern quarter. Area while not owned by any faction.',
 income: '900',
 security: '35%',
 level: '01',
 className: 'neutral'
 },
 {
 id: 'west',
 name: 'WEST SIDE',
 owner: 'West Union',
 status: 'Чужая территория',
 type: 'ВРАЖЕСКАЯ ЗОНА',
 description: 'Западный жилой район. Здесь находится несколько важных объектов.',
 доход: '1 300',
 безопасность: '70%',
 уровень: '04',
 класс: 'враг'
 },
 {
 id: 'south',
 name: 'ЮЖНЫЙ ПОРТ',
 owner: 'Нейтральная зона',
 status: 'Свободная территория',
 type: 'НЕЙТРАЛЬНАЯ ЗОНА',
 description: 'Южный портовый район. Перспективная территория для расширения влияния.',
 доход: '1 100',
 безопасность: '45%',
 уровень: '02',
 className: 'нейтральный'
 }
 ];


 const buildings = [
 {id:'hq', territory:'center', name:'Главный штаб', type:'Штаб фракции', x:530, y:355, w:75, h:48, level:3, owner:'Твоя фракция'},
 {id:'club', territory:'center', name:'Ночной клуб', type:'Развлекательное заведение', x:420, y:425, w:55, h:38, level:2, owner:'Твоя фракция'},
 {id:'bank', territory:'center', name:'Банк', type:'Финансовый объект', x:650, y:430, w:55, h:38, level:2, owner:'Твоя фракция'},
 {id:'market', territory:'center', name:'Торговый центр', type:'Коммерческий объект', x:535, y:485, w:75, h:38, level:1, owner:'Твоя фракция'},
 {id:'factory', territory:'north', name:'Завод', type:'Промышленный объект', x:535, y:115, w:75, h:45, level:5, owner:'North Syndicate'},
 {id:'warehouse', territory:'north', name:'Склад', type:'Логистический объект', x:665, y:180, w:60, h:38, level:3, owner:'North Syndicate'},
 {id:'tower', territory:'north', name:'Башня', type:'Офисное здание', x:420, y:185, w:55, h:45, level:4, owner:'North Syndicate'},
 {id:'hotel', territory:'west', name:'Отель', type:'Гостиница', x:135, y:360, w:65, h:42, level:3, owner:'West Union'},
 {id:'residence', territory:'west', name:'Жилой комплекс', type:'Жилая недвижимость', x:210, y:465, w:65, h:40, level:2, owner:'West Union'},
 {id:'station', territory:'west', name:'Станция', type:'Транспортный объект', x:90, y:505, w:55, h:36, level:2, owner:'West Union'},
 {id:'port', territory:'south', name:'Порт', type:'Транспортный объект', x:565, y:690, w:75, h:45, level:1, owner:'Нейтральная зона'},
 {id:'dock', territory:'south', name:'Док', type:'Логистический объект', x:690, y:735, w:55, h:35, level:1, owner:'Нейтральная зона'},
 {id:'casino', territory:'east', name:'Казино', type:'Развлекательный объект', x:900, y:360, w:65, h:42, level:1, owner:'Нейтральная зона'},
 {id:'mall', territory:'east', name:'Молл', type:'Торговый объект', x:990, y:470, w:65, h:40, level:1, owner:'Нейтральная зона'},
 {id:'hospital', territory:'east', name:'Больница', type:'Медицинский объект', x:850, y:520, w:60, h:40, level:2, owner:'Нейтральная зона'}
 ];


 /* КАРТИНКА С КАРТОЙ */

 screen.innerHTML = 

 <div class="empire-topline">
 <div>
 <div class="empire-kicker">DARK PROTOCOL / STRATEGY MODE</div>
 <h1 class="empire-heading">Темная Империя</h1>
 </div>
 <div class="empire-coordinates">
 КАРТА ГОРОДА<br>СЕКТОР 01
 </div>
 </div>

 <div class="empire-world">

 <div class="empire-map-toolbar">
 <button onclick="empireZoom(1.2)" aria-label="Zoom in">＋</button>
 <button onclick="empireZoom(0.83)" aria-label="Zoom out">−</button>
 <button onclick="empireResetMap()" aria-label="Reset map">⌖</button>
 </div>

 <svg
 id="empire-city-map"
 class="empire-svg"
 viewBox="0 0 1100 850"
 role="img"
 aria-label="Interactive Dark Empire city map">

 <defs>
 <pattern id="empire-grid" width="35" height="35" patternUnits="userSpaceOnUse">
 <path d="M35 0H0V35" fill="none" stroke="#242733" stroke-width="1"/>
 </pattern>
 </defs>

 <rect width="1100" height="850" class="empire-map-bg"/>
 <rect width="1100" height="850" fill="url(#empire-grid)"/>

 <g id="empire-world-group">

 <!-- ВОДА И ОКРАИНА ГОРОДА -->

 <path class="empire-water"
 d="M0 635 L130 625 L260 650 L380 620 L510 660 L650 625 L790 655 L920 615 L1100 650 L1100 850 L0 850Z"/>

 <!-- TERRITORIES -->

 <polygon class="empire-block enemy"
 data-territory="north"
 points="290,35 820,35 820,285 720,315 550,290 360,320 290,265"/>

 <polygon class="empire-block enemy"
 data-territory="west"
 points="35,270 290,265 360,320 390,550 330,640 40,625"/>

 <polygon class="empire-block owned selected"
 data-territory="center"
 points="360,320 550,290 720,315 800,420 760,610 550,660 390,550"/>

 <polygon class="empire-block neutral"
 data-territory="east"
 points="720,315 820,285 1060,270 1060,625 920,615 760,610 800,420"/>

 <polygon class="empire-block neutral"
 data-territory="south"
 points="330,640 390,550 550,660 760,610 920,615 1100,650 1100,810 0,810 0,635"/>

 <!-- ROADS -->

 <path class="empire-road" d="M550 0 L550 850"/>
 <path class="empire-road" d="M0 425 L1100 425"/>
 <path class="empire-road" d="M285 0 L360 850"/>
 <path class="empire-road" d="M820 0 L760 850"/>
 <path class="empire-road" d="M0 285 L1100 285"/>
 <path class="empire-road" d="M0 620 L1100 620"/>

 <path class="empire-road-line" d="M550 0 L550 850"/>
 <path class="empire-road-line" d="M0 425 L1100 425"/>
 <path class="empire-road-line" d="M285 0 L360 850"/>
 <path class="empire-road-line" d="M820 0 L760 850"/>

 <!-- НАЗВАНИЯ РАЙОНОВ -->

 <text x="550" y="75" class="empire-zone-label">СЕВЕР</text>
 <text x="145" y="310" class="empire-zone-label">ЗАПАДНАЯ СТОРОНА</text>
 <text x="550" y="320" class="empire-zone-label">ЦЕНТРАЛЬНАЯ</text>
 <text x="955" y="310" class="empire-zone-label">ВОСТОК</text>
 <text x="550" y="790" class="empire-zone-label">ЮЖНЫЙ ПОРТ</text>

 <!-- ЗДАНИЯ -->

 <g id="empire-buildings"></g>

 </g>
 </svg>

 <div class="empire-map-caption">
 ГОРОДСКАЯ СЕТКА / ИНТЕРАКТИВНЫЕ ТЕРРИТОРИИ
 </div>

 </div>

 <div class="empire-legend">
 <div class="empire-legend-item">
 <span class="empire-legend-dot" style="background:#a77bff"></span>
 Твоя территория
 </div>
 <div class="empire-legend-item">
 <span class="empire-legend-dot" style="background:#b6536d"></span>
 Вражеская
 </div>
 <div class="empire-legend-item">
 <span class="empire-legend-dot" style="background:#747b8e"></span>
 Нейтральная
 </div>
 </div>

 <div class="empire-info-panel" id="empire-info-panel">
 <div class="empire-info-header">
 <div>
 <div class="empire-info-type" id="empire-info-type">ТВОЯ ТЕРРИТОРИЯ</div>
 <h2 class="empire-info-title" id="empire-info-title">ЦЕНТРАЛЬНЫЙ РАЙОН</h2>
 <div class="empire-info-description" id="empire-info-description">
 Центральный район города.
 </div>
 </div>
 <span class="empire-status" id="empire-info-status">Под контролем</span>
 </div>

 <div class="empire-info-stats">
 <div class="empire-stat">
 <span>ВЛАДЕЛЕЦ</span>
 <strong id="empire-info-owner">Твоя фракция</strong>
 </div>
 <div class="empire-stat">
 <span>ДОХОД / ЧАС</span>
 <strong id="empire-info-income">2 400</strong>
 </div>
 <div class="empire-stat">
 <span>УРОВЕНЬ</span>
 <strong id="empire-info-level">03</strong>
 </div>
 </div>

 <button class="empire-action" id="empire-info-action">
 Управление территорией
 </button>
 </div>

 <div class="empire-section-label">ГОРОДСКАЯ СТРУКТУРА / ЗДАНИЯ</div>

 <div class="empire-info-description">
 Выбирайте здания прямо на карте, чтобы изучить их характеристики.
 </div>

 ;


 /* BUILDING RENDER */

 const buildingLayer = document.getElementById('empire-buildings');

 buildings.forEach(building => {

 const territory = territories.find(item => item.id === building.territory);

 const group = document.createElementNS('http://www.w3.org/2000/svg','g');

 group.setAttribute('class',
 'empire-building ' +
 (territory.className === 'owned' ? 'owned-building' :
 territory.className === 'enemy' ? 'enemy-building' : '')
 );

 group.setAttribute('data-building', building.id);

 group.innerHTML = 
 <rect
 x="${building.x}"
 y="${building.y}"
 width="${building.w}"
 height="${building.h}"
 rx="5"
 />
 <text
 x="${building.x + building.w/2}"
 y="${building.y + building.h/2 + 3}"
 >${building.name}</text>
 ;

 buildingLayer.appendChild(group);
 });


 /* TERRITORY DETAILS */

 function selectTerritory(id) {

 const territory = territories.find(item => item.id === id);

 if (!territory) return;

 document.querySelectorAll('.empire-block').forEach(block => {
 block.classList.toggle(
 'selected',
 block.dataset.territory === id
 );
 });

 document.getElementById('empire-info-type').textContent = territory.type;
 document.getElementById('empire-info-title').textContent = territory.name;
 document.getElementById('empire-info-description').textContent = territory.description;
 document.getElementById('empire-info-status').textContent = territory.status;
 document.getElementById('empire-info-owner').textContent = territory.owner;
 document.getElementById('empire-info-income').textContent = territory.income;
 document.getElementById('empire-info-level').textContent = territory.level;

 const action = document.getElementById('empire-info-action');

 action.disabled = territory.className !== 'owned';

 action.textContent = territory.className === 'owned'
 ? 'Управление территорией'
 : territory.className === 'neutral'
 ? 'Территория пока свободна'
 : 'Территория принадлежит другой фракции';

 action.onclick = () => {
 if (territory.className === 'owned') {
 alert('Панель управления территорией будет подключена на следующем этапе.');
 }
 };
 }


 /* ДЕТАЛИ ЗДАНИЯ */

 function selectBuilding(id) {

 const building = buildings.find(item => item.id === id);

 if (!building) return;

 const territory = territories.find(item => item.id === building.territory);

 document.querySelectorAll('.empire-block').forEach(block => {
 block.classList.toggle(
 'selected',
 block.dataset.territory === building.territory
 );
 });

 document.getElementById('empire-info-type').textContent = building.type.toUpperCase();
 document.getElementById('empire-info-title').textContent = building.name;
 document.getElementById('empire-info-description').textContent =
 'Объект находится в районе ' + territory.name + '. Владелец: ' + building.owner + '.';

 document.getElementById('empire-info-status').textContent =
 building.owner === 'Твоя фракция' ? 'Твой объект' : 'Не принадлежит тебе';

 document.getElementById('empire-info-owner').textContent = building.owner;
 document.getElementById('empire-info-income').textContent = '—';
 document.getElementById('empire-info-level').textContent =
 String(building.level).padStart(2,'0');

 const action = document.getElementById('empire-info-action');

 action.disabled = building.owner !== 'Твоя фракция';

 action.textContent = building.owner === 'Твоя фракция'
 ? 'Управление зданием'
 : 'Нет доступа к объекту';

 action.onclick = () => {
 if (building.owner === 'Твоя фракция') {
 alert('Управление зданием ' + building.name + ' будет добавлено на следующем этапе.');
 }
 };
 }


 /* НАЖАТИЕ НА КАРТУ */

 const map = document.getElementById('empire-city-map');

 map.addEventListener('click', event => {

 if (window.empireWasDragging) {
 window.empireWasDragging = false;
 return;
 }

 const building = event.target.closest('[data-building]');

 if (building) {
 selectBuilding(building.dataset.building);
 return;
 }

 const territory = event.target.closest('[data-territory]');

 if (territory) {
 selectTerritory(territory.dataset.territory);
 }
 });


 /* ZOOM AND PAN */

 const world = document.getElementById('empire-world-group');

 let scale = 1;
 let translateX = 0;
 let translateY = 0;

 function applyMapTransform() {
 world.setAttribute(
 'transform',
 translate(${translateX} ${translateY}) translate(550 425) scale(${scale}) translate(-550 -425)
 );
 }

 window.empireZoom = function (factor) {
 scale = Math.max(.8, Math.min(2.5, scale * factor));
 applyMapTransform();
 };

 window.empireResetMap = function () {
 scale = 1;
 translateX = 0;
 translateY = 0;
 applyMapTransform();
 };


 let dragging = false;
 let startX = 0;
 let startY = 0;
 let initialX = 0;
 let initialY = 0;

 map.addEventListener('pointerdown', event => {
 if (event.target.closest('[data-building]') ||
 event.target.closest('[data-territory]')) return;

 dragging = true;
 window.empireWasDragging = false;

 startX = event.clientX;
 startY = event.clientY;

 initialX = translateX;
 initialY = translateY;

 map.classList.add('dragging');
 map.setPointerCapture(event.pointerId);
 });

 map.addEventListener('pointermove', event => {
 if (!dragging) return;

 const d
 <style>
/* DARK PROTOCOL — PROJECT AI */
#ai-screen, #project-ai-screen {
 color: #f4f1fa;
 font-family: 'Manrope', sans-serif;
}
.ai-app {
 min-height: 690px;
 height: calc(100vh - 150px);
 max-height: 900px;
 display: grid;
 grid-template-columns: 245px minmax(0,1fr);
 overflow: hidden;
 border: 1px solid rgba(190,165,255,.13);
 border-radius: 22px;
 background: rgba(12,10,18,.88);
 box-shadow: 0 20px 80px #0005;
}
.ai-sidebar {
 background: rgba(255,255,255,.025);
 border-right: 1px solid rgba(255,255,255,.08);
 padding: 20px 14px;
 display: flex;
 flex-direction: column;
 min-width: 0;
}
.ai-brand {
 display:flex;
 align-items:center;
 gap:10px;
 padding: 5px 8px 22px;
}
.ai-brand-icon {
 width:36px;height:36px;border-radius:12px;
 display:grid;place-items:center;
 background:linear-gradient(135deg,#a88aff,#6040a5);
 box-shadow:0 0 25px #9164ff44;
 font-size:18px;
}
.ai-brand strong {font-size:14px;letter-spacing:1.3px}
.ai-brand small {
 display:block;color:#8f879d;font-size:10px;margin-top:3px;
}
.ai-new-chat,.ai-side-button {
 width:100%;border:1px solid rgba(190,165,255,.18);
 background:rgba(155,115,255,.09);color:#e9e0ff;
 border-radius:11px;padding:12px;text-align:left;
 cursor:pointer;font:inherit;font-size:12px;
 transition:.2s;
}
.ai-new-chat:hover,.ai-side-button:hover {
 background:rgba(155,115,255,.18);
 border-color:#a78aff66;
}
.ai-history-label {
 margin:25px 8px 10px;color:#777181;
 font-size:10px;letter-spacing:1.5px;text-transform:uppercase;
}
.ai-history {
 display:flex;flex-direction:column;gap:5px;
 overflow:auto;flex:1;
}
.ai-history-item {
 padding:10px;border-radius:9px;color:#aaa3b6;
 font-size:11px;cursor:pointer;white-space:nowrap;
 overflow:hidden;text-overflow:ellipsis;
}
.ai-history-item:hover,.ai-history-item.active {
 background:rgba(255,255,255,.07);color:#fff;
}
.ai-sidebar-bottom {
 border-top:1px solid rgba(255,255,255,.07);
 padding-top:14px;
}
.ai-user-mini {
 display:flex;align-items:center;gap:10px;
 padding:10px 5px;color:#bcb4c9;font-size:11px;
}
.ai-avatar {
 width:30px;height:30px;border-radius:50%;
 display:grid;place-items:center;
 background:#30253e;color:#d7c5ff;font-size:12px;
}
.ai-main {
 min-width:0;display:flex;flex-direction:column;
 position:relative;
}
.ai-topbar {
 height:60px;flex-shrink:0;
 border-bottom:1px solid rgba(255,255,255,.07);
 display:flex;align-items:center;justify-content:space-between;
 padding:0 22px;gap:10px;
}
.ai-topbar-title {font-size:12px;color:#c9c1d4}
.ai-status {font-size:10px;color:#9b83c9}
.ai-status:before {
 content:"";display:inline-block;width:6px;height:6px;
 background:#a98aff;border-radius:50%;margin-right:7px;
 box-shadow:0 0 10px #a98aff;
}
.ai-model-select {
 background:#1c1725;color:#dcd2ef;
 border:1px solid #ffffff18;border-radius:9px;
 padding:8px 10px;font:inherit;font-size:10px;
 outline:none;
}
.ai-chat {
 flex:1;overflow-y:auto;padding:30px 7%;
 display:flex;flex-direction:column;gap:22px;
}
.ai-welcome {
 margin:auto;max-width:540px;width:100%;
 text-align:center;padding:35px 0;
}
.ai-orb {
 width:76px;height:76px;border-radius:25px;
 margin:0 auto 24px;display:grid;place-items:center;
 font-size:30px;color:white;
 background:radial-gradient(circle at 30% 25%,#c8b4ff,#7651c4 50%,#29203b);
 box-shadow:0 0 60px #9267ef33;
}
.ai-welcome h2 {
 font-size:26px;letter-spacing:-1px;margin:0 0 10px;
}
.ai-welcome p {
 color:#938a9e;font-size:12px;line-height:1.8;
 margin:0 auto 28px;max-width:380px;
}
.ai-prompts {
 display:grid;grid-template-columns:1fr 1fr;
 gap:10px;text-align:left;
}
.ai-prompt {
 padding:14px;border-radius:13px;
 border:1px solid #ffffff12;background:#ffffff06;
 color:#d7cfe0;cursor:pointer;font:inherit;
 text-align:left;transition:.2s;font-size:11px;
}
.ai-prompt:hover {
 border-color:#a98aff55;background:#a98aff10;
}
.ai-prompt span {
 display:block;color:#8e7ab6;font-size:17px;margin-bottom:8px;
}
.ai-message {
 display:flex;gap:12px;max-width:850px;
 width:100%;align-self:flex-start;
}
.ai-message.user {align-self:flex-end;flex-direction:row-reverse}
.ai-message-avatar {
 width:29px;height:29px;flex-shrink:0;
 border-radius:10px;display:grid;place-items:center;
 background:#332748;color:#cdbaff;font-size:11px;
}
.ai-message.user .ai-message-avatar {
 background:#292331;color:#d6c9e9;
}
.ai-message-content {min-width:0;max-width:85%}
.ai-message-name {
 color:#8f879c;font-size:10px;margin:2px 0 7px;
}
.ai-message.user .ai-message-name {text-align:right}
.ai-message-bubble {
 background:rgba(255,255,255,.055);
 border:1px solid rgba(255,255,255,.07);
 padding:13px 16px;border-radius:4px 14px 14px 14px;
 font-size:12px;line-height:1.75;color:#e2dce9;
 white-space:pre-wrap;overflow-wrap:anywhere;
}
.ai-message.user .ai-message-bubble {
 background:rgba(133,95,204,.17);
 border-color:#a98aff25;border-radius:14px 4px 14px 14px;
}
.ai-typing {color:#a78bd8;font-size:11px;padding:8px 0}
.ai-composer-wrap {
 padding:12px 6% 18px;
 border-top:1px solid rgba(255,255,255,.06);
}
.ai-mode-row {
 display:flex;gap:7px;flex-wrap:wrap;margin-bottom:10px;
}
.ai-mode {
 background:transparent;border:1px solid #ffffff18;
 color:#91899d;padding:6px 10px;border-radius:20px;
 font:inherit;font-size:10px;cursor:pointer;
}
.ai-mode.active {
 color:#d8c7ff;background:#9670d51c;
 border-color:#a98aff55;
}
.ai-input-box {
 border:1px solid rgba(190,165,255,.2);
 background:rgba(255,255,255,.045);
 border-radius:16px;padding:12px;
 box-shadow:0 8px 30px #0003;
}
.ai-input-box textarea {
 width:100%;resize:none;min-height:48px;max-height:140px;
 border:0;outline:0;background:transparent;color:#fff;
 font:inherit;font-size:12px;line-height:1.6;
}
.ai-input-box textarea::placeholder {color:#777080}
.ai-input-actions {
 display:flex;align-items:center;justify-content:space-between;
 gap:10px;
}
.ai-input-hint {font-size:9px;color:#777080}
.ai-send {
 width:35px;height:35px;border:0;border-radius:11px;
 background:linear-gradient(135deg,#ad8bff,#7550ba);
 color:white;font-size:17px;cursor:pointer;
}
.ai-send:hover {filter:brightness(1.15)}
.ai-disclaimer {
 text-align:center;font-size:9px;color:#665f70;
 padding-top:9px;
}
.ai-mobile-menu {display:none}
@media(max-width:700px) {
 .ai-app {grid-template-columns:1fr;height:calc(100vh - 145px);min-height:570px}
 .ai-sidebar {display:none}
 .ai-topbar {padding:0 13px}
 .ai-chat {padding:22px 15px}
 .ai-composer-wrap {padding:10px 12px 14px}
 .ai-welcome h2 {font-size:22px}
 .ai-prompts {grid-template-columns:1fr}
 .ai-mobile-menu {display:block}
}
</style>

<script>
(function () {
 const screen =
 document.getElementById('ai-screen') ||
 document.getElementById('project-ai-screen') ||
 document.getElementById('projectai-screen');

 if (!screen) {
 console.warn('Project AI: экран не найден. Проверь ID ai-screen.');
 return;
 }

 const STORAGE_KEY = 'darkProtocolAIChats';
 let chats = [];
 let currentId = null;
 let currentMode = 'Обычный';
 let selectedModel = 'Project AI';

 try {
 chats = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
 } catch(e) { chats = []; }

 function save() {
 localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
 }

 function currentChat() {
 return chats.find(c => c.id === currentId);
 }

 function escapeHTML(value) {
 return String(value).replace(/[&<>"']/g, c => ({
 '&':'&amp;','<':'<','>':'>',
 '"':'"',"'":'&#039;'
 }[c]));
 }

 screen.innerHTML = `
 <div class="ai-app">
 <aside class="ai-sidebar">
 <div class="ai-brand">
 <div class="ai-brand-icon">✦</div>
 <div><strong>ПРОЕКТ AI</strong><small>ТЕМНЫЙ ПРОТОКОЛЬНЫЙ ИНТЕЛЛЕКТ</small></div>
 </div>
 <button class="ai-new-chat" id="ai-new">＋ &nbsp; Новая беседа</button>
 <div class="ai-history-label">История диалогов</div>
 <div class="ai-history" id="ai-history"></div>
 <div class="ai-sidebar-bottom">
 <button class="ai-side-button" id="ai-clear">⌫ &nbsp; Очистить историю</button>
 <div class="ai-user-mini">
 <div class="ai-avatar">DP</div>
 <div>Пользователь Dark Protocol<small style="display:block;color:#777080;margin-top:3px">Личный профиль</small></div>
 </div>
 </div>
 </aside>

 <main class="ai-main">
 <div class="ai-topbar">
 <div class="ai-topbar-title">✦ &nbsp; Project AI <span class="ai-status">Интерфейс активен</span></div>
 <select class="ai-model-select" id="ai-model">
 <option>Project AI</option>
 <option>Project AI Pro</option>
 <option>Project AI Experimental</option>
 </select>
 </div>

 <div class="ai-chat" id="ai-chat">
 <div class="ai-welcome" id="ai-welcome">
 <div class="ai-orb">✦</div>
 <h2>Добро пожаловать в Project AI</h2>
 <p>Твое интеллектуальное пространство внутри DARK PROTOCOL. Задавай вопросы, исследуй идеи и создавай новое.</p>
 <div class="ai-prompts">
 <button class="ai-prompt" data-prompt="Помоги мне разработать новую идею проекта."><span>✧</span>Разработать идею</button>
 <button class="ai-prompt" data-prompt="Объясни мне сложную тему простыми словами."><span>⌘</span>Изучить тему</button>
 <button class="ai-prompt" data-prompt="Помоги составить подробный план действий."><span>◈</span>Составить план</button>
 <button class="ai-prompt" data-prompt="Предложи несколько нестандартных творческих решений."><span>✳</span>Найти вдохновение</button>
 </div>
 </div>
 </div>

 <div class="ai-composer-wrap">
 <div class="ai-mode-row">
 <button class="ai-mode active" data-mode="Обычный">Обычный</button>
 <button class="ai-mode" data-mode="Анализ">Анализ</button>
 <button class="ai-mode" data-mode="Творчество">Творчество</button>
 <button class="ai-mode" data-mode="Обучение">Обучение</button>
 </div>
 <div class="ai-input-box">
 <textarea id="ai-input" placeholder="Напиши сообщение Project AI..." rows="2"></textarea>
 <div class="ai-input-actions">
 <span class="ai-input-hint">ENTER — отправить · SHIFT + ENTER — новая строка</span>
 <button class="ai-send" id="ai-send" title="Отправить">↑</button>
 </div>
 </div>
 <div class="ai-disclaimer">Project AI · DARK PROTOCOL · Локальный демонстрационный режим</div>
 </div>
 </main>
 </div>
 ;

 const chatBox = screen.querySelector('#ai-chat');
 const input = screen.querySelector('#ai-input');
 const historyBox = screen.querySelector('#ai-history');

 function newChat() {
 currentId = null;
 renderChat();
 input.focus();
 }

 function renderHistory() {
 historyBox.innerHTML = '';
 chats.slice().reverse().forEach(chat => {
 const item = document.createElement('div');
 item.className = 'ai-history-item' + (chat.id === currentId ? ' active' : '');
 item.textContent = chat.title || 'Новая беседа';
 item.title = item.textContent;
 item.onclick = () => {
 currentId = chat.id;
 renderChat();
 };
 historyBox.appendChild(item);
 });
 }

 function renderChat() {
 chatBox.innerHTML = '';
 const chat = currentChat();

 if (!chat || !chat.messages.length) {
 chatBox.innerHTML = 
 <div class="ai-welcome">
 <div class="ai-orb">✦</div>
 <h2>С чего начнем?</h2>
 <p>Выбери направление или напиши свой запрос.</p>
 <div class="ai-prompts">
 <button class="ai-prompt" data-prompt="Помоги мне разработать новую идею проекта."><span>✧</span>Разработать идею</button>
 <button class="ai-prompt" data-prompt="Объясни мне сложную тему простыми словами."><span>⌘</span>Изучить тему</button>
 <button class="ai-prompt" data-prompt="Помоги составить подробный план действий."><span>◈</span>Составить план</button>
 <button class="ai-prompt" data-prompt="Предложи несколько нестандартных творческих решений."><span>✳</span>Найти вдохновение</button>
 </div>
 </div>;
 bindPrompts();
 renderHistory();
 return;
 }

 chat.messages.forEach(message => addMessage(message.role, message.text, false));
 renderHistory();
 chatBox.scrollTop = chatBox.scrollHeight;
 }

 function addMessage(role, text, persist = true) {
 const row = document.createElement('div');
 row.className = 'ai-message ' + (role === 'user' ? 'user' : 'assistant');
 const name = role === 'user' ? 'Вы' : 'PROJECT AI';
 const avatar = role === 'user' ? 'U' : '✦';

 row.innerHTML = 
 <div class="ai-message-avatar">${avatar}</div>
 <div class="ai-message-content">
 <div class="ai-message-name">${name}</div>
 <div class="ai-message-bubble">${escapeHTML(text)}</div>
 </div>`;
 chatBox.appendChild(row);

 if (persist) {
 const chat = currentChat();
 if (chat) {
 chat.messages.push({role, text});
 save();
 }
 }
 chatBox.scrollTop = chatBox.scrollHeight;
 }

 function bindPrompts() {
 chatBox.querySelectorAll('[data-prompt]').forEach(button => {
 button.onclick = () => {
 input.value = button.dataset.prompt;
 sendMessage();
 };
 });
 }

 function demoResponse(text) {
 const modeText = currentMode === 'Анализ'
 ? 'Выбран режим анализа. Для полноценного анализа мне потребуется подключение языковой модели.'
 : currentMode === 'Творчество'
 ? 'Выбран творческий режим. После подключения модели здесь можно будет генерировать концепции, тексты и идеи».
 : currentMode === 'Обучение'
 ? 'Выбран режим обучения. После подключения модели я смогу объяснять темы, задавать вопросы и помогать закреплять материал.'
 : 'Запрос получен. После подключения модели я смогу полноценно отвечать на вопросы и выполнять задания.';

 return modeText + '\n\nТвой запрос: «' + text + '»\n\nСейчас Project AI работает в демонстрационном режиме. Интерфейс, история и отправка сообщений уже работают, но реальные ответы появятся после подключения API.';
 }

 function sendMessage() {
 const text = input.value.trim();
 if (!text) return;

 if (!currentChat()) {
 currentId = 'chat-' + Date.now();
 chats.push({
 id: currentId,
 title: text.slice(0, 32),
 messages: []
 });
 }

 addMessage('user', text);
 input.value = '';
 renderHistory();

 const typing = document.createElement('div');
 typing.className = 'ai-typing';
 typing.textContent = 'Project AI обрабатывает запрос...';
 chatBox.appendChild(typing);
 chatBox.scrollTop = chatBox.scrollHeight;

 setTimeout(() => {
 typing.remove();
 addMessage('assistant', demoResponse(text));
 save();
 renderHistory();
 }, 550);
 }

 экран.querySelector('#ai-new').onclick = newChat;
 screen.querySelector('#ai-send').onclick = sendMessage;

 экран.querySelector('#ai-clear').onclick = () => {
 if (!confirm('Удалить всю историю диалогов?')) return;
 chats = [];
 currentId = null;
 save();
 renderChat();
 };

 input.addEventListener('keydown', event => {
 if (event.key === 'Enter' && !event.shiftKey) {
 event.preventDefault();
 sendMessage();
 }
 });

 экран.querySelectorAll('.ai-mode').forEach(button => {
 button.onclick = () => {
 currentMode = button.dataset.mode;
 экран.querySelectorAll('.ai-mode').forEach(b => b.classList.remove('active'));
 button.classList.add('active');
 };
 });

 экран.querySelector('#ai-model').onchange = event => {
 selectedModel = event.target.value;
 };

 bindPrompts();
 renderChat();
 renderHistory();
})();
</script>
<style>
/* DARK PROTOCOL — COMMUNITY */
#community-screen { color:#f2edf8; font-family:'Manrope',sans-serif; }

.dp-community {
 display:flex; flex-direction:column; gap:20px;
}
.dp-community-head {
 display:flex; justify-content:space-between; align-items:center;
 gap:15px; flex-wrap:wrap;
}
.dp-community-title { font-size:25px; font-weight:750; letter-spacing:-1px; }
.dp-community-sub { color:#898194; font-size:11px; margin-top:6px; }
.dp-community-count {
 border:1px solid #a98aff35; background:#9c77ed12;
 color:#c9b4ff; padding:9px 13px; border-radius:12px;
 font-size:10px;
}
.dp-community-tabs {
 display:flex; gap:7px; flex-wrap:wrap;
 border-bottom:1px solid #ffffff12; padding-bottom:12px;
}
.dp-community-tab {
 border:1px solid transparent; background:transparent;
 color:#91899e; padding:10px 15px; border-radius:10px;
 cursor:pointer; font:inherit; font-size:11px;
}
.dp-community-tab.active {
 background:#9d79e91b; border-color:#a98aff35;color:#dfd1ff;
}
.dp-community-panel { display:none; }
.dp-community-panel.active { display:block; }
.dp-community-grid {
 display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:13px;
}
.dp-user-card {
 background:linear-gradient(145deg,#ffffff0b,#ffffff03);
 border:1px solid #ffffff12; border-radius:17px;
 padding:17px; min-width:0; transition:.2s;
}
.dp-user-card:hover { border-color:#a98aff45; transform:translateY(-2px); }
.dp-user-top { display:flex; gap:12px; align-items:center; }
.dp-user-avatar {
 width:47px;height:47px;border-radius:15px;
 display:grid;place-items:center; flex-shrink:0;
 background:linear-gradient(135deg,#7353a9,#30223f);
 color:#eee2ff;font-size:17px;font-weight:700;
 border:1px solid #c4a6ff35;
}
.dp-user-name { font-size:13px;font-weight:700; overflow-wrap:anywhere; }
.dp-user-handle { color:#837b91;font-size:10px;margin-top:4px; }
.dp-user-status { color:#a88bea;font-size:9px;margin-top:5px; }
.dp-user-stats {
 display:grid;grid-template-columns:repeat(3,1fr);
 gap:5px;margin:16px 0;
}
.dp-user-stat {
 background:#ffffff07;border-radius:9px;padding:9px 5px;text-align:center;
}
.dp-user-stat strong { display:block;font-size:13px; }
.dp-user-stat span { color:#81798d;font-size:9px; }
.dp-community-button {
 width:100%;padding:10px;border-radius:10px;
 border:1px solid #a98aff40;background:#9b78e91a;
 color:#d9caff;cursor:pointer;font:inherit;font-size:10px;
}
.dp-community-button:hover { background:#9b78e933; }
.dp-community-button.secondary {
 background:#ffffff08;border-color:#ffffff15;color:#aaa1b5;
}
.dp-community-button.danger {
 background:#a83e4c15;border-color:#a83e4c40;color:#e99aa3;
}
.dp-community-toolbar {
 display:flex;gap:10px;align-items:center;
 justify-content:space-between;flex-wrap:wrap;margin-bottom:15px;
}
.dp-community-search {
 flex:1;min-width:180px;max-width:350px;
 border:1px solid #ffffff18;background:#ffffff07;
 color:#fff;border-radius:11px;padding:11px 13px;
 outline:none;font:inherit;font-size:11px;
}
.dp-community-search:focus { border-color:#a98aff77; }
.dp-community-select {
 border:1px solid #ffffff18;background:#191522;color:#d9cfe8;
 border-radius:10px;padding:10px;font:inherit;font-size:10px;
}
.dp-ranking-list {
 display:flex;flex-direction:column;gap:8px;
}
.dp-ranking-row {
 display:grid;grid-template-columns:38px minmax(0,1fr) 75px 75px;
 align-items:center;gap:12px;
 padding:13px 15px;border:1px solid #ffffff10;
 border-radius:13px;background:#ffffff05;
}
.dp-ranking-row.me { border-color:#a98aff55;background:#a98aff0c; }
.dp-rank-number {
 font-size:14px;color:#a78ad8;font-weight:800;text-align:center;
}
.dp-ranking-user { display:flex;align-items:center;gap:10px;min-width:0; }
.dp-ranking-user .dp-user-avatar { width:36px;height:36px;border-radius:11px;font-size:13px; }
.dp-ranking-user-name { font-size:11px;font-weight:700; }
.dp-ranking-user-handle { font-size:9px;color:#837b91;margin-top:3px; }
.dp-ranking-value { text-align:right;font-size:11px;font-weight:700; }
.dp-ranking-value small { display:block;color:#81798d;font-size:9px;font-weight:400;margin-top:3px; }
.dp-section-heading { font-size:14px;font-weight:700;margin:0 0 14px; }
.dp-empty {
 padding:35px 15px;text-align:center;color:#847c90;
 border:1px dashed #ffffff1c;border-radius:14px;font-size:11px;
}
.dp-profile-layout {
 display:grid;grid-template-columns:minmax(0,1.4fr) minmax(220px,.8fr);
 gap:15px;
}
.dp-profile-card {
 border:1px solid #ffffff13;border-radius:18px;
 background:linear-gradient(145deg,#241b31,#111019);
 padding:22px;
}
.dp-profile-cover {
 height:85px;border-radius:12px;
 background:linear-gradient(115deg,#38234d,#6c4b91,#211a30);
 margin-bottom:-29px;
}
.dp-profile-main { display:flex;align-items:end;gap:14px;position:relative;padding:0 8px; }
.dp-profile-main .dp-user-avatar {
 width:65px;height:65px;border-radius:20px;
 border:3px solid #17121f;font-size:23px;
}
.dp-profile-details { padding:14px 5px 5px; }
.dp-profile-details h3 { margin:0;font-size:18px; }
.dp-profile-details p { color:#92899f;font-size:10px;margin:6px 0; }
.dp-profile-description {
 color:#c1b8cc;font-size:11px;line-height:1.7;margin:17px 5px;
}
.dp-profile-metrics {
 display:grid;grid-template-columns:repeat(3,1fr);gap:8px;
}
.dp-profile-metric {
 background:#ffffff08;border:1px solid #ffffff0b;
 border-radius:12px;padding:13px 8px;text-align:center;
}
.dp-profile-metric strong { display:block;font-size:17px; }
.dp-profile-metric span { color:#8c8399;font-size:9px; }
.dp-achievements { display:flex;flex-wrap:wrap;gap:8px;margin-top:15px; }
.dp-achievement {
 padding:9px 11px;border-radius:10px;
 border:1px solid #a98aff28;background:#a98aff0d;
 color:#cbb9ef;font-size:10px;
}
.dp-profile-edit {
 display:flex;flex-direction:column;gap:10px;
}
.dp-profile-edit input,.dp-profile-edit textarea {
 width:100%;box-sizing:border-box;
 background:#ffffff08;border:1px solid #ffffff16;
 border-radius:10px;padding:11px;color:#fff;
 font:inherit;font-size:11px;outline:none;
}
.dp-profile-edit textarea { min-height:85px;resize:vertical; }
.dp-modal-backdrop {
 position:fixed;inset:0;background:#000b;z-index:9999;
 display:none;align-items:center;justify-content:center;padding:18px;
}
.dp-modal-backdrop.open { display:flex; }
.dp-modal {
 width:100%;max-width:410px;background:#171320;
 border:1px solid #a98aff35;border-radius:18px;padding:20px;
 box-shadow:0 20px 80px #0009;
}
.dp-modal h3 { font-size:16px;margin:0 0 14px; }
.dp-modal p { color:#aaa1b5;font-size:11px;line-height:1.7; }
.dp-modal-actions { display:flex;gap:8px;margin-top:16px; }
.dp-modal-actions button { flex:1; }
@media(max-width:800px) {
 .dp-community-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
}
@media(max-width:560px) {
 .dp-community-grid { grid-template-columns:1fr; }
 .dp-profile-layout { grid-template-columns:1fr; }
 .dp-ranking-row { grid-template-columns:25px minmax(0,1fr) 55px;gap:7px;padding:11px 8px; }
 .dp-ranking-row .dp-ranking-value:last-child { display:none; }
 .dp-community-title { font-size:21px; }
}
</style>

<script>
(function () {
 const screen = document.getElementById('community-screen');
 if (!screen) {
 console.warn('Сообщество: экран community-screen не найден.');
 return;
 }

 const KEY = 'darkProtocolCommunityV1';

 const initialUsers = [
 {id: 'u1',имя: 'NOVA', хэндл: '@nova', уровень: 42, опыт: 8450, активность: 96, статус: 'В сети', биография: 'Строю свою собственную империю.',друзей:128, достижений: ['Первые шаги','Ветеран','Лидер']}, 
 {id: 'u2',имя: 'VOID', дескриптор: '@void', уровень: 38, опыт: 7200, активность: 91, статус: 'Не беспокоить', биография: 'Молчание - сила.',друзей: 94, достижений: ['Стратег','Исследователь']}, 
 {id: 'u3',имя: 'RAVEN', хэндл: '@raven',уровень: 35, опыт: 6900, активность: 88, статус: 'В сети', биография: 'Всегда на шаг впереди.',друзей: 76,достижений: ['Ветеран','Создатель']}, 
 {id: 'u4',имя: 'GHOST', хэндл: '@ghost',уровень: 29, опыт: 5300, активность: 74, статус: 'Не в сети', биография: 'Неизвестная территория.',друзей: 51,достижений: ['Исследователь']}, 
 {id: 'u5', имя: 'ЛУНА', хэндл: '@luna', уровень: 26, опыт: 4600, активность: 69, статус: 'В сети', биография: 'Мечта. Создавать. Повторить.',friends:82,achievements:['Первые шаги','Создатель']},
 {id:'u6',name:'ZERO',handle:'@zero',level:21,xp:3100,activity:57,status:'Не в сети',bio:'Начинаю с нуля.',friends:32,achievements:['Первые шаги']}
 ];

 let data;
 try {
 data = JSON.parse(localStorage.getItem(KEY));
 } catch(e) { data = null; }

 if (!data || !data.users) {
 data = {
 users: initialUsers,
 me: {
 id:'me',name:'DARK USER',handle:'@darkuser',
 level:12,xp:1250,activity:48,status:'В сети',
 bio:'Добро пожаловать в мой профиль DARK PROTOCOL.',
 friends:0,achievements:['Первые шаги']
 },
 friends:['u1','u3'],
 requests:['u5'],
 sent:[],
 category:'level'
 };
 }

 function save() {
 localStorage.setItem(KEY,JSON.stringify(data));
 }

 function escapeHTML(value) {
 return String(value).replace(/[&<>"']/g,c=>({
 '&':'&amp;','<':'<','>':'>',
 '"':'"',"'":'&#039;'
 }[c]));
 }

 function getUser(id) {
 return id === 'me' ? data.me : data.users.find(u=>u.id===id);
 }

 function avatar(user) {
 return escapeHTML((user.name || '?').slice(0,1).toUpperCase());
 }

 function userCard(user, buttonText, buttonAction, secondary=false) {
 return 
 <article class="dp-user-card">
 <div class="dp-user-top">
 <div class="dp-user-avatar">${avatar(user)}</div>
 <div style="min-width:0">
 <div class="dp-user-name">${escapeHTML(user.name)}</div>
 <div class="dp-user-handle">${escapeHTML(user.handle)}</div>
 <div class="dp-user-status">● ${escapeHTML(user.status)}</div>
 </div>
 </div>
 <div class="dp-user-stats">
 <div class="dp-user-stat"><strong>${user.level}</strong><span>Уровень</span></div>
 <div class="dp-user-stat"><strong>${user.xp.toLocaleString('ru-RU')}</strong><span>XP</span></div>
 <div class="dp-user-stat"><strong>${user.activity}%</strong><span>Активность</span></div>
 </div>
 <button class="dp-community-button ${secondary?'secondary':''}" data-action="${buttonAction}" data-id="${user.id}">${buttonText}</button>
 </article>;
 }

 screen.innerHTML = 
 <div class="dp-community">
 <header class="dp-community-head">
 <div>
 <div class="dp-community-title">СООБЩЕСТВО</div>
 <div class="dp-community-sub">Связи. Репутация. Влияние. Добро пожаловать в сообщество DARK PROTOCOL.</div>
 </div>
 <div class="dp-community-count" id="dp-friend-count">✦ 0 друзей</div>
 </header>

 <nav class="dp-community-tabs">
 <button class="dp-community-tab active" data-tab="discover">Обзор</button>
 <button class="dp-community-tab" data-tab="friends">Друзья</button>
 <button class="dp-community-tab" data-tab="ranking">Рейтинг</button>
 <button class="dp-community-tab" data-tab="profile">Мой профиль</button>
 </nav>

 <section class="dp-community-panel active" id="dp-panel-discover">
 <div class="dp-community-toolbar">
 <div>
 <h3 class="dp-section-heading" style="margin-bottom:4px">Участники сообщества</h3>
 <div class="dp-community-sub">Найди новых людей в DARK PROTOCOL</div>
 </div>
 <input class="dp-community-search" id="dp-discover-search" placeholder="⌕ Поиск по нику...">
 </div>
 <div class="dp-community-grid" id="dp-discover-grid"></div>
 </section>

 <section class="dp-community-panel" id="dp-panel-friends">
 <h3 class="dp-section-heading">Мои друзья</h3>
 <div class="dp-community-grid" id="dp-friends-grid"></div>
 <h3 class="dp-section-heading" style="margin-top:27px">Входящие заявки</h3>
 <div class="dp-community-grid" id="dp-requests-grid"></div>
 <h3 class="dp-section-heading" style="margin-top:27px">Отправленные заявки</h3>
 <div class="dp-community-grid" id="dp-sent-grid"></div>
 </section>

 <section class="dp-community-panel" id="dp-panel-ranking">
 <div class="dp-community-toolbar">
 <div>
 <h3 class="dp-section-heading" style="margin-bottom:4px">Таблица лидеров</h3>
 <div class="dp-community-sub">Кто занимает вершину сообщества?</div>
 </div>
 <select class="dp-community-select" id="dp-ranking-sort">
 <option value="level">По уровню</option>
 <option value="xp">По опыту</option>
 <option value="activity">По активности</option>
 </select>
 </div>
 <div class="dp-ranking-list" id="dp-ranking-list"></div>
 </section>

 <section class="dp-community-panel" id="dp-panel-profile">
 <div class="dp-profile-layout">
 <div>
 <div class="dp-profile-card" id="dp-own-profile"></div>
 <h3 class="dp-section-heading" style="margin-top:20px">Достижения</h3>
 <div class="dp-achievements" id="dp-own-achievements"></div>
 </div>
 <div class="dp-profile-card">
 <h3 class="dp-section-heading">Редактировать профиль</h3>
 <div class="dp-profile-edit">
 <label class="dp-community-sub">Имя пользователя</label>
 <input id="dp-edit-name" maxlength="24">
 <label class="dp-community-sub">Никнейм</label>
 <input id="dp-edit-handle" maxlength="24">
 <label class="dp-community-sub">О себе</label>
 <textarea id="dp-edit-bio" maxlength="180"></textarea>
 <button class="dp-community-button" id="dp-save-profile">Сохранить изменения</button>
 </div>
 </div>
 </div>
 </section>
 </div>

 <div class="dp-modal-backdrop" id="dp-user-modal">
 <div class="dp-modal">
 <h3 id="dp-modal-title">Профиль участника</h3>
 <div id="dp-modal-content"></div>
 <div class="dp-modal-actions">
 <button class="dp-community-button secondary" id="dp-modal-close">Закрыть</button>
 <button class="dp-community-button" id="dp-modal-action">Добавить в друзья</button>
 </div>
 </div>
 </div>
 ;

 const $ = selector => screen.querySelector(selector);

 function showTab(tab) {
 screen.querySelectorAll('.dp-community-tab').forEach(b=>{
 b.classList.toggle('active',b.dataset.tab===tab);
 });
 экран.querySelectorAll('.dp-community-panel').forEach(p=>{
 p.classList.toggle('active',p.id==='dp-panel-'+tab);
 });
 renderAll();
 }

 function openProfile(id) {
 const user = getUser(id);
 if (!user) return;
 $('#dp-modal-title').textContent = user.name;
 $('#dp-modal-content').innerHTML = 
 <div class="dp-user-top">
 <div class="dp-user-avatar">${avatar(user)}</div>
 <div><strong>${escapeHTML(user.handle)}</strong><div class="dp-community-sub">Уровень ${user.level} · ${user.xp} XP</div></div>
 </div>
 <p>${escapeHTML(user.bio)}</p>
 <div class="dp-achievements">${(user.achievements||[]).map(a=><span class="dp-achievement">✦ ${escapeHTML(a)}</span>).join('')}</div>
 ;
 const isFriend = data.friends.includes(id);
 const requested = data.sent.includes(id);
 $('#dp-modal-action').style.display = id==='me' ? 'none':'block';
 $('#dp-modal-action').textContent = isFriend ? 'Удалить из друзей' : requested ? 'Заявка отправлена' : 'Добавить в друзья';
 $('#dp-modal-action').disabled = requested;
 $('#dp-modal-action').onclick = () => {
 if (isFriend) {
 data.friends = data.friends.filter(x=>x!==id);
 } else if (!requested) {
 data.sent.push(id);
 }
 save();
 $('#dp-user-modal').classList.remove('open');
 renderAll();
 };
 $('#dp-user-modal').classList.add('open');
 }
 function renderDiscover() {
 const q = ($('#dp-discover-search').value || '').toLowerCase();
 const users = data.users.filter(u=>
 u.name.toLowerCase().includes(q) || u.handle.toLowerCase().includes(q)
 );
 $('#dp-discover-grid').innerHTML = users.length
 ? users.map(u=>userCard(u,
 data.friends.includes(u.id)?'Открыть профиль':
 data.sent.includes(u.id)?'Заявка отправлена':'Посмотреть профиль',
 'profile')).join('')
 : '<div class="dp-empty">Пользователи не найдены.</div>';
 }

 function renderFriends() {
 const friends = data.friends.map(getUser).filter(Boolean);
 $('#dp-friends-grid').innerHTML = friends.length
 ? friends.map(u=>userCard(u,'Открыть профиль','profile')).join('')
 : '<div class="dp-empty">Пока нет друзей. Найдите участников в обзоре сообщества.</div>';

 const requests = data.requests.map(getUser).filter(Boolean);
 $('#dp-requests-grid').innerHTML = requests.length
 ? requests.map(u=>userCard(u,'Принять заявку','accept')).join('')
 : '<div class="dp-empty">Новых заявок пока нет.</div>';

 const sent = data.sent.map(getUser).filter(Boolean);
 $('#dp-sent-grid').innerHTML = sent.length
 ? sent.map(u=>userCard(u,'Отменить заявку','cancel')).join('')
 : '<div class="dp-empty">Ты пока никому не отправлял заявки.</div>';
 }

 function renderRanking() {
 const sort = $('#dp-ranking-sort').value;
 const users = [...data.users,data.me].sort((a,b)=>b[sort]-a[sort]);
 $('#dp-ranking-list').innerHTML = users.map((u,i)=>
 <div class="dp-ranking-row ${u.id==='me'?'me':''}">
 <div class="dp-rank-number">#${i+1}</div>
 <div class="dp-ranking-user">
 <div class="dp-user-avatar">${avatar(u)}</div>
 <div style="min-width:0">
 <div class="dp-ranking-user-name">${escapeHTML(u.name)} ${u.id==='me'?'(Вы)':''}</div>
 <div class="dp-ranking-user-handle">${escapeHTML(u.handle)}</div>
 </div>
 </div>
 <div class="dp-ranking-value">${u[sort].toLocaleString('ru-RU')}<small>${sort==='level'?'Уровень':sort==='xp'?'XP':'Активность'}</small></div>
 <div class="dp-ranking-value">${u.level}<small>Уровень</small></div>
 </div>).join('');
 }

 function renderProfile() {
 const u = data.me;
 $('#dp-own-profile').innerHTML = 
 <div class="dp-profile-cover"></div>
 <div class="dp-profile-main">
 <div class="dp-user-avatar">${avatar(u)}</div>
 <div class="dp-profile-details">
 <h3>${escapeHTML(u.name)}</h3>
 <p>${escapeHTML(u.handle)} · Уровень ${u.level}</p>
 </div>
 </div>
 <div class="dp-profile-description">${escapeHTML(u.bio)}</div>
 <div class="dp-profile-metrics">
 <div class="dp-profile-metric"><strong>${u.level}</strong><span>Уровень</span></div>
 <div class="dp-profile-metric"><strong>${u.xp.toLocaleString('ru-RU')}</strong><span>Опыт XP</span></div>
 <div class="dp-profile-metric"><strong>${данные.друзья.length}</strong><span>Друзья</span></div>
 </div>;
 $('#dp-own-достижения').innerHTML = (u.достижения||[]).карта(a=>
 <span class="dp-достижение">✦ ${escapeHTML(a)}</span>
 ).join('') || '<span class="dp-community-sub">Пока нет достижений.</span>';
 $('#dp-edit-name').значение = u.name;
 $ ('#dp-edit-handle').значение = u.handle;
 $('#dp-edit-bio').значение = u.bio;
 }

 функция renderAll() {
 $('#dp-количество друзей').textContent = '✦ '+data.friends.length+' друзей';
 renderDiscover();
 renderFriends();
 Рейтинг рендеринга();
 Профиль рендеринга();
 }

 экран.querySelectorAll('.dp-community-tab').forEach(кнопка=>{
 button.onclick = ()=>Показать вкладку(button.dataset.tab);
 });

 $('#dp-discover-search').addEventListener('ввод', renderDiscover);
 $('#dp-ranking-сортировка').addEventListener('изменение', ранжирование рендеринга);

 экран.addEventListener ('щелчок', событие =>{
 кнопка const = событие.цель.ближайшее ('[данные-действие]');
 возврат if (!кнопки);
 идентификатор const = button.dataset.id;
 const action = button.dataset.ac
 function renderDiscover() {
 const q = ($('#dp-discover-search').value || '').toLowerCase();
 const users = data.users.filter(u=>
 u.name.toLowerCase().includes(q) || u.handle.toLowerCase().includes(q)
 );
 $('#dp-discover-grid').innerHTML = users.length
 ? users.map(u=>userCard(u,
 data.friends.includes(u.id)?'Открыть профиль':
 data.sent.includes(u.id)?'Заявка отправлена':'Посмотреть профиль',
 'profile')).join('')
 : '<div class="dp-empty">Пользователи не найдены.</div>';
 }

 function renderFriends() {
 const friends = data.friends.map(getUser).filter(Boolean);
 $('#dp-friends-grid').innerHTML = friends.длина
 ? friends.map(u=>userCard(u,'Открыть профиль','profile')).join('')
 : '<div class="dp-empty">Пока нет друзей. Найди участников в обзоре сообщества.</div>';

 const requests = data.requests.map(getUser).filter(Boolean);
 $('#dp-requests-grid').innerHTML = requests.длина
 ? requests.map(u=>userCard(u,'Принять заявку','accept')).join('')
 : '<div class="dp-empty">Новых заявок пока нет.</div>';

 const sent = data.sent.map(getUser).filter(Boolean);
 $('#dp-sent-grid').innerHTML = sent.длина
 ? sent.map(u=>userCard(u,'Отменить заявку','cancel')).join('')
 : '<div class="dp-empty">Ты пока никому не отправлял заявки.</div>';
 }

 function renderRanking() {
 const sort = $('#dp-ranking-sort').value;
 const users = [...data.users,data.me].sort((a,b)=>b[sort]-a[sort]);
 $('#dp-ranking-list').innerHTML = users.map((u,i)=>
 <div class="dp-ranking-row ${u.id==='me'?'me':''}">
 <div class="dp-rank-number">#${i+1}</div>
 <div class="dp-ranking-user">
 <div class="dp-user-avatar">${avatar(u)}</div>
 <div style="min-width:0">
 <div class="dp-ranking-user-name">${escapeHTML(u.name)} ${u.id==='me'?'(Вы)':''}</div>
 <div class="dp-ranking-user-handle">${escapeHTML(u.handle)}</div>
 </div>
 </div>
 <div class="dp-ranking-value">${u[sort].toLocaleString('ru-RU')}<small>${sort==='level'?'Уровень':sort==='xp'?'XP':'Активность'}</small></div>
 <div class="dp-ranking-value">${u.level}<small>Уровень</small></div>
 </div>).join('');
 }

 function renderProfile() {
 const u = data.me;
 $('#dp-own-profile').innerHTML = 
 <div class="dp-profile-cover"></div>
 <div class="dp-profile-main">
 <div class="dp-user-avatar">${avatar(u)}</div>
 <div class="dp-profile-details">
 <h3>${escapeHTML(u.name)}</h3>
 <p>${escapeHTML(u.handle)} · Уровень ${u.level}</p>
 </div>
 </div>
 <div class="dp-profile-description">${escapeHTML(u.bio)}</div>
 <div class="dp-profile-metrics">
 <div class="dp-profile-metric"><strong>${u.level}</strong><span>Уровень</span></div>
 <div class="dp-profile-metric"><strong>${u.xp.toLocaleString('ru-RU')}</strong><span>Опыт XP</span></div>
 <div class="dp-profile-metric"><strong>${data.friends.length}</strong><span>Друзья</span></div>
 </div>;
 $('#dp-own-achievements').innerHTML = (u.achievements||[]).map(a=>
 <span class="dp-achievement">✦ ${escapeHTML(a)}</span>
 ).join('') || '<span class="dp-community-sub">Пока нет достижений.</span>';
 $('#dp-edit-name').value = u.name;
 $('#dp-edit-handle').value = u.handle;
 $('#dp-edit-bio').value = u.bio;
 }

 function renderAll() {
 $('#dp-friend-count').textContent = '✦ '+data.friends.length+' friends';
 renderDiscover();
 renderFriends();
 renderRanking();
 renderProfile();
 }

 экран.querySelectorAll('.dp-community-tab').forEach(button=>{
 button.onclick = ()=>showTab(button.dataset.tab);
 });

 $('#dp-discover-search').addEventListener('input',renderDiscover);
 $('#dp-ranking-sort').addEventListener('change',renderRanking);

 screen.addEventListener('click',event=>{
 const button = event.target.closest('[data-action]');
 if (!button) return;
 const id = button.dataset.id;
 const action = button.dataset.ac
 <style>
/* DARK PROTOCOL — PROFILE */
#profile-screen {color:#f1edf8;font-family:'Manrope',sans-serif}
.dp-profile-app {display:flex;flex-direction:column;gap:19px}
.dp-profile-header {
 display:flex;justify-content:space-between;align-items:center;
 flex-wrap:wrap;gap:12px
}
.dp-profile-heading {font-size:25px;font-weight:800;letter-spacing:-1px}
.dp-profile-caption {color:#8e859b;font-size:11px;margin-top:5px}
.dp-profile-level {
 border:1px solid #a98aff38;background:#a98aff12;
 padding:10px 14px;border-radius:12px;color:#d6c5ff;font-size:11px
}
.dp-profile-hero {
 position:relative;overflow:hidden;
 border:1px solid #ffffff15;border-radius:20px;
 background:linear-gradient(120deg,#21182d,#15121e 65%,#241a35);
 padding:23px
}
.dp-profile-hero:after {
 content:"";position:absolute;width:250px;height:250px;
 right:-90px;top:-130px;border-radius:50%;
 background:#a27bff18;filter:blur(30px);pointer-events:none
}
.dp-profile-hero-content {
 display:flex;align-items:center;gap:17px;position:relative;z-index:1
}
.dp-profile-avatar {
 width:76px;height:76px;border-radius:23px;
 display:grid;place-items:center;flex-shrink:0;
 background:linear-gradient(135deg,#ad8aff,#563b80);
 border:2px solid #d4bfff55;color:white;font-size:27px;font-weight:800;
 box-shadow:0 0 35px #9867ee30
}
.dp-profile-name {font-size:20px;font-weight:800}
.dp-profile-nick {color:#a69bb5;font-size:11px;margin-top:5px}
.dp-profile-status {color:#a98aff;font-size:10px;margin-top:8px}
.dp-profile-edit-btn {
 margin-left:auto;position:relative;z-index:2;
 background:#ffffff0b;border:1px solid #ffffff20;
 color:#e1d7ef;padding:10px 13px;border-radius:10px;
 cursor:pointer;font:inherit;font-size:10px
}
.dp-profile-xp {margin-top:23px;position:relative;z-index:1}
.dp-profile-xp-label {
 display:flex;justify-content:space-between;
 color:#aaa0b8;font-size:10px;margin-bottom:9px
}
.dp-profile-progress {
 height:7px;border-radius:20px;background:#ffffff12;overflow:hidden
}
.dp-profile-progress span {
 display:block;height:100%;border-radius:20px;
 background:linear-gradient(90deg,#7652b8,#c2a6ff);
 box-shadow:0 0 12px #a98aff65
}
.dp-profile-stats {
 display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:11px
}
.dp-profile-stat {
 border:1px solid #ffffff12;background:#ffffff06;
 border-radius:15px;padding:15px;min-width:0
}
.dp-profile-stat-icon {font-size:17px;margin-bottom:11px;color:#b99aff}
.dp-profile-stat-value {font-size:20px;font-weight:800}
.dp-profile-stat-label {font-size:9px;color:#898195;margin-top:5px}
.dp-profile-section {
 border:1px solid #ffffff12;background:#ffffff05;
 border-radius:17px;padding:18px
}
.dp-profile-section-head {
 display:flex;align-items:center;justify-content:space-between;
 gap:10px;margin-bottom:15px
}
.dp-profile-section-title {font-size:14px;font-weight:750}
.dp-profile-section-note {font-size:9px;color:#82798e}
.dp-profile-achievements {
 display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px
}
.dp-profile-achievement {
 border:1px solid #a98aff24;background:#a98aff09;
 border-radius:13px;padding:14px;min-width:0
}
.dp-profile-achievement.locked {
 border-color:#ffffff0e;background:#ffffff03;opacity:.55
}
.dp-profile-achievement-icon {
 width:36px;height:36px;border-radius:11px;
 display:grid;place-items:center;background:#a98aff18;
 font-size:18px;margin-bottom:10px
}
.dp-profile-achievement strong {display:block;font-size:11px}
.dp-profile-achievement p {
 color:#91889e;font-size:9px;line-height:1.5;margin:6px 0 0
}
.dp-profile-settings {
 display:flex;flex-direction:column;gap:0
}
.dp-profile-setting {
 display:flex;align-items:center;justify-content:space-between;
 gap:15px;padding:14px 0;border-bottom:1px solid #ffffff0c
}
.dp-profile-setting:last-child {border-bottom:0}
.dp-profile-setting strong {display:block;font-size:11px}
.dp-profile-setting small {
 display:block;color:#837a90;font-size:9px;margin-top:4px
}
.dp-profile-toggle {
 appearance:none;width:37px;height:21px;border-radius:20px;
 background:#ffffff20;position:relative;cursor:pointer;flex-shrink:0;
 transition:.2s
}
.dp-profile-toggle:checked {background:#916bd2}
.dp-profile-toggle:after {
 content:"";position:absolute;width:15px;height:15px;
 left:3px;top:3px;border-radius:50%;background:white;transition:.2s
}
.dp-profile-toggle:checked:after {left:19px}
.dp-profile-select {
 background:#1d1727;color:#e3d9f0;border:1px solid #ffffff1c;
 border-radius:9px;padding:8px 10px;font:inherit;font-size:10px
}
.dp-profile-danger {
 color:#e69ba5;background:#a83e4c10;
 border:1px solid #a83e4c35;border-radius:10px;
 padding:11px 13px;font:inherit;font-size:10px;cursor:pointer
}
.dp-profile-modal {
 position:fixed;inset:0;z-index:10000;background:#000b;
 display:none;align-items:center;justify-content:center;padding:18px
}
.dp-profile-modal.open {display:flex}
.dp-profile-modal-card {
 width:100%;max-width:390px;padding:20px;
 background:#191421;border:1px solid #a98aff40;
 border-radius:17px
}
.dp-profile-modal-card h3 {font-size:15px;margin:0 0 15px}
.dp-profile-field {margin-bottom:12px}
.dp-profile-field label {
 display:block;color:#93899e;font-size:10px;margin-bottom:6px
}
.dp-profile-field input,.dp-profile-field textarea {
 width:100%;box-sizing:border-box;background:#ffffff09;
 border:1px solid #ffffff19;border-radius:9px;
 padding:11px;color:white;font:inherit;font-size:11px;outline:none
}
.dp-profile-field textarea {resize:vertical;min-height:75px}
.dp-profile-save {
 width:100%;border:0;border-radius:10px;padding:12px;
 background:linear-gradient(110deg,#a98aff,#7050b2);
 color:white;font:inherit;font-size:11px;cursor:pointer
}
.dp-profile-cancel {
 width:100%;margin-top:8px;border:1px solid #ffffff18;
 background:#ffffff08;color:#aaa1b5;padding:11px;
 border-radius:10px;font:inherit;font-size:10px;cursor:pointer
}
@media(max-width:650px) {
 .dp-profile-stats {grid-template-columns:repeat(2,minmax(0,1fr))}
 .dp-profile-achievements {grid-template-columns:repeat(2,minmax(0,1fr))}
 .dp-profile-hero-content {flex-wrap:wrap}
 .dp-profile-edit-btn {margin-left:0}
}
@media(max-width:390px) {
 .dp-profile-achievements {grid-template-columns:1fr}
 .dp-profile-heading {font-size:21px}
}
</style>

<script>
(function(){
 const screen=document.getElementById('profile-screen');
 if(!screen){
 console.warn('Profile: экран profile-screen не найден.');
 return;
 }

 const KEY='darkProtocolProfileV1';

 const defaults={
 name:'DARK USER',
 nick:'@darkuser',
 bio:'Добро пожаловать в DARK PROTOCOL.',
 status:'В сети',
 level:12,
 xp:1250,
 nextXp:2000,
 hours:0,
 sessions:1,
 friends:2,
 achievements:[
 {id:'first',name:'Первый шаг',icon:'✦',description:'Начало пути в DARK PROTOCOL.',done:true},
 {id:'explorer',name:'Исследователь',icon:'⌖',description:'Открыть все основные разделы.',done:true},
 {id:'social',name:'Связи',icon:'♧',description:'Добавить 5 друзей.',done:false},
 {id:'veteran',name:'Ветеран',icon:'♜',description:'Достичь 25 уровня.',done:false},
 {id:'creator',name:'Создатель',icon:'✧',description:'Создать собственный проект.',done:false},
 {id:'elite',name:'Элита',icon:'♛',description:'Достичь 50 уровня.',done:false}
 ],
 settings:{
 notifications:true,
 sounds:false,
 privacy:true,
 compact:false,
 language:'Русский',
 theme:'Dark'
 }
 };

 let data;
 try{
 data=JSON.parse(localStorage.getItem(KEY))||null;
 }catch(e){data=null;}

 if(!data)data=JSON.parse(JSON.stringify(defaults));

 function save(){
 localStorage.setItem(KEY,JSON.stringify(data));
 }

 function esc(s){
 return String(s).replace(/[&<>"']/g,c=>({
 '&':'&amp;','<':'<','>':'>',
 '"':'"',"'":'&#039;'
 }[c]));
 }

 const $=s=>screen.querySelector(s);

 screen.innerHTML=`
 <div class="dp-profile-app">
 <header class="dp-profile-header">
 <div>
 <div class="dp-profile-heading">МОЙ ПРОФИЛЬ</div>
 <div class="dp-profile-caption">Твоя личность, достижения и управление системой.</div>
 </div>
 <div class="dp-profile-level">✦ УРОВЕНЬ <b id="dp-level-label">12</b></div>
 </header>

 <section class="dp-profile-hero">
 <div class="dp-profile-hero-content">
 <div class="dp-profile-avatar" id="dp-avatar">D</div>
 <div>
 <div class="dp-profile-name" id="dp-profile-name"></div>
 <div class="dp-profile-nick" id="dp-profile-nick"></div>
 <div class="dp-profile-status" id="dp-profile-status"></div>
 </div>
 <button class="dp-profile-edit-btn" id="dp-edit-open">✎ Редактировать</button>
 </div>
 <div class="dp-profile-xp">
 <div class="dp-profile-xp-label">
 <span>Прогресс следующего уровня</span>
 <span id="dp-xp-label"></span>
 </div>
 <div class="dp-profile-progress"><span id="dp-xp-bar"></span></div>
 </div>
 </section>

 <section class="dp-profile-stats">
 <div class="dp-profile-stat"><div class="dp-profile-stat-icon">◈</div><div class="dp-profile-stat-value" id="dp-stat-level">12</div><div class="dp-profile-stat-label">Уровень</div></div>
 <div class="dp-profile-stat"><div class="dp-profile-stat-icon">✧</div><div class="dp-profile-stat-value" id="dp-stat-xp">1 250</div><div class="dp-profile-stat-label">Всего опыта XP</div></div>
 <div class="dp-profile-stat"><div class="dp-profile-stat-icon">♧</div><div class="dp-profile-stat-value" id="dp-stat-friends">2</div><div class="dp-profile-stat-label">Друзья</div></div>
 <div class="dp-profile-stat"><div class="dp-profile-stat-icon">◷</div><div class="dp-profile-stat-value" id="dp-stat-hours">0</div><div class="dp-profile-stat-label">Часов в системе</div></div>
 </section>

 <section class="dp-profile-section">
 <div class="dp-profile-section-head">
 <div class="dp-profile-section-title">Достижения</div>
 <div class="dp-profile-section-note" id="dp-achievement-count"></div>
 </div>
 <div class="dp-profile-achievements" id="dp-achievements"></div>
 </section>

 <section class="dp-profile-section">
 <div class="dp-profile-section-head">
 <div class="dp-profile-section-title">Статистика активности</div>
 <div class="dp-profile-section-note">Личный прогресс</div>
 </div>
 <div class="dp-profile-stats">
 <div class="dp-profile-stat"><div class="dp-profile-stat-icon">⌘</div><div class="dp-profile-stat-value" id="dp-stat-sessions">1</div><div class="dp-profile-stat-label">Сессии</div></div>
 <div class="dp-profile-stat"><div class="dp-profile-stat-icon">♜</div><div class="dp-profile-stat-value" id="dp-stat-achievements">2</div><div class="dp-profile-stat-label">Награды</div></div>
 <div class="dp-profile-stat"><div class="dp-profile-stat-icon">⚑</div><div class="dp-profile-stat-value">1</div><div class="dp-profile-stat-label">Проекты</div></div>
 <div class="dp-profile-stat"><div class="dp-profile-stat-icon">◉</div><div class="dp-profile-stat-value">48%</div><div class="dp-profile-stat-label">Активность</div></div>
 </div>
 </section>

 <section class="dp-profile-section">
 <div class="dp-profile-section-head">
 <div class="dp-profile-section-title">Настройки</div>
 <div class="dp-profile-section-note">Управление аккаунтом</div>
 </div>
 <div class="dp-profile-settings">
 <div class="dp-profile-setting"><div><strong>Уведомления</strong><small>Системные уведомления приложения</small></div><input class="dp-profile-toggle" type="checkbox" id="dp-notifications"></div>
 <div class="dp-profile-setting"><div><strong>Звуковые эффекты</strong><small>Звуки интерфейса</small></div><input class="dp-profile-toggle" type="checkbox" id="dp-sounds"></div>
 <div class="dp-profile-setting"><div><strong>Приватный профиль</strong><small>Ограничение видимости профиля</small></div><input class="dp-profile-toggle" type="checkbox" id="dp-privacy"></div>
 <div class="dp-profile-setting"><div><strong>Компактный интерфейс</strong><small>Уменьшенные отступы элементов</small></div><input class="dp-profile-toggle" type="checkbox" id="dp-compact"></div>
 <div class="dp-profile-setting"><div><strong>Язык интерфейса</strong><small>Язык приложения</small></div><select class="dp-profile-select" id="dp-language"><option>Русский</option><option>English</option><option>Қазақша</option></select></div>
 <div class="dp-profile-setting"><div><strong>Оформление</strong><small>Внешний вид приложения</small></div><select class="dp-profile-select" id="dp-theme"><option>Dark</option><option>Purple</option></select></div>
 </div>
 </section>

 <section class="dp-profile-section">
 <div class="dp-profile-section-head">
 <div class="dp-profile-section-title">Система</div>
 <div class="dp-profile-section-note">DARK PROTOCOL</div>
 </div>
 <div class="dp-profile-setting">
 <div><strong>Версия приложения</strong><small>Текущая сборка интерфейса</small></div>
 <span style="color:#a98aff;font-size:10px">0.1.0 АЛЬФА-ВЕРСИЯ</span>
 </div>
 <div class="dp-profile-setting">
 <div><strong>Сбросить настройки профиля</strong><small>Вернуть демонстрационные значения</small></div>
 <button class="dp-profile-danger" id="dp-profile-reset">Сбросить</button>
 </div>
 </section>
 </div>

 <div class="dp-profile-modal" id="dp-profile-modal">
 <div class="dp-profile-modal-card">
 <h3>Редактирование профиля</h3>
 <div class="dp-profile-field"><label>Имя</label><input id="dp-name-input" maxlength="30"></div>
 <div class="dp-profile-field"><label>Никнейм</label><input id="dp-nick-input" maxlength="25"></div>
 <div class="dp-profile-field"><label>О себе</label><textarea id="dp-bio-input" maxlength="180"></textarea></div>
 <div class="dp-profile-field"><label>Статус</label><input id="dp-status-input" maxlength="35"></div>
 <button class="dp-profile-save" id="dp-profile-save">Сохранить профиль</button>
 <button class="dp-profile-cancel" id="dp-profile-cancel">Отмена</button>
 </div>
 </div>
 ;

 function render(){
 const u=data;
 const done=u.achievements.filter(a=>a.done).length;
 const percent=Math.min(100,Math.round(u.xp/u.nextXp*100));

 $('#dp-avatar').textContent=(u.name||'D').charAt(0).toUpperCase();
 $('#dp-profile-name').textContent=u.name;
 $('#dp-profile-nick').textContent=u.nick;
 $('#dp-profile-status').textContent='● '+u.status;
 $('#dp-level-label').textContent=u.level;
 $('#dp-stat-level').textContent=u.level;
 $('#dp-stat-xp').textContent=u.xp.toLocaleString('ru-RU');
 $('#dp-stat-friends').textContent=u.friends;
 $('#dp-stat-hours').textContent=u.hours;
 $('#dp-stat-sessions').textContent=u.sessions;
 $('#dp-stat-achievements').textContent=done;
 $('#dp-xp-label').textContent=u.xp+' / '+u.nextXp+' XP';
 $('#dp-xp-bar').style.width=percent+'%';

 $('#dp-achievement-count').textContent=done+' / '+u.achievements.length+' открыто';
 $('#dp-achievements').innerHTML=u.achievements.map(a=>
 <div class="dp-profile-achievement ${a.done?'':'locked'}">
 <div class="dp-profile-achievement-icon">${a.done?a.icon:'🔒'}</div>
 <strong>${esc(a.name)}</strong>
 <p>${esc(a.description)}</p>
 <p>${a.done?'Получено':'Пока закрыто'}</p>
 </div>`).join('');

 Object.keys(u.settings).forEach(key=>{
 const el=$('#dp-'+key);
 if(!el)return;
 if(el.type==='checkbox')el.checked=u.settings[key];
 else el.value=u.settings[key];
 });
 }
 $('#dp-edit-open').onclick=()=>{
 $('#dp-name-input').value=data.name;
 $('#dp-nick-input').value=data.nick;
 $('#dp-bio-input').value=data.bio;
 $('#dp-status-input').value=data.status;
 $('#dp-profile-modal').classList.add('open');
 };

 $('#dp-profile-cancel').onclick=()=>$('#dp-profile-modal').classList.remove('open');

 $('#dp-profile-save').onclick=()=>{
 const name=$('#dp-name-input').value.trim();
 const nick=$('#dp-nick-input').value.trim();
 if(!name||!nick){alert('Имя и никнейм обязательны.');return;}
 data.name=name;
 data.nick=nick.startsWith('@')?nick:'@'+nick;
 data.bio=$('#dp-bio-input').value.trim();
 data.status=$('#dp-status-input').value.trim()||'В сети';
 save();
 render();
 $('#dp-profile-modal').classList.remove('open');
 };

 ['notifications','sounds','privacy','compact','language','theme'].forEach(key=>{
 const el=$('#dp-'+key);
 el.addEventListener('change',()=>{
 data.settings[key]=el.type==='checkbox'?el.checked:el.value;
 save();
 if(key==='compact'){
 screen.classList.toggle('dp-compact-mode',el.checked);
 }
 });
 });

 $('#dp-profile-reset').onclick=()=>{
 if(!confirm('Сбросить профиль и настройки до исходных значений?'))return;
 data=JSON.parse(JSON.stringify(defaults));
 save();
 render();
 };

 render();
 save();
 
})();
</script>
 
