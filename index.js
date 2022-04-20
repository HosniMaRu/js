function operacion() {
	let numero = prompt("Introduce un número");
	let numero2 = prompt("Introduce un número");
	if (isNaN(numero) || isNaN(numero2)) {
		if (isNaN(numero)) {
			const notNumber = document.getElementById("numero");
			notNumber.innerHTML = `${numero} is not a number <br/>`;
		}
		if (isNaN(numero2)) {
			const notNumber = document.getElementById("numero2");
			notNumber.innerHTML = `${numero} is not a number <br/>`;
		}
	} else {
		const numeroElement = document.getElementById("numero");
		numeroElement.innerHTML = numero + " is a number <br/>";
		const numero2Element = document.getElementById("numero2");
		numero2Element.innerHTML = numero2 + " is a number <br/>";
		const resultElement = document.getElementById("result");
		resultElement.innerHTML = `${numero} + ${numero2} = ${numero + numero2}`;
	}
}
function printUpperCase() {
	let question = prompt("Write somthing in lowercase");
	question = question.toUpperCase();
	const printElement = document.getElementById("printUpperCase");
	printElement.innerHTML = question;
}
