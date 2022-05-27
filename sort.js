const array = [];
for (let i = 0; i < 20; i++) {
	let number = Math.floor(Math.random() * 100) + 1;
	let randomPositive = Math.floor(Math.random() * 10 + 1);
	if (randomPositive % 2 == true) {
		number * -1;
	}
	array.push(number);
}
console.log(array);
function ordenar(array) {
	let copyArray = [].concat(array);
	let arraySalida = [];
	while (copyArray.length > 1) {
		let temporal = copyArray[0];
		for (let i = 0; i < copyArray.length; i++) {
			if (temporal > copyArray[i]) {
				temporal = copyArray[i];
			}
		}
		arraySalida.push(temporal);
		copyArray.splice(copyArray.indexOf(temporal), 1);
		// break;
	}
	arraySalida.push(copyArray[0]);
	return arraySalida;
}
console.log(ordenar(array));

const arrayObj = [
	{ nombre: "Juan", edad: 20 },
	{ nombre: "Montse", edad: 32 },
	{ nombre: "Maria", edad: 30 },
];
console.log(arrayObj);
let sorted = arrayObj.sort((a, b) => {
	debugger;
	if (a.edad < b.edad) {
		return -1;
	}
	if (a.edad > b.edad) {
		return 1;
	}
	return 0;
});
console.log(sorted);
