function ej6() {
	let askNumber = prompt("Introduzca un numero");
	const getElement = document.getElementById("result");
	if (!isNaN(askNumber) && askNumber < 0) {
		getElement.innerHTML = `El numero ${askNumber} es menor a 0`;
	} else if (!isNaN(askNumber) && askNumber > 99999999) {
		getElement.innerHTML = `El numero ${askNumber} es mayor a 99999999`;
	} else if (!isNaN(askNumber) && 0 < askNumber < 99999999) {
		getElement.innerHTML = `El numero ${askNumber} esta entre 0 y 99999999`;
	} else {
		getElement.innerHTML = `El numero ${askNumber} no és un valor numerico`;
	}
}
