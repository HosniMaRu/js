const meses = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Setiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
];
/**
 * *	Iteracion sobre meses[]
 * *	Alert element y push a nuevo array
 * @returns
 * *	Devuelve nuevo array con los valores de meses[]
 */
function ej2() {
	let checkArray = [];
	for (let i = 0; i < meses.length; i++) {
		alert(meses[i]);
		checkArray.push(meses[i]);
	}
	return checkArray;
}

console.assert(ej2()[0] == "Enero", ""); //	Assert --> ej2()[0] return "Enero"
console.assert(ej2()[1] == "Febrero", ""); //	Assert --> ej2()[0] return "Febrero"
console.assert(ej2()[2] == "Marzo", ""); //	Assert --> ej2()[0] return "Marzo"
console.assert(ej2()[3] == "Abril", ""); //	Assert --> ej2()[0] return "Abril"
console.assert(ej2()[4] == "Mayo", ""); //	Assert --> ej2()[0] return "Mayo"
console.assert(ej2()[5] == "Junio", ""); //	Assert --> ej2()[0] return "Junio"
console.assert(ej2()[6] == "Julio", ""); //	Assert --> ej2()[0] return "Julio"
console.assert(ej2()[7] == "Agosto", ""); //	Assert --> ej2()[0] return "Agosto"
console.assert(ej2()[8] == "Setiembre", ""); //	Assert --> ej2()[0] return "Setiembre"
console.assert(ej2()[9] == "Octubre", ""); //	Assert --> ej2()[0] return "Octubre"
console.assert(ej2()[10] == "Noviembre", ""); //	Assert --> ej2()[0] return "Noviembre"
console.assert(ej2()[11] == "Diciembre", ""); //	Assert --> ej2()[0] return "Diciembre"
