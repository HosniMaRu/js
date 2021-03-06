/**
 * @param p_askNumber Valor recibido por prompt
 * * 	Comprueba si es un numero
 * @returns
 * *	False si no es un numero
 * *	Llama a isGreaterThan(p_asknumber)
 **/
function promptIsNumber(p_askNumber) {
	if (p_askNumber == "" || isNaN(p_askNumber)) {
		return false;
	} else {
		return isGreaterThan(p_askNumber);
	}
}
/**
 * @param {p_askNumber} number Valor recibido de promptIsNumber()
 * * 	Comprueba si el numero es menor a 10 y asigna el texto.
 * @returns
 * *	El valor y el texto seleccionado
 **/
function isGreaterThan(number) {
	let text_condition = `Es igual o mayor a ${10}`;
	if (number < 10) {
		text_condition = `Es menor a ${10}`;
	}
	return `${number} ${text_condition}`;
}

console.assert(promptIsNumber("") == false, ""); //	Assert --> "" return false
console.assert(promptIsNumber("a") == false, ""); //	Assert --> "a" return false
console.assert(promptIsNumber(10) == "10 Es igual o mayor a 10", ""); //	Assert --> 10 return "10 Es igual o mayor a 10"
console.assert(promptIsNumber("10") == "10 Es igual o mayor a 10", ""); //	Assert --> "10" return "10 Es igual o mayor a 10"

console.assert(isGreaterThan(10) == "10 Es igual o mayor a 10", ""); //	Assert --> 10 return "10 Es igual o mayor a 10"
console.assert(isGreaterThan(11) == "11 Es igual o mayor a 10", ""); //	Assert --> 11 return "11 Es igual o mayor a 10"
console.assert(isGreaterThan(9) == "9 Es menor a 10", ""); //	Assert --> 9 return "9 Es menor a 10"
