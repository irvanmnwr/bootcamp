// Polindrom
const validasi = (input) =>
  new Promise((resolve, reject) => {
    const teks = input.toUpperCase();
    resolve(teks);
  });

const cekpolindrom = (teks) =>
  new Promise((resolve, reject) => {
    let hasil = "";
    let x = teks.length - 1;

    if (x > 1) {
      while (x >= 0) {
        hasil = hasil + teks[x];
        x = x - 1;
      }
      if (hasil == teks) {
        resolve(console.log("Polindrom"));
      } else {
        reject(new Error("Bukan Polindrom"));
      }
    } else {
      console.log("Inputan Harus lebih dari 2 huruf");
    }
  });

async function polindrom(input) {
  try {
    const teks = await validasi(input);
    await cekpolindrom(teks);
  } catch (error) {
    console.log(error);
  }
}

polindrom("malam");
polindrom("siang");
