let num = +prompt("Son kiriritng");
for (let i = 3; i < num; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
			count = count + 1;
			console.log(count)
    }
  }
	if (count > 2) {
		console.log(i + " -> murakkab");
	} else {
		console.log(i + " -> tub");
	}
	count = 0;
}