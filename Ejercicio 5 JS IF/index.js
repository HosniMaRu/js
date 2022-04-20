function ej5() {
	let askNumber = prompt("Introduzca un numero");
	const getElement = document.getElementById("result");
	if (!isNaN(askNumber)) {
		if (askNumber < 10) {
			getElement.innerHTML = `El numero ${askNumber} es menor a 10`;
		} else if (askNumber > 10) {
			getElement.innerHTML = `El numero ${askNumber} es mayor a 10`;
		} else {
			getElement.innerHTML = `El numero ${askNumber} es igual a 10`;
		}
	} else {
		getElement.innerHTML = `El valor ${askNumber} no es un valor numerico`;
	}
}
function ej6() {
	let askNumber = prompt("Introduzca un numero");
	const getElement = document.getElementById("result");
	if (!isNaN(askNumber) && askNumber < 0) {
		getElement.innerHTML = `El numero ${askNumber} es menor a 0`;
	} else if (!isNaN(askNumber) && askNumber > 99999999) {
		getElement.innerHTML = `El numero ${askNumber} es mayor a 99999999`;
	}
}
function ej8() {
	let askNumber = prompt("Introduzca un numero");
	const getElement = document.getElementById("result");
	if (!isNaN(askNumber)) {
		if (askNumber % 2 == true) {
			getElement.innerHTML = `El numero ${askNumber} es impar`;
		} else {
			getElement.innerHTML = `El numero ${askNumber} es par`;
		}
	}
}
