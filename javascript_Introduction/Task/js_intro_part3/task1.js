const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// [A]
// async function cekhari(hari) {
//   try {
//     const hasil = await cekHariKerja(hari);
//     await console.log(hasil);
//   } catch (error) {
//     console.log(error);
//   }
// }

// [B]
// cekHariKerja("senin")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// cekhari("sein");
