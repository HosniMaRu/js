function ej10() {
	let text1 = prompt("Introduzca un texto.");
	let text2 = prompt("Introduzca un texto.");
	if (
		(typeof parseInt(text1) == "string" || isNaN(parseInt(text1))) &&
		(typeof parseInt(text2) == "string" || isNaN(parseInt(text2)))
	) {
		text1 = text1.toLowerCase();
		text2 = text2.toLowerCase();
		let concatText = `${text1}${text2}`;
		// Print text1, text2 and concat text.
		printParagraph("text1", text1, "Text 1: ");
		printParagraph("text2", text2, "Text 2: ");
		printParagraph("concatText", concatText, "Concat text: ");
		// Print text without space.
		nonSpaceText = eraseSpace(concatText);
		printParagraph("nonSpaceText", nonSpaceText, "Non space text: ");
		// Print text.length
		printParagraph("textLength", nonSpaceText.length, "Text length: ");
		// Print text in array
		let array = stringToArr(nonSpaceText);
		printParagraph("stringToArray", array, "String to array: ");
		// Print element and index of array
		printOneElementArr(array);
	} else {
		text1 =
			typeof parseInt(text1) == "string" || isNaN(parseInt(text1))
				? `El valor "${text1}" es correcto.`
				: `El valor "${text1}" no es un string.`;
		text2 =
			typeof parseInt(text2) == "string" || isNaN(parseInt(text2))
				? `El valor "${text2}" es correcto.`
				: `El valor "${text2}" no es un string.`;
		printParagraph("text1", text1);
		printParagraph("text2", text2);
	}
}
function eraseSpace(text) {
	return text.replaceAll(" ", "");
}
function stringToArr(text) {
	return text.split("");
}
function printOneElementArr(arr) {
	const divElement = document.getElementById("oneElementArr");
	const pElement = document.createElement("p");
	pElement.innerHTML = "Element and Index: ";
	arr.forEach((element, index) => {
		pElement.innerHTML += `${element}-${index} `;
	});
	divElement.appendChild(pElement);
}
function printParagraph(id, text, altText) {
	altText = !altText ? "" : altText;
	document.getElementById(id).innerHTML = altText + text;
}
