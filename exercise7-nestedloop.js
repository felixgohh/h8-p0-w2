var rows1 = 5;

for (var i = 0; i < rows1; i++) {
    var hasil = '*'
    console.log(hasil);
}


for (var a = 0; a < rows1; a++) {
    var hasil = '';
    for (var b = 0; b < rows1; b++) {
        hasil += '*'
    } console.log(hasil);
}


for (var c = 0; c < rows1; c++) {
    var hasil = '*';
    for (var d = 0; d < c; d++) {
        hasil += '*'
    } console.log(hasil);
}

// console.log('segitiga terbalik');
// // var bintang = 3;

// function buatBintang(bintang) {
//     if (bintang % 2 === 0) {
//         for (var x = bintang; x > 0; x--) {
//             var result = ''
//             for (var y = x; y > 0; y--) {
//                 result += '#'
//             } console.log(result)

//         }
//     } else {
//         for (var x = bintang; x > 0; x--) {
//             var result = ''
//             for (var y = x; y > 0; y--) {
//                 result += '*'
//             }
//         } console.log(result)

//     }
//     return ''
// }

// console.log(buatBintang(4))