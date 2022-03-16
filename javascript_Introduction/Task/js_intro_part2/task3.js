// Nomor1
// - toString()
// - Mengubah array menjadi variabel string
// - DataArray[].ToString()

// - toLowerCase()
// - Mengubah character di sebuah string menjadi huruf kecil
// - VarString.toLowerCase()

// - toUpperCase()
// - Mengubah character di sebuah string menjadi huruf kapital
// - VarString.toUpperCase()

// - includes()
// - Mencari karakter di dalam sebuah string dengan output true atau false
// - VarString.includes('character')

// - sort()
// - Mengurutkan isi sebuah array bedasarkan kode Ascii jika ingin mengurutkan bedasarkan alfabet maka harus menambahkan ((a, b)=>{return a - b })
// - DataArray.sort()

// - concat()
// - Menggabungkan dua variabel string menjadi satu string
// - VarString1.concat(VarString2)

// - Length()
// - Menghitung jumlah character pada sebuah string
// - VarString.length()

// - split()
// - Memisahkan sebuah string menjadi array, separator berguna untuk menjadi penentu pemisah karakter 
// - VarString.split('character')

// - join()
// - Menggabungkan array menjadi sebuah string, separator berguna untuk menjadi penentu pemisah kata
// - DataArray.join('Character')

// - pop()
// - Mengambil isi dari index terakhir sebuah array
// - DataArray.pop()

//contoh nomor1
// const var1 = "irvan"
// let var2 = "munawir"
// const arr1 = ["Irvan","Munawir"]
// const var3 = "irvan munawir"

// console.log(var2.concat(var1))
// console.log(var3.split(" "))
// console.log(arr1.join(" "))
// console.log(arr1.pop())

//nomor2
// const name = [
//     'Abigail', 'Alexandra', 'Alison',
//     'Amanda', 'Angela', 'Bella',
//     'Carol', 'Caroline', 'Carolyn',
//     'Deirdre', 'Diana', 'Elizabeth',
//     'Ella', 'Faith', 'Olivia', 'Penelope']


// function searchname(character, lim, callbacknama){
// const hasil = []
// const y = name.length
//     for(let i=0;i<y;i++){
//         let x = name[i].toLowerCase().includes(character)
//             if(x == true){
//                 hasil.push(name[i])  
//                 if(hasil.length==lim){ 
//                     break;
//                 }
//             }
//         x=""
//         }
//     callbacknama(hasil)
// }

// const nama = function(hasil) {
//     console.log(hasil)
// }

// searchname('an',4 , nama)

// searchname('an', 3, (hasil)=>{
//     console.log(hasil)
// })


//nomor3
// function nilai(awal,akhir,deret) {
//     const x = deret.length
    
//     if(x<5){
//         return "Jumlah angka dalam data Array harus lebih dari 5"
//     }else if(awal>akhir){
//         return "Nilai akhir harus lebih besar dari nilai awal"
//     }

//     const hasil=[]
    
//     for(let i=0;i<x;i++){
//         if(awal<deret[i]&&deret[i]<akhir){
//             hasil.push(deret[i])
//         }       
//     }
    
//     if(hasil.length==0){
//         return "Nilai tidak ditemukan"
//     }
    
//     return hasil.sort((a, b)=>{
//         return a - b
//     })
// }

// console.log(nilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])) 
// console.log(nilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])) 
// console.log(nilai(4, 17 , [2, 25, 4])) 
// console.log(nilai(5, 17 , [2, 25, 4, 1, 30, 18])) 

