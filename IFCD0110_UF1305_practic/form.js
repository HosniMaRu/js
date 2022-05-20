let checkNameSubmit = false,
	checLastNameSubmit = false,
	checkEmailSubmit = false,
	checkPassSubmit = false,
	checkDNISubmit = false,
	checkTextAreaSubmit = false,
	checkCitiesSubmit = false,
	checkConditionsSubmit = false;
const mayuscula = /[A-Z]/;
const minuscula = /[a-z]/;
const numero = /[0-9]/;
const caracter = /[!@#\$%\^\&*\)\(+=._-]/;
const nameErrorExplainElement = document.getElementById("nameErrorExplain");
const lNameErrorExplainElement = document.getElementById("lNameErrorExplain");
const emailErrorExplainElement = document.getElementById("emailErrorExplain");
const passErrorExplainElement = document.getElementById("passErrorExplain");
const dniErrorExplainElement = document.getElementById("dniErrorExplain");
const countCharsElement = document.getElementById("form_count_chars_b");
const totalPriceElement = document.getElementById("totalPrice");
const submitButtonElement = document.getElementById("submitButton");
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

function cambiarCorrectoIncorrecto(campo, camporErrorText, estado) {
	switch (estado) {
		case true:
			campo.classList.remove("corregir");
			campo.classList.add("correcte");
			camporErrorText.style.visibility = "hidden";
			break;
		case false:
			campo.classList.remove("correcte");
			campo.classList.add("corregir");
			camporErrorText.style.visibility = "visible";
			break;
		case "empty":
			campo.classList.remove("corregir");
			campo.classList.remove("correcte");
			camporErrorText.style.visibility = "hidden";
			estado = false;
			break;
		default:
			break;
	}
	return estado;
}
function checkSubmitButton() {
	if (
		checkNameSubmit &&
		checLastNameSubmit &&
		checkEmailSubmit &&
		checkPassSubmit &&
		checkDNISubmit &&
		checkTextAreaSubmit &&
		checkCitiesSubmit &&
		checkConditionsSubmit
	) {
		submitButtonElement.disabled = false;
		submitButtonElement.style.backgroundColor = "#04aa6d";
	} else {
		submitButtonElement.disabled = true;
		submitButtonElement.style.backgroundColor = "#dd0606";
	}
}
function checkName(text, fNameElement) {
	let warningText = "El nom compost ha de tenir minim 2 lletres cada un.",
		warningText2 = "El nom ha de tenir minim 2 lletres.";
	text = text.trim().replace(/  +/g, " ");
	text = text.split(" ");
	if (text.length > 1) {
		if (text[0].length >= 2 && text[1].length >= 2) {
			checkNameSubmit = cambiarCorrectoIncorrecto(fNameElement, nameErrorExplainElement, true);
		} else {
			checkNameSubmit = cambiarCorrectoIncorrecto(fNameElement, nameErrorExplainElement, false);
			nameErrorExplainElement.innerHTML = warningText;
		}
	} else {
		if (text[0].length >= 2) {
			checkNameSubmit = cambiarCorrectoIncorrecto(fNameElement, nameErrorExplainElement, true);
		} else {
			checkNameSubmit = cambiarCorrectoIncorrecto(fNameElement, nameErrorExplainElement, false);
			nameErrorExplainElement.innerHTML = warningText2;
		}
	}
	if (text == "") {
		checkNameSubmit = cambiarCorrectoIncorrecto(fNameElement, nameErrorExplainElement, "empty");
	}
	checkSubmitButton();
}

function checLastName(text, lNameElement) {
	let warningText = "Ha de tenir 2 paraules amb 3 lletres";
	let count = 0;
	text = text.trim();
	text = text.split(" ");
	if (text.length > 1) {
		for (let i = 0; i < text.length; i++) {
			if (text[i].length >= 3) {
				count++;
			}
		}
	}
	if (count == text.length) {
		checLastNameSubmit = cambiarCorrectoIncorrecto(lNameElement, lNameErrorExplainElement, true);
	} else {
		checLastNameSubmit = cambiarCorrectoIncorrecto(lNameElement, lNameErrorExplainElement, false);
		lNameErrorExplainElement.innerHTML = warningText;
	}
	if (text == "") {
		checLastNameSubmit = cambiarCorrectoIncorrecto(lNameElement, lNameErrorExplainElement, "empty");
	}
	checkSubmitButton();
}

function checkEmail(email, emailElement) {
	let warningText = "Introdueixi un email";
	let test = email.match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
	if (test != null) {
		checkEmailSubmit = cambiarCorrectoIncorrecto(emailElement, emailErrorExplainElement, true);
	} else {
		checkEmailSubmit = cambiarCorrectoIncorrecto(emailElement, emailErrorExplainElement, false);
		emailErrorExplainElement.innerHTML = warningText;
	}
	if (email == "") {
		checkEmailSubmit = cambiarCorrectoIncorrecto(emailElement, emailErrorExplainElement, "empty");
	}
	checkSubmitButton();
}

function printPassErrorExplain(errorExplainElement, text, color) {
	errorExplainElement.innerHTML = text;
	errorExplainElement.style.color = color;
	errorExplainElement.style.visibility = "visible";
}
function checkPass(text, passElement) {
	let checkUpperCaseCount = 0,
		checNumberCount = 0,
		checkSymbolsCount = 0,
		checkLowerCaseCount = 0;
	text = text.split("");
	for (let i = 0; i < text.length; i++) {
		if (caracter.test(text[i])) {
			checkSymbolsCount++;
		} else if (mayuscula.test(text[i])) {
			checkUpperCaseCount++;
		} else if (minuscula.test(text[i])) {
			checkLowerCaseCount++;
		} else if (numero.test(text[i])) {
			checNumberCount++;
		}
	}
	if (
		checkUpperCaseCount >= 3 &&
		checkLowerCaseCount >= 3 &&
		checNumberCount >= 3 &&
		checkSymbolsCount >= 3
	) {
		checkPassSubmit = cambiarCorrectoIncorrecto(passElement, passErrorExplainElement, true);
		printPassErrorExplain(passErrorExplainElement, "molt segura", "green", "visible");
	} else if (
		checkUpperCaseCount >= 2 &&
		checkLowerCaseCount >= 2 &&
		checNumberCount >= 2 &&
		checkSymbolsCount >= 2
	) {
		checkPassSubmit = cambiarCorrectoIncorrecto(passElement, passErrorExplainElement, true);
		printPassErrorExplain(passErrorExplainElement, "segura", "orange");
	} else if (
		checkUpperCaseCount >= 1 &&
		checkLowerCaseCount >= 1 &&
		checNumberCount >= 1 &&
		checkSymbolsCount >= 1
	) {
		checkPassSubmit = cambiarCorrectoIncorrecto(passElement, passErrorExplainElement, true);
		printPassErrorExplain(passErrorExplainElement, "poc segura", "red");
	} else {
		if (text == "") {
			checkPassSubmit = cambiarCorrectoIncorrecto(passElement, passErrorExplainElement, "empty");
		} else {
			checkPassSubmit = cambiarCorrectoIncorrecto(passElement, passErrorExplainElement, false);
			printPassErrorExplain(passErrorExplainElement, "res segur", "red");
		}
	}

	checkSubmitButton();
}

function checkDNI(value, dniElement) {
	let warningText = "El número no coincideix amb la lletra",
		warningText2 = "Introduieix un DNI";
	value = value.trim();
	if (value.length == 9) {
		let word = value.charAt(value.length - 1).toUpperCase();
		let number = value.substring(0, value.length - 1);
		if (letras[number % 23] == word) {
			checkDNISubmit = cambiarCorrectoIncorrecto(dniElement, dniErrorExplainElement, true);
		} else {
			checkDNISubmit = cambiarCorrectoIncorrecto(dniElement, dniErrorExplainElement, false);
			dniErrorExplainElement.innerHTML = warningText;
		}
	} else {
		checkDNISubmit = cambiarCorrectoIncorrecto(
			dniElement,
			dniErrorExplainElement,
			false,
			checkDNISubmit
		);
		dniErrorExplainElement.innerHTML = warningText2;
	}
	if (value == "") {
		checkDNISubmit = cambiarCorrectoIncorrecto(dniElement, dniErrorExplainElement, "empty");
	}
	checkSubmitButton();
}
function checkTextArea(text) {
	text = text.trim().replaceAll(" ", "").replaceAll("\n", "");
	countCharsElement.innerHTML = text.length;
	if (text.length > 5 && text.length < 650) {
		countCharsElement.style.color = "green";
		checkTextAreaSubmit = true;
	} else {
		countCharsElement.style.color = "red";
		checkTextAreaSubmit = false;
	}
	checkSubmitButton();
}
function checkCities(price, checked) {
	price = parseFloat(price);
	if (checked == true) {
		totalPriceElement.innerHTML = parseFloat(totalPriceElement.innerHTML) + price;
	} else {
		totalPriceElement.innerHTML = parseFloat(totalPriceElement.innerHTML) - price;
	}
	if (totalPriceElement.innerHTML > 0) {
		checkCitiesSubmit = true;
	} else {
		checkCitiesSubmit = false;
	}
	checkSubmitButton();
}

function checkConditions(checked) {
	if (checked == false) {
		alert("S'han acceptat els acords i condicións");
		checkConditionsSubmit = true;
	} else {
		checkConditionsSubmit = false;
	}
	checkSubmitButton();
}
