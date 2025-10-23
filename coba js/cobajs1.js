const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama kamu: ", function(nama) {
rl.question("Masukkan umur kamu: ", function(umur) {
    console.log(`Halo nama saya ${nama}, umur saya ${umur} tahun.`);
    rl.close(); 
    });
});
