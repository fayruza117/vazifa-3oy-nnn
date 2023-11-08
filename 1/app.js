let str = prompt("So'z kiriting");
let new_str = ""
for (let i = str.length-1; i >=0; i--) {
	new_str += str[i]
}
alert(new_str);