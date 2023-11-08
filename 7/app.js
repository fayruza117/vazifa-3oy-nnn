let text = prompt("Matin kiriting:");
let char = prompt("Harf kiriting:");
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === char) {
    count += 1;
  }
}
alert('Siz kiritgan matnda "' + char + '" harfi ' + count + ' marta ishlatilgan');