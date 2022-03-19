//ReverseWord
const ReverseWord = (teks) =>
  new Promise((resolve, reject) => {
    let hasil = "";
    let temp = " ";
    let x = teks.length - 1;
    while (x >= 0) {
      if (teks[x] == " ") {
        hasil = hasil + temp;
        temp = "";
      }
      temp = teks[x] + temp;
      x = x - 1;
    }
    hasil = hasil + temp;
    resolve(hasil);
  });

ReverseWord("Saya Belajar Javascript")
  .then((result) => console.log(result))
  .catch((error) => console.log("Error"));
