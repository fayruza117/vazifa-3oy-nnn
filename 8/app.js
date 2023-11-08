let word = prompt("So'z kriting:");
let soz_teskarisi = "";

for (let i = word.length - 1; i >= 0; i--) {
  soz_teskarisi += word[i];
}

if (word === soz_teskarisi) {
	alert("True.  Bu palindrom so'z");
} else {
	alert("False. Bu palindrom so'z EMAS");
}