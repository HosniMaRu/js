/**
 * *	Valida si el valor existe y es un numero
 * @param {number} askNumber Valor recibido mediante prompt
 * @returns	Si askNumber es par o impar
 */
function oddPair(askNumber) {
	if (askNumber != "" && !isNaN(askNumber)) {
		if (askNumber % 2 == true) {
			return `${askNumber} es impar`;
		} else {
			return `${askNumber} es par`;
		}
	} else {
		return `${askNumber} no és un valor valido`;
	}
}
console.assert(oddPair("") == ` no és un valor valido`, ""); // Assert --> "" return ` no és un valor valido`
console.assert(oddPair("a") == `a no és un valor valido`, ""); // Assert --> "" return ` no és un valor valido`
console.assert(oddPair("1") == `1 es impar`, ""); // Assert --> "" return `1 es impar`
console.assert(oddPair(1) == `1 es impar`, ""); // Assert --> "" return `1 es impar`
console.assert(oddPair("2") == `2 es par`, ""); // Assert --> "" return `2 es par`
console.assert(oddPair(2) == `2 es par`, ""); // Assert --> "" return `2 es par`
