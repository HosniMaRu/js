function ej9() {
	alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
	alert(info("En un lugar de la mancha..."));
}
/**
 * *	Comprueba que el valor no este vacio y sea texto.
 * *	Compara el valor de entrada si esta en mayusculas, minusculas o mezcla
 * @param {string} text Valor de entrada
 * @returns
 * *	Devuelve un string dependiendo si el texto es upperCase, lowerCase o mezcla
 */
function info(text) {
	if (text !== "" && isNaN(text)) {
		if (text === text.toUpperCase()) {
			return `El texto "${text}" esta escrito en mayusculs.`;
		} else if (text === text.toLowerCase()) {
			return `El texto "${text}" esta escrito en minusculas.`;
		} else {
			return `El texto "${text}" esta escrito en mayusculas y minusculas.`;
		}
	}
}

console.assert(info("") == undefined, ""); //	Assert --> "" return undefined.
console.assert(info("1") == undefined, ""); //	Assert --> "1" return undefined.
console.assert(info(1) == undefined, ""); //	Assert --> 1 return undefined.
console.assert(info(-1) == undefined, ""); //	Assert --> -1 return undefined.
console.assert(info("aa") == `El texto "aa" esta escrito en minusculas.`, ""); //	Assert --> "aa" return `El texto "aa" esta escrito en minusculas.`.
console.assert(
	info("Aa") == `El texto "Aa" esta escrito en mayusculas y minusculas.`,
	""
); //	Assert --> "aa" return `El texto "Aa" esta escrito en mayusculas y minusculas.`.
console.assert(
	info("aA") == `El texto "aA" esta escrito en mayusculas y minusculas.`,
	""
); //	Assert --> "aa" return `El texto "aA" esta escrito en mayusculas y minusculas.`.
console.assert(info("AA") == `El texto "AA" esta escrito en mayusculs.`, ""); //	Assert --> "aa" return `El texto "AA" esta escrito en mayusculs.`.
