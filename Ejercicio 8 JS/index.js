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
