let foydalanuvchiKiritgan = prompt("Iltimos, biror son  kiriting:");
if (typeof foydalanuvchiKiritgan === "string") {
    alert(`${foydalanuvchiKiritgan} Siz kiritgan  number typiga tegishli.`);
} else {
    alert("Siz kiritgan sonumber typiga tegishli");
}
let foydalanuvchi = prompt("Iltimos, biror so'z kiriting:");

if (typeof foydalanuvchi === "string") {
    alert(`Siz kiritgan "${foydalanuvchi}" string typiga tegishli.`);
} else {
    alert("Siz string tipida qiymat kiritmadingiz.");
}

// Foydalanuvchidan input olish
let userInput = prompt("Yozing True yoki False:");

// If-else shartlari yordamida inputni tekshirish
if (userInput === "True" || userInput === "False") {
    alert("Bu boolean turiga tegishli.");
} else {
    alert("Bu boolean turiga tegishli emas.");
}