// Asynchronous adalah Proses komunikasi data yang tidak terikat dengan waktu tetap.Asynchronous.
// Penerapan pada js dapat dilakukan dengan menggunakan try catch dan then catch dengan catatan
// menggunakan promise pada fungsi yang dituju
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

// penggunaan try adalah mengeksekusi fungsi yang berada didalam {} dengan cara mengeksekusi sesuai
// dengan urutan await

// [A]
// async function cekhari(hari) {
//   try {
//     const hasil = await cekHariKerja(hari);
//     await console.log(hasil);
//   } catch (error) {
//     console.log(error);
//   }
// }

//penggunaan then adalah mengeksekusi fungsi yang ada di dalam then jika fungsi sebelumnya selesai
//atau berhasil di eksekusi

// [B]
cekHariKerja("minggu")
  .then((result) => console.log(result))
  // jika eksekusinya gagal maka akan mengeksekusi catch
  .catch((error) => console.log(error));

// cekhari("senin");
