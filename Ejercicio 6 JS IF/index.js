/**
 * *	Comprueba si el valor existe y es un numero
 * *	Comprueba si el valor esta mayor a 99999999
 * *	Comprueba si el valor esta menor a 0
 * @param {number} askNumber Valor recibido por prompt
 * @returns
 * *	Devuelve numero.
 * *	Devuelve `${askNumber} no és un valor valido
 */
function checkNumber(askNumber) {
	if (askNumber !== "" && !isNaN(askNumber)) {
		if (askNumber > 99999999 || askNumber < 0) {
			return askNumber;
		}
	} else {
		return `${askNumber} no és un valor valido`;
	}
}
console.assert(checkNumber("") == ` no és un valor valido`, ""); //	Assert --> "" returns ` no és un valor valido`
console.assert(checkNumber("a") == `a no és un valor valido`, ""); //	Assert --> "a" returns `a no és un valor valido`
console.assert(checkNumber(-1) == -1, ""); //	Assert --> -1 returns -1
console.assert(checkNumber(0) == undefined, ""); //	Assert --> 0 returns undefined
console.assert(checkNumber(1) == undefined, ""); //	Assert --> 1 returns undefined
console.assert(checkNumber(99999998) == undefined, ""); //	Assert --> 99999998 returns undefined
console.assert(checkNumber(99999999) == undefined, ""); //	Assert --> 99999999 returns undefined
console.assert(checkNumber(100000000) == 100000000, ""); //	Assert --> 100000000 returns 100000000
