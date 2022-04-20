function askNumber() {
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
