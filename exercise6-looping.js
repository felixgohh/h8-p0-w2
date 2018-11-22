// SOAL 1
console.log('LOOPING PERTAMA (WHILE)')
var i = 0;
while (i < 22) {
    console.log(+ i + ' - I love coding');
    i+=2;
}

console.log('LOOPING KEDUA (WHILE)')
var i = 20;
while (i > 0) {
    console.log(+ i + ' - I will become fullstack developer');
    i-=2;
}


// SOAL 2
console.log('LOOPING PERTAMA (FOR)')
for(var i = 0; i < 22; i += 2) {
    console.log(+ i + ' - I love coding');
  }

console.log('LOOPING KEDUA (FOR)')
for(var i = 20; i > 0; i -= 2) {
    console.log(+ i + ' - I will become fullstack developer');
  }


// SOAL 3
for(var a = 1; a<=100; a++){
    if(a%2===0){
        console.log(+ a + ' - BILANGAN GENAP')
    } else {
        console.log(+ a + ' - BILANGAN GANJIL')
    }
}


// SOAL 4
for(var b=1; b<=100; b+=2){
    if(b%3===0){
        console.log(b+' KELIPATAN 3')
    } else{
        console.log('')
    }
}

for(var c=1; c<=100; c+=5){
    if(c%6===0){
        console.log(c+' KELIPATAN 6')
    } else{
        console.log('')
    }
}

for(var d=1; d<=100; d+=9){
    if(d%10===0){
        console.log(d+' KELIPATAN 10')
    } else{
        console.log('')
    }
}
