/**
 * *	Concatena los dos textos.
 * *	Lo transforma a lowerCase.
 * *	Reemplaza " " por "".
 * *	Calcula el length del texto.
 * *	Split en array.y pinta elemento con indice.
 * @param {string} text1 Valor recibido de checkPropmpt()
 * @param {string} text2 Valor recibido de checkPropmpt()
 * @returns
 * *	Devuelve la cantidad de caracteres del string y cada elemento con su indice
 * *	Alert -> Los datos introducidos no son correctos
 */
function textMethods(text1, text2) {
	if (text1 != undefined && text2 != undefined) {
		let concatText = `${text1};${text1}`;
		concatText = concatText.toLocaleLowerCase();

		let replaceText = concatText.replaceAll(" ", "");

		let textLength = replaceText.length;

		let splitText = replaceText.split("");
		let arrayText = [];
		splitText.forEach((element, index) => {
			arrayText.push(`Element text = ${index} - ${element}</br>`);
		});
		printValue(`Length text = ${textLength}</br>`);
		printValue(arrayText);
		console.log(`Length: ${textLength}</br>${arrayText}`);
		return `Length: ${textLength}</br>${arrayText}`;
	} else {
		alert("Los datos introducidos no son correctos");
	}
}
function checkPropmpt(text) {
	if (text != "" && isNaN(text)) {
		return text;
	}
}
function printValue(value) {
	document.getElementById("result").innerHTML += value;
}

console.assert(checkPropmpt(2) == undefined, ""); // Assert --> "" return undefined
console.assert(checkPropmpt("2") == undefined, ""); // Assert --> "" return undefined
console.assert(checkPropmpt("2asd") == "2asd", ""); // Assert --> "" return "2asd"
console.assert(checkPropmpt("asd2") == "asd2", ""); // Assert --> "" return "asd2"
console.assert(checkPropmpt("asd") == "asd", ""); // Assert --> "" return"asd"
console.assert(checkPropmpt("ASD") == "ASD", ""); // Assert --> "" return "ASD"

console.assert(
	textMethods(checkPropmpt(""), checkPropmpt("")) == undefined,
	""
); // Assert --> "", "" return undefined
console.assert(
	textMethods(checkPropmpt("aa"), checkPropmpt("")) == undefined,
	""
); // Assert --> "aa", "" return undefined
console.assert(
	textMethods(checkPropmpt(""), checkPropmpt("aa")) == undefined,
	""
); // Assert --> "", "aa" return undefined
console.assert(
	textMethods(checkPropmpt(11), checkPropmpt(22)) == undefined,
	""
); // Assert --> 11, 22 return undefined
console.assert(
	textMethods(checkPropmpt("11"), checkPropmpt("22")) == undefined,
	""
); // Assert --> "11", "22" return undefined
console.assert(
	textMethods(checkPropmpt("11"), checkPropmpt(22)) == undefined,
	""
); // Assert --> "11", 22 return undefined
console.assert(
	textMethods(checkPropmpt(11), checkPropmpt("22")) == undefined,
	""
); // Assert --> 11, "22" return undefined
console.assert(
	textMethods(checkPropmpt(11), checkPropmpt("aa")) == undefined,
	""
); // Assert --> 11, "aa" return undefined
console.assert(
	textMethods(checkPropmpt("aa"), checkPropmpt(11)) == undefined,
	""
); // Assert --> "aa", 11 return undefined
console.assert(
	textMethods(checkPropmpt("aa"), checkPropmpt("bb")) ==
		"Length: 5</br>Element text = 0 - a</br>,Element text = 1 - a</br>,Element text = 2 - ;</br>,Element text = 3 - a</br>,Element text = 4 - a</br>",
	""
); // Assert --> "aa", "bb" return "Length: 5</br>Element text = 0 - a</br>,Element text = 1 - a</br>,Element text = 2 - ;</br>,Element text = 3 - a</br>,Element text = 4 - a</br>"
console.assert(
	textMethods(checkPropmpt("a a"), checkPropmpt("b b")) ==
		"Length: 5</br>Element text = 0 - a</br>,Element text = 1 - a</br>,Element text = 2 - ;</br>,Element text = 3 - a</br>,Element text = 4 - a</br>",
	""
); // Assert --> "a a", "b b" return "Length: 5</br>Element text = 0 - a</br>,Element text = 1 - a</br>,Element text = 2 - ;</br>,Element text = 3 - a</br>,Element text = 4 - a</br>",Element text = 4 - a</br>"
