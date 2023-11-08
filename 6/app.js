let num = prompt("Son kiriting:");
let songi_yigindi = 0;
let t = true;

while (t) {
  num = String(num);
  if (num.length === 1) {
    t = false;
  } else {
    songi_yigindi = 0;

    for (let i = 0; i < num.length; i++) {
      songi_yigindi += +num[i];
    }
    num = songi_yigindi;
  }
}
alert(songi_yigindi);