// SOAL 1
function shoutOut(){
    return 'Hello World'
}

console.log(shoutOut())

// SOAL 2
function calculateMultiply(a,b){
    return a*b
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian);

// SOAL 3
function processSentence(c,d,e,f){
    return ('Nama saya '+c+', umur saya '+d+', alamat saya di '+e+', dan saya punya hobi yaitu '+f)
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";


var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);