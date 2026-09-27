-- ============================================================
-- SCHEMA.SQL — Referensi struktur database untuk fase backend.
-- Dialek: mirip SQLite. Sesuaikan tipe data kalau nanti pindah
-- ke MySQL/PostgreSQL (AUTOINCREMENT -> AUTO_INCREMENT / SERIAL).
-- BELUM dieksekusi — GitHub Pages cuma hosting statis, jadi file
-- ini murni dokumentasi sampai situs pindah ke hosting yang punya
-- server (mis. Node.js + Express).
-- ============================================================

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(150),
  location VARCHAR(150),
  school VARCHAR(150),
  tagline TEXT,
  history TEXT,
  contribution TEXT
);

CREATE TABLE stats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  profile_id INTEGER NOT NULL,
  label VARCHAR(50) NOT NULL,
  value_a INTEGER NOT NULL,
  value_b INTEGER NOT NULL,
  FOREIGN KEY (profile_id) REFERENCES profile(id)
);

CREATE TABLE skills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  profile_id INTEGER NOT NULL,
  label VARCHAR(50) NOT NULL,
  value INTEGER NOT NULL CHECK (value BETWEEN 0 AND 100),
  FOREIGN KEY (profile_id) REFERENCES profile(id)
);

CREATE TABLE projects (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  summary TEXT,
  detail TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sponsors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100) NOT NULL,
  url VARCHAR(255) NOT NULL
);