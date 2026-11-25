# Changelog

Semua perubahan penting pada proyek ini dicatat di file ini.

## [Unreleased]

## [0.4.0] - 2026-11-25
### Changed
- UX Skill (`ux-skill/SKILL.md`) diterapkan pada kode. Alur digabung dari 6 halaman menjadi 4: pilih item, konfirmasi, pilih bank, nomor VA. Alasan: layar yang hanya mengulang isi layar sebelumnya tidak perlu (prinsip 5).
- Item terpilih diberi warna, tanda centang, dan pesan status, misalnya "HER sudah terpilih. Nominal tidak berubah." (prinsip 1 dan 2).
- Ditambah indikator tahapan, total yang selalu terlihat, dan keterangan mengapa tombol belum aktif (prinsip 4 dan 7).
- Kontras warna, ukuran tombol minimal 44px, dan fokus keyboard diperbaiki (prinsip 6).
- Tombol "Lanjut ke Konfirmasi" diganti "Periksa Pilihan".

### Removed
- `item-terpilih.html` dan `daftar-item.html`, karena digabung ke `index.html`.

## [0.3.0] - 2026-11-25
### Added
- `ux-skill/SKILL.md`: panduan UX yang bersumber dari temuan riset (Worksheet 5 sampai 9).
- `agent.md`: konteks proyek dan aturan kerja untuk AI agent.

## [0.2.0] - 2026-11-25
### Added
- Source code awal prototype pembayaran UKT InfoKHS versi hitam putih, 6 halaman terpisah: `index.html`, `item-terpilih.html`, `daftar-item.html`, `konfirmasi.html`, `pilih-bank.html`, `nomor-va.html`, ditambah `app.js` dan `style.css`.
- Total pembayaran dihitung dari item yang terpilih, sehingga menekan item yang sama berulang tidak menambah nominal (maksimal Rp 5.800.000).

## [0.1.0] - 2026-11-24
### Added
- PRD pada `README.md`: latar belakang masalah, tujuan, pengguna sasaran (persona Raka), kebutuhan, user stories, prioritas, ruang lingkup, alur pengguna, dan ukuran keberhasilan.
- `CHANGELOG.md`.
