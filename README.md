# PRD: Prototype Pembayaran UKT InfoKHS (HER dan UTS)

**Penulis:** Achmad Titan Dewa Ruci (NIM 202310370311394)
**Mata kuliah:** Rekayasa Interaksi
**Status:** Draf 1
**Demo:** https://titandewa.github.io/infokhs-pembayaran-prd-ux-skill/

## 1. Ringkasan
Prototype ini merancang ulang langkah memilih item pembayaran UKT (HER dan UTS) di menu pembayaran InfoKHS, sampai pengguna memperoleh nomor VA.

## 2. Latar Belakang dan Masalah
Di menu pembayaran InfoKHS tersedia dua item, HER dan UTS, masing-masing Rp 2.900.000, sehingga total seharusnya Rp 5.800.000. Menekan item tidak menambah baris pada daftar, tetapi menambah nominal. Item yang sama bisa ditekan berulang. Dalam pengamatan penulis, 4 kali tekan membuat nominal menjadi Rp 11.600.000, dua kali lipat dari seharusnya.

Temuan dari kuesioner terbuka (5 responden, mahasiswa aktif UMM, Google Form, 22 Oktober 2026):
- Nominal naik ketika item ditekan lagi karena pengguna tidak yakin pilihan sudah masuk (U2).
- HER dan UTS menyatu dalam satu baris sehingga sulit dibedakan (U1, U2, U4, U5).
- Pengguna ragu dan takut salah bayar, memeriksa total berkali-kali, dan mengulang proses dari awal (U1, U2, U3, U5).

## 3. Tujuan
1. Pengguna yakin item HER dan UTS sudah terpilih.
2. Nominal tidak berubah karena tekanan berulang.
3. Pengguna bisa memeriksa dan mengoreksi pilihan sebelum mengambil VA tanpa mengulang dari awal.

## 4. Pengguna Sasaran
Mahasiswa aktif UMM yang pernah membayar HER dan UTS sekaligus lewat InfoKHS dan memperoleh nomor VA.

**Persona (nama samaran): Raka**
- Goal: membayar UKT sampai memperoleh VA dengan benar; yakin pilihan dan total sesuai.
- Behavior: memeriksa total berkali-kali; mengulang proses bila ragu atau salah tekan.
- Pain point: HER dan UTS sulit dibedakan; tidak ada tanda pilihan masuk; takut salah bayar.

## 5. Kebutuhan

| Research Insight | User Need | Functional Requirement | UX Requirement |
|---|---|---|---|
| Nominal bertambah saat item ditekan berulang | Nominal tidak berubah karena tekanan berulang | Tiap item hanya bisa dipilih satu kali | Nominal tiap item tetap Rp 2.900.000; total maksimal Rp 5.800.000 |
| HER dan UTS menyatu dalam satu baris | Membedakan HER dan UTS | Daftar menampilkan satu baris per item (nama dan nominal) | Pengguna menyebut item dan nominalnya dalam kurang dari 5 detik (target usulan) |
| Tidak ada tanda pilihan masuk | Kepastian pilihan tercatat | Status "Terpilih" pada item | Umpan balik muncul kurang dari 1 detik (target usulan) |
| Ragu dan mengulang dari awal | Yakin pilihan dan total benar | Halaman konfirmasi dengan opsi ubah pilihan | Koreksi tanpa mengulang dari awal (target usulan) |

## 6. User Stories
1. Sebagai mahasiswa pengguna InfoKHS, saya ingin memilih HER dan UTS tanpa nominal bertambah saat tertekan lebih dari sekali, agar tidak membayar lebih dari seharusnya.
2. Sebagai mahasiswa pengguna InfoKHS, saya ingin melihat HER dan UTS sebagai baris terpisah dengan nominalnya, agar bisa membedakan item yang saya pilih.
3. Sebagai mahasiswa pengguna InfoKHS, saya ingin melihat tanda jelas bahwa item sudah terpilih, agar tidak menekan lagi karena ragu.
4. Sebagai mahasiswa pengguna InfoKHS, saya ingin melihat konfirmasi rincian dan total sebelum VA, agar yakin dan tidak takut salah bayar.
5. Sebagai mahasiswa pengguna InfoKHS, saya ingin mengoreksi pilihan tanpa mengulang dari awal, agar tidak membuang waktu saat salah tekan.

## 7. Prioritas

| Kebutuhan | Prioritas | Alasan |
|---|---|---|
| Nominal tidak berubah karena tekanan berulang | Tinggi | Berisiko finansial langsung |
| Tanda item terpilih | Tinggi | Akar masalah: tidak ada umpan balik sistem |
| HER dan UTS terpisah | Sedang | Mengurangi keraguan |
| Konfirmasi dan koreksi sebelum VA | Sedang | Mengurangi pengulangan |

## 8. Ruang Lingkup
**Termasuk:** alur 6 layar: pilih item, HER terpilih, daftar item terpisah, konfirmasi, pilih bank, nomor VA.
**Tidak termasuk:** integrasi ke sistem InfoKHS asli, pembayaran sungguhan, login, dan menu InfoKHS lain. Nomor VA di prototype hanya contoh.

## 9. Alur Pengguna
Pilih item → HER terpilih → UTS terpilih (daftar terpisah, total Rp 5.800.000) → Konfirmasi (bisa ubah pilihan) → Pilih bank → Nomor VA.

## 10. Ukuran Keberhasilan
- Nominal tidak pernah melebihi Rp 5.800.000 walau item ditekan berulang.
- Pengguna menyelesaikan alur tanpa mengulang dari awal.
- Mayoritas peserta uji menyatakan yakin dengan pilihan dan total (target usulan: minimal 4 dari 5).

## 11. Asumsi dan Keterbatasan
- Data riset berasal dari 5 responden, sehingga bersifat indikatif.
- Umur dan kemampuan teknologi responden tidak dikumpulkan.
- Target angka pada UX Requirement adalah usulan penulis, belum diuji.

## 12. Sumber
Worksheet 5 (kuesioner terbuka), 6 (Empathy Map dan Persona), 7 (User Journey), 8 (UX Requirements), 9 (Information Architecture), 12 (Wireframe dan Prototype).
