// if (1 !== "1") {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Truthy = true | 1 | angka selain 0 | "string yang terisi"
// Falsy = false | 0 | "" | null | undefined | NaN
// const data = NaN
// if (data) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// untuk pengecekkan array if(data.length > 0)
// untuk pengecekkan object if(data.name)
// untuk pengecekkan NaN if(isNaN(data))

// Switch Case
// const phone = "Blackberry"

// switch(phone) {
//     case "Nokia": {
//         console.log("HP Anda Nokia")
//         break
//     }
//     case "Apple": {
//         console.log("HP Anda Apple")
//         break
//     }
//     default: {
//         console.log("HP Anda Tidak Terdaftar")
//     }
// }

// const harga = 5000

// if (harga > 10000) {
//     console.log("Mahal")
// } else if (harga > 5000) {
//     console.log("Sedang")
// } else if (harga > 3000) {
//     console.log("Lumayan Murah")
// } else {
//     console.log("Murah")
// }

// harga > 10000 ? console.log("Mahal") : harga > 5000 ? console.log("Sedang") : harga > 3000 ? console.log("Lumayan Murah") : console.log("Murah")
// harga > 10000 ? console.log("Mahal") // Error : Unexpected end of input

// Short Logic
// && = jika kondisinya true maka akan melanjutkan ke proses berikutnya, jika false maka nilai tsb yang akan di tetapkan
// || = jika kondisinya false maka akan melanjutkan ke proses berikutnya, jika true maka nilai tsb yang akan di tetapkan

// const nama = "Bagus"
// if (nama) {
//     nama = nama
// } else {
//     nama = "Anonymous"
// }
// console.log(nama)

// let nama = "Bagus"
// nama = nama || "Anonymous"
// console.log(nama)
