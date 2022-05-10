/**
 * @param  p_question Valor recibido por prompt
 * *	Comprueba que el valor sea string y no este vacio
 * *	Transforma el valor a upperCase
 * *	Pinta el valor
 */
function promptToUpperCase(p_question) {
	if (p_question != "" && isNaN(p_question)) {
		p_question = p_question.toUpperCase();
		document.getElementById("printUpperCase").innerHTML += `${p_question}</br>`;
		return p_question;
	}
}

console.assert(promptToUpperCase("") == undefined, ""); //	Assert --> "" returns undefined
console.assert(promptToUpperCase("a") == "A", ""); //	Assert --> "a" returns "A"
console.assert(promptToUpperCase("abc") == "ABC", ""); //	Assert --> "abc" returns "ABC"
console.assert(promptToUpperCase("a12b") == "A12B", ""); //	Assert --> "a12b" returns "A12B"
console.assert(promptToUpperCase("1ab2") == "1AB2", ""); //	Assert --> "1ab2" returns "1AB2"
console.assert(promptToUpperCase("AbC") == "ABC", ""); //	Assert --> "AbC" returns "ABC"
console.assert(promptToUpperCase("ABC") == "ABC", ""); //	Assert --> "ABC" returns "ABC"
console.assert(promptToUpperCase(-4) == undefined, ""); //	Assert --> -4 returns undefined
console.assert(promptToUpperCase(10) == undefined, ""); //	Assert --> 10 returns undefined
