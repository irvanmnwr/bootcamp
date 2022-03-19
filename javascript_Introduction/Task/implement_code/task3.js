const cek = require("./fungsi.js");

const fazzfood = (harga, voucher, jarak, pajak) => {
  const total_pajak = cek.cekpajak(harga, pajak);
  const potongan = cek.cekpotongan(harga, voucher);
  const ongkir = cek.cekongkir(jarak);

  const total = harga - potongan + total_pajak + ongkir;

  console.log("Harga        : " + harga);
  console.log("Potongan     : " + potongan);
  console.log("Biaya Antar  : " + ongkir);
  console.log("Pajak        : " + total_pajak);
  console.log("SubTotal     : " + total + "\n");
};
//jika semua parameter sesuai soal
fazzfood(75000, "FAZZFOOD50", 5, true);
// jika menggunakan voucher "DITRAKTIR60"
fazzfood(75000, "DITRAKTIR60", 5, true);
// jika harga tidak mencapai minimal belanja
fazzfood(15000, "FAZZFOOD50", 5, true);
// jika tidak ada pajak
fazzfood(75000, "FAZZFOOD50", 5, false);
// jika tidak menggunakan voucher
fazzfood(75000, " ", 5, true);
// jika masih di 2 km pertama
fazzfood(75000, "FAZZFOOD50", 2, true);
