CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  telegram_id text NOT NULL UNIQUE,
  username varchar(64),
  first_name varchar(64) NOT NULL DEFAULT '',
  last_name varchar(64) NOT NULL DEFAULT '',
  language_code varchar(12),
  photo_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS users_username_idx ON users (username);

CREATE TABLE IF NOT EXISTS profiles (
  user_id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  display_name varchar(80) NOT NULL,
  nickname varchar(32) UNIQUE,
  bio varchar(500) NOT NULL DEFAULT '',
  status varchar(80) NOT NULL DEFAULT 'В системе',
  level integer NOT NULL DEFAULT 1 CHECK (level > 0),
  experience bigint NOT NULL DEFAULT 0 CHECK (experience >= 0),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS profiles_leaderboard_idx ON profiles (level DESC, experience DESC);
CREATE INDEX IF NOT EXISTS profiles_display_name_idx ON profiles (lower(display_name));

CREATE TABLE IF NOT EXISTS friends (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  friend_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status varchar(16) NOT NULL DEFAULT 'accepted' CHECK (status IN ('accepted')),
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, friend_id),
  CHECK (user_id <> friend_id)
);
CREATE INDEX IF NOT EXISTS friends_friend_idx ON friends (friend_id, user_id);
CREATE TABLE IF NOT EXISTS friend_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  receiver_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status varchar(16) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','accepted','declined')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (sender_id <> receiver_id),
  UNIQUE (sender_id, receiver_id)
);
CREATE INDEX IF NOT EXISTS friend_requests_receiver_idx ON friend_requests (receiver_id, status, created_at DESC);

CREATE TABLE IF NOT EXISTS achievements (
  id varchar(64) PRIMARY KEY,
  name varchar(120) NOT NULL,
  description varchar(500) NOT NULL,
  category varchar(32) NOT NULL CHECK (category IN ('activity','profile','game','social')),
  criteria jsonb NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE IF NOT EXISTS user_achievements (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  achievement_id varchar(64) NOT NULL REFERENCES achievements(id) ON DELETE CASCADE,
  unlocked_at timestamptz,
  progress jsonb NOT NULL DEFAULT '{}'::jsonb,
  PRIMARY KEY (user_id, achievement_id)
);

CREATE TABLE IF NOT EXISTS game_profiles (
  user_id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  balance bigint NOT NULL DEFAULT 1000 CHECK (balance >= 0),
  level integer NOT NULL DEFAULT 1 CHECK (level > 0),
  experience bigint NOT NULL DEFAULT 0 CHECK (experience >= 0),
  last_income_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS territories (
  id varchar(64) PRIMARY KEY,
  name varchar(120) NOT NULL,
  status varchar(16) NOT NULL DEFAULT 'neutral' CHECK (status IN ('neutral','owned')),
  owner_id uuid REFERENCES users(id) ON DELETE SET NULL,
  price bigint NOT NULL CHECK (price >= 0),
  income_per_hour integer NOT NULL DEFAULT 0 CHECK (income_per_hour >= 0),
  sort_order integer NOT NULL DEFAULT 0,
  CHECK ((status='neutral' AND owner_id IS NULL) OR (status='owned' AND owner_id IS NOT NULL))
);
CREATE INDEX IF NOT EXISTS territories_owner_idx ON territories (owner_id);
CREATE TABLE IF NOT EXISTS buildings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  territory_id varchar(64) NOT NULL REFERENCES territories(id) ON DELETE CASCADE,
  owner_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  kind varchar(32) NOT NULL,
  level integer NOT NULL DEFAULT 1 CHECK (level > 0),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS buildings_owner_idx ON buildings (owner_id, territory_id);
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  territory_id varchar(64) REFERENCES territories(id) ON DELETE SET NULL,
  kind varchar(24) NOT NULL CHECK (kind IN ('income','purchase','building','upgrade','reward')),
  amount bigint NOT NULL,
  description varchar(200) NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS transactions_user_created_idx ON transactions (user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS music_tracks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title varchar(160) NOT NULL,
  artist varchar(160) NOT NULL,
  cover_url text,
  external_url text NOT NULL,
  source_type varchar(24) NOT NULL DEFAULT 'external',
  active boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS playlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name varchar(80) NOT NULL,
  description varchar(240) NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, name)
);
CREATE TABLE IF NOT EXISTS playlist_tracks (
  playlist_id uuid NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
  track_id uuid NOT NULL REFERENCES music_tracks(id) ON DELETE CASCADE,
  position integer NOT NULL DEFAULT 0,
  PRIMARY KEY (playlist_id, track_id)
);

CREATE TABLE IF NOT EXISTS ai_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title varchar(60) NOT NULL DEFAULT 'Новый диалог',
  mode varchar(24) NOT NULL DEFAULT 'обычный' CHECK (mode IN ('обычный','аналитический','творческий','обучение')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS ai_conversations_user_idx ON ai_conversations (user_id, updated_at DESC);
CREATE TABLE IF NOT EXISTS ai_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES ai_conversations(id) ON DELETE CASCADE,
  role varchar(16) NOT NULL CHECK (role IN ('user','assistant')),
  content text NOT NULL CHECK (length(content) <= 12000),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS ai_messages_conversation_idx ON ai_messages (conversation_id, created_at);

CREATE TABLE IF NOT EXISTS user_settings (
  user_id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  notifications boolean NOT NULL DEFAULT true,
  sounds boolean NOT NULL DEFAULT false,
  privacy boolean NOT NULL DEFAULT true,
  language varchar(8) NOT NULL DEFAULT 'ru' CHECK (language IN ('ru','en')),
  theme varchar(16) NOT NULL DEFAULT 'dark' CHECK (theme IN ('dark','purple')),
  compact boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO territories (id,name,price,income_per_hour,sort_order) VALUES
 ('central','Центральный район',0,0,0),
 ('north','Северный квартал',1800,90,1),
 ('east','Восточный квартал',900,45,2),
 ('west','Западный район',1300,65,3),
 ('south','Южный порт',1100,55,4)
ON CONFLICT (id) DO NOTHING;
INSERT INTO buildings (territory_id,owner_id,kind,level)
SELECT 'central', u.id, 'hq', 1 FROM users u
WHERE NOT EXISTS (SELECT 1 FROM buildings b WHERE b.territory_id='central' AND b.owner_id=u.id AND b.kind='hq');

INSERT INTO music_tracks (title,artist,cover_url,external_url,source_type,sort_order) VALUES
 ('РАТАТАТАТА','MORGENSHTERN','https://cs10.pikabu.ru/video/2020/03/27/0/og_og_158525640831768238.jpg','https://eu.hitmoz.com/song/68022799','external',1),
 ('ПОВОД','MORGENSHTERN','https://cdn.promodj.com/afs/7a5d30f7a7a32474f99a363eac8c648c12%3Aresize%3A2000x2000%3Asame%3Abeab06','https://eu.hitmoz.com/song/79042608','external',2),
 ('12','MORGENSHTERN','https://i.ytimg.com/vi/OGpw-p2vw7E/maxresdefault.jpg','https://eu.hitmoz.com/song/73936814','external',3)
ON CONFLICT DO NOTHING;

INSERT INTO achievements (id,name,description,category) VALUES
 ('first-session','Первый вход','Откройте DARK PROTOCOL впервые.','activity'),
 ('profile-ready','Личность протокола','Заполните профиль.','profile'),
 ('first-territory','Первый район','Приобретите нейтральную территорию.','game'),
 ('social-link','Связь установлена','Добавьте первого друга.','social')
ON CONFLICT (id) DO NOTHING;
