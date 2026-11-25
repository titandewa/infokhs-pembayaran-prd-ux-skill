---
name: ux-skill-pembayaran-ukt
description: Panduan UX untuk memperbaiki alur pembayaran UKT (HER dan UTS) di prototype InfoKHS. Dipakai saat mengubah tampilan atau alur.
---

# UX Skill: Pembayaran UKT InfoKHS

## Tujuan
Membuat alur memilih HER dan UTS sampai memperoleh nomor VA jelas, aman dari salah nominal, dan tidak membuat pengguna ragu.

## Dasar riset
Kuesioner terbuka WS 5 (5 responden, mahasiswa aktif UMM), Persona Raka (WS 6), User Journey (WS 7), UX Requirements (WS 8), Information Architecture (WS 9).

## Prinsip

1. **Beri umpan balik status sistem.** Setiap tekanan item menghasilkan tanda yang jelas (misalnya "Terpilih"). Pengguna tidak perlu menekan lagi karena ragu. *(U2)*
2. **Cegah kesalahan.** Menekan item yang sama tidak boleh menambah nominal. Total dihitung dari item terpilih. Maksimal Rp 5.800.000.
3. **Bedakan item dengan jelas.** Satu baris per item, berisi nama dan nominal. HER dan UTS tidak boleh menyatu. *(U1, U2, U4, U5)*
4. **Beri konfirmasi dan kendali.** Tampilkan rincian dan total sebelum nomor VA, dan izinkan mengubah pilihan tanpa mengulang dari awal. *(U1, U2, U3, U5)*
5. **Hindari layar yang tidak perlu.** Gabungkan layar yang tidak membawa keputusan baru. Memilih item terjadi dalam satu halaman, sehingga alur menjadi 4 halaman: pilih item, konfirmasi, pilih bank, nomor VA.
6. **Aksesibel.** Kontras teks minimal 4.5:1, area sentuh minimal 44px, fokus keyboard terlihat, tombol memakai elemen `<button>`, dan status tidak hanya dibedakan dengan warna.
7. **Bahasa sederhana dan konsisten.** Istilah selalu UKT, HER, UTS. Tombol menyebut aksinya ("Pilih Bank", bukan "Lanjut").

## Daftar periksa
- [ ] Item terpilih punya tanda yang terlihat tanpa menggulir.
- [ ] Menekan item berulang tidak mengubah total.
- [ ] HER dan UTS tampil di baris terpisah.
- [ ] Ada halaman konfirmasi dan tombol ubah pilihan.
- [ ] Kontras, ukuran tombol, dan fokus keyboard memenuhi prinsip 6.
- [ ] Tidak ada halaman yang hanya mengulang isi halaman sebelumnya.

## Batasan
- Jangan mengubah logika perhitungan total.
- Jangan menghapus fitur yang sudah ada (Hapus, konfirmasi, pilih bank).
- Jangan menambah library atau dependensi.
- Nomor VA di prototype hanya contoh.

## Cara menerapkan
1. Baca `agent.md` untuk konteks proyek.
2. Periksa kode terhadap daftar periksa.
3. Perbaiki satu prinsip per perubahan, lalu catat di `CHANGELOG.md`.
