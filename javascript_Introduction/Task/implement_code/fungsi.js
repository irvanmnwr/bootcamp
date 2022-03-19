const cekpajak = (harga, pajak) => {
  if (pajak == true) {
    return (harga * 5) / 100;
  }
  return 0;
};

const cekpotongan = (harga, voucher) => {
  if (voucher == "FAZZFOOD50" && harga >= 50000) {
    potongan = (harga * 50) / 100;
    if (potongan >= 50000) {
      potongan = 50000;
    }
  } else if (voucher == "DITRAKTIR60" && harga >= 25000) {
    potongan = (harga * 60) / 100;
    if (potongan >= 30000) {
      potongan = 30000;
    }
  } else {
    potongan = 0;
  }
  return potongan;
};

const cekongkir = (jarak) => {
  ongkir = 5000;
  if (jarak > 2) {
    return ongkir + (jarak - 2) * 3000;
  }
  return ongkir;
};

module.exports = { cekongkir, cekpajak, cekpotongan };
