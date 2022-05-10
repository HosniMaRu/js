document.getElementById("submit").disabled = true;
let inputFormEmpty = true;
const inputFormula = document.getElementById("inputFormula");
const printFormula = document.getElementById("printFormula");
const inputFullName = document.getElementById("fullName");
let formValidation = {
	field: [
		{ name: "calcula", validation: false },
		{ name: "checkName", validation: false },
		{ name: "replaceEntities", validation: false },
		{ name: "replaceHtmlTags", validation: false },
		{ name: "checkEmail", validation: false },
	],
	validation(checkEmail, bool) {
		let count = 0;
		for (let i = 0; i < this.field.length; i++) {
			if (checkEmail == this.field[i].name) {
				this.field[i].validation = bool;
			}
			if (this.field[i].validation == true) {
				count += 1;
			}
			if (count == this.field.length) {
				document.getElementById("submit").disabled = false;
			} else {
				document.getElementById("submit").disabled = true;
			}
		}
	},
};
/**
 * * Recoge los datos del input y realiza el calculo correspondiente.
 * * Si eval no puede calcular devuelve el valor de entrada, sino el resultado.
 * @param {*} inputOpera Valor del input inputFormula
 */
function calcula(inputOpera) {
	try {
		printFormula.value = eval(inputOpera);
		if (printFormula.value > 0) {
			printFormula.style.color = "green";
			formValidation.validation("calcula", true);
		} else {
			printFormula.style.color = "red";
			formValidation.validation("calcula", true);
		}
	} catch (err) {
		printFormula.value = "";
		formValidation.validation("calcula", false);
	}
	if (inputOpera == "") {
		printFormula.value = "";
	}
}
const inputNombreYApellidos = formulario.fullName;

/**
 * *	Split el texto por larabras.
 * *	Si hay doble espacio o mas lo substituye por un simple espacio
 * *	Pinta color verde si es correcto y si es incorrecto
 * @param {*} text Valor del input form full name
 */
function checkName(text) {
	let textSplit = text.trim().replace(/  +/g, " ").split(" ");
	if (
		textSplit.length == 3 &&
		textSplit[0].length >= 3 &&
		textSplit[1].length >= 3 &&
		textSplit[2].length >= 3 &&
		textSplit[1] != textSplit[2]
	) {
		inputNombreYApellidos.style.backgroundColor = "green";
		formValidation.validation("checkName", true);
	} else {
		inputNombreYApellidos.style.backgroundColor = "red";
		formValidation.validation("checkName", false);
	}
}
const printReplaceEntities = formulario.printReplaceEntities;
const printReplaceHtmlTags = formulario.printReplaceHtmlTags;
/**
 * *	Sustituye caracteres
 * @param {*} text Valor de entrada input replace
 */
function replaceEntities(text) {
	text = text
		.replaceAll("&lt;", "<")
		.replaceAll("&gt;", ">")
		.replaceAll("&quot;", '"')
		.replaceAll("&iquest;", "¿");

	printReplaceEntities.value = text;
	formValidation.validation("replaceEntities", true);
}
/**
 * *	Sustituye caracteres
 * @param {*} text Valor de entrada input replace
 */
function replaceHtmlTags(text) {
	text = text
		.replaceAll("&lt;p&gt;", "")
		.replaceAll("&lt;/p&gt;", "")
		.replaceAll("&lt;b&gt;", "")
		.replaceAll("&lt;/b&gt;", "")
		.replaceAll("&quot;", '"')
		.replaceAll("&iquest;", "¿");

	printReplaceHtmlTags.value = text;
	formValidation.validation("replaceHtmlTags", true);
}

function checkEmail(email) {
	let splitEmail = email.split("@");
	if (
		splitEmail[1] == "gmail.com" ||
		splitEmail[1] == "hotmail.es" ||
		splitEmail[1] == "hotmail.com"
	) {
		formulario.printCheckEmail.value = email;
		formulario.printCheckEmail.style.backgroundColor = "green";
		formValidation.validation("checkEmail", true);
	} else {
		formulario.printCheckEmail.value = email;
		formulario.printCheckEmail.style.backgroundColor = "red";
		formValidation.validation("checkEmail", false);
	}
}
