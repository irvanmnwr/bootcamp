//Deret
const ReverseWord = (number) =>
  new Promise((resolve, reject) => {
    number = new String(number + "0").split("");
    const temp = [];
    let hasil = "";
    let x = number.length;
    for (let i = 0; i < x; i++) {
      if (number[i] == 0) {
        hasil = hasil + temp.sort().join("");
        temp.length = 0;
      } else {
        temp.push(number[i]);
      }
    }

    resolve(Number(hasil));
  });

ReverseWord(5956560159466056)
  .then((result) => console.log(result))
  .catch((error) => console.log("Error"));
