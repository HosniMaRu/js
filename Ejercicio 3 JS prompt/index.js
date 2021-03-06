/**
 * * Comprueba que los valores sean correctos
 * @param {number} numero1 Valor recibido por prompt
 * @param {number} numero2 Valor recibido por prompt
 * @returns Devuelve la suma de los dos valores
 */
function operacion(numero1, numero2) {
	let checkNumero1 = checkNumber(numero1);
	let checkNumero2 = checkNumber(numero2);
	if (checkNumero1 == true && checkNumero2 == true) {
		return `${numero1} + ${numero2} = ${parseInt(numero1) + parseInt(numero2)}`;
	}
}
/**
 * * Comprueba que el valor sea tipo numero y no este vacio
 * @param {number} numero Valor recibido de operacion()
 * @returns Pinta el resultado y devuelve boolean
 */
function checkNumber(numero) {
	if (isNaN(numero) || numero == "") {
		document.write(numero + " is not a number <br/>");
		return false;
	} else {
		document.write(numero + " is a number <br/>");
		return true;
	}
}
console.assert(checkNumber("") == false, ""); //	Assert --> "" return false
console.assert(checkNumber("a") == false, ""); //	Assert --> "a" return false
console.assert(checkNumber(10) == true, ""); //	Assert --> 10 return true
console.assert(checkNumber("10") == true, ""); //	Assert --> "10" return true

console.assert(operacion(1, 2) == `1 + 2 = 3`, ""); //	Assert --> (1, 2) return `1 + 2 = 3`
console.assert(operacion("a", 2) == undefined, ""); //	Assert --> ("a", 2) return undefined
console.assert(operacion(2, "a") == undefined, ""); //	Assert --> (2, "a") return undefined
console.assert(operacion(2, "") == undefined, ""); //	Assert --> (2, "") return undefined
