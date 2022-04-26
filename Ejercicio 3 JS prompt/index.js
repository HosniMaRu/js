function operacion() {
	let numero = prompt("Introduce un número");
	let numero2 = prompt("Introduce un número");
	if (isNaN(numero) || isNaN(numero2)) {
		if (isNaN(numero)) {
			document.write(numero + " is not a number <br/>");
		}
		if (isNaN(numero2)) {
			document.write(numero2 + " is not a number <br/>");
		}
	} else {
		document.write(numero + " is a number <br/>");
		document.write(numero2 + " is a number <br/>");
		document.write(`${numero} + ${numero2} = ${numero + numero2}`);
	}
}
