// ============================================================
// DATA.JS — Sumber data tunggal untuk seluruh situs.
// Tambah/ubah proyek, statistik, atau sponsor cukup di sini,
// tidak perlu sentuh index.html / detail.html.
// ============================================================

const SITE_DATA = {
  profile: {
    name: "Nawlleta Nriver Fiel",
    role: "Pelajar · Calon Fullstack Developer",
    location: "Kab. Garut, Jawa Barat", // level kabupaten saja, demi keamanan
    school: "SMPN 1 Bayongbong",
    tagline: "Visioner eksekutif yang tenang, mampu menjalin regulasi dan relasi komunikasi yang efektif.",
    history: null,       // "Riwayat" belum ada data — isi di sini kalau sudah ada
    contribution: null   // "Kontribusi" belum ada data
  },

  stats: {
    iq: 132,
    mbti: "INTJ-A",
    enneagram: "6w9",
    typology: 125,
    ideologis: "Moderate",
    mindset: "Growth Mindset",
    // Format: a = skor, b = batas maksimal.
    breakdown: [
      { label: "Numerik", a: 31, b: 11 },
      { label: "Abstraksi", a: 30, b: 29 },
      { label: "Spesialis", a: 12, b: 8 },
      { label: "Penalaran", a: 19, b: 11 },
      { label: "Lainnya", a: 44, b: 41 }
    ]
  },

  skills: [
    { label: "Menggambar", value: 55 },
    { label: "Memasak", value: 88 },
    { label: "Kompetensi Dasar", value: 22 },
    { label: "Spesialis Bidang Lain", value: 66 },
    { label: "Sains", value: 78 },
    { label: "Matematika", value: 45 },
    { label: "Bahasa Inggris", value: 34 },
    { label: "Bahasa Indonesia", value: 97 },
    { label: "Sosial & Psikologi", value: 89 }
  ],

  // Tambah proyek baru: copy salah satu objek di bawah, ganti isinya.
  // "id" dipakai sebagai kunci di URL detail.html?id=...
  projects: [
    {
      id: "xion-ecosystem",
      title: "Xion Ecosystem",
      summary: "Kumpulan proyek dengan sistem penomoran versi sendiri.",
      detail: "Tulis deskripsi lengkap proyek ini di sini — arsitektur, peran kamu, dan teknologi yang dipakai."
    },
    {
      id: "sanyzen",
      title: "Sanyzen",
      summary: "Fiksi psikologis Indonesia dengan tool polling interaktif.",
      detail: "Tulis deskripsi lengkap di sini."
    },
    {
      id: "ruchelle",
      title: "Ruchelle — Loop of Age",
      summary: "Novel dark fantasy.",
      detail: "Tulis deskripsi lengkap di sini."
    }
  ],

  // Ganti USERNAME dengan akun asli kamu di masing-masing platform.
  sponsors: [
    { name: "GitHub Sponsors", url: "https://github.com/sponsors/USERNAME" },
    { name: "Ko-fi", url: "https://ko-fi.com/USERNAME" },
    { name: "Buy Me a Coffee", url: "https://www.buymeacoffee.com/USERNAME" }
  ]
};