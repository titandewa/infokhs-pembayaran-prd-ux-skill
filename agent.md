# agent.md

## Konteks proyek
Prototype web pembayaran UKT InfoKHS (item HER dan UTS, masing-masing Rp 2.900.000). Masalah awal: menekan item berulang menambah nominal, dan HER dan UTS menyatu dalam satu baris. Detail ada di `README.md` (PRD).

## Struktur
- `index.html` dan halaman lain: tampilan
- `app.js`: logika dan pilihan antar halaman (sessionStorage)
- `style.css`: gaya
- `ux-skill/SKILL.md`: panduan UX yang harus diikuti
- `CHANGELOG.md`: catatan perubahan

## Aturan kerja
1. Baca `README.md` dan `ux-skill/SKILL.md` sebelum mengubah kode.
2. Total pembayaran selalu dihitung dari item terpilih. Jangan mengubah ini.
3. Ubah sedikit demi sedikit, satu prinsip UX per perubahan.
4. Setiap perubahan dicatat di `CHANGELOG.md` beserta alasannya.
5. Bahasa antarmuka: Bahasa Indonesia, istilah UKT, HER, UTS.
6. Jangan menambah dependensi. Tetap HTML, CSS, dan JavaScript biasa.

## Menjalankan
Buka `index.html` di browser, atau jalankan `python3 -m http.server` lalu buka `http://localhost:8000`.

## Selesai berarti
Semua poin daftar periksa di `ux-skill/SKILL.md` terpenuhi dan alur dari pilih item sampai nomor VA berjalan tanpa error.
