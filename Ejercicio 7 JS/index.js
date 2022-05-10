const letras = [
	"T",
	"R",
	"W",
	"A",
	"G",
	"M",
	"Y",
	"F",
	"P",
	"D",
	"X",
	"B",
	"N",
	"J",
	"Z",
	"S",
	"Q",
	"V",
	"H",
	"L",
	"C",
	"K",
	"E",
	"T",
];
/**
 * @param {number} numero
 * *	Valida si numero existe y es valor numerico.
 * *	Valida si numero esta entre 0 y 99999999.
 * @returns
 * *	Devuelve numero y letra correspondiente
 */
function askDNI(numero) {
	if (numero != "" && !isNaN(numero)) {
		if (0 < numero && numero < 99999999) {
			document.getElementById("number").innerHTML = `Numero: ${numero}`;
			document.getElementById("word").innerHTML = `Letra: ${
				letras[numero % 23]
			}`;
			return `Numero: ${numero} - Letra: ${letras[numero % 23]}`;
		}
	}
}
console.assert(askDNI("") == undefined, ""); //	Assert --> "" return undefined.
console.assert(askDNI("a") == undefined, ""); //	Assert --> "" return undefined.
console.assert(askDNI(-1) == undefined, ""); //	Assert --> "" return undefined.
console.assert(askDNI("-1") == undefined, ""); //	Assert --> "" return undefined.
console.assert(askDNI("999999999") == undefined, ""); //	Assert --> "" return undefined.
console.assert(askDNI(999999999) == undefined, ""); //	Assert --> "" return undefined.
console.assert(askDNI("1") == `Numero: 1 - Letra: ${letras["1" % 23]}`, ""); //	Assert --> "" return `Numero: 1 - Letra: ${letras[numero % 23]}`.
console.assert(askDNI("1") == `Numero: 1 - Letra: R`, ""); //	Assert --> "" return `Numero: 1 - Letra: R}`.
console.assert(askDNI(2) == `Numero: 2 - Letra: ${letras[2 % 23]}`, ""); //	Assert --> "" return `Numero: 2 - Letra: ${letras[2 % 23]}`.
console.assert(askDNI(2) == `Numero: 2 - Letra: W`, ""); //	Assert --> "" return `Numero: 2 - Letra: W`.
