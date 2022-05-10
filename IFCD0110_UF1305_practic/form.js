let checkNameSubmit = false;
let checLastNameSubmit = false;
let checkEmailSubmit = false;
let checkPassSubmit = false;
let checkDNISubmit = false;
let checkTextAreaSubmit = false;
function checkSubmitButton() {
	if (
		checkNameSubmit == true &&
		checLastNameSubmit == true &&
		checkEmailSubmit == true &&
		checkPassSubmit == true &&
		checkDNISubmit == true &&
		checkTextAreaSubmit == true
	) {
		document.getElementById("submitButton").disabled = false;
	}
}
function checkName(text) {
	text = text.trim();
	text = text.split(" ");
	if (text.length > 1) {
		if (text[0].length >= 2 && text[1].length >= 2) {
			console.log("correct");
			console.log(text.length);
			console.log(text);
			checkNameSubmit = true;
		}
	} else {
		if (text[0].length >= 2) {
			console.log("correct");
			console.log(text.length);
			console.log(text);
			checkNameSubmit = true;
		}
	}
}
function checLastName(text) {
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
		console.log("Apellidos correctos");
		checLastNameSubmit = true;
	}
}

function checkEmail(email) {
	let test = email.match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
	if (test != null) {
		console.log(email + " Is correct");
		checkEmailSubmit = true;
	}
}
const passElement = document.getElementById("pass");

function checkPass(text) {
	let checkUpperCase = false;
	let checkLowerCase = false;
	let checNumber = false;
	let checkSymbols = false;
	let checkUpperCaseCount = 0;
	let checNumberCount = 0;
	let checkSymbolsCount = 0;
	let checkLowerCaseCount = 0;
	text = text.split("");
	for (let i = 0; i < text.length; i++) {
		if (
			text[i] == "@" ||
			text[i] == "_" ||
			text[i] == "-" ||
			text[i] == "!" ||
			text[i] == "?" ||
			text[i] == "%" ||
			text[i] == "&" ||
			text[i] == "·" ||
			text[i] == "\\" ||
			text[i] == "/"
		) {
			checkSymbols = true;
			checkSymbolsCount++;
		} else if (text[i].toUpperCase() == text[i] && isNaN(text[i])) {
			checkUpperCase = true;
			checkUpperCaseCount++;
		} else if (text[i].toLowerCase() == text[i] && isNaN(text[i])) {
			checkLowerCase = true;
			checkLowerCaseCount++;
		} else if (!isNaN(text[i])) {
			checNumber = true;
			checNumberCount++;
		}
	}
	if (checkUpperCase && checNumber && checkSymbols) {
		console.log("correct");
		if (
			checkUpperCaseCount == 1 &&
			checkLowerCaseCount == 1 &&
			checNumberCount == 1 &&
			checkSymbolsCount == 1
		) {
			passElement.innerHTML = "poc segura";
		} else if (
			checkUpperCaseCount == 2 &&
			checkLowerCaseCount == 2 &&
			checNumberCount == 2 &&
			checkSymbolsCount == 2
		) {
			passElement.innerHTML = "segura";
		} else if (
			checkUpperCaseCount >= 3 &&
			checkLowerCaseCount >= 3 &&
			checNumberCount >= 3 &&
			checkSymbolsCount >= 3
		) {
			passElement.innerHTML = "molt segura";
		}
		checkPassSubmit = true;
	}
}
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
function checkDNI(value) {
	value = value.trim().replaceAll(" ", " ");
	if (value.length == 9) {
		let letter = value.charAt(8);
		let number = value.substring(0, 8);
		if (letras[number % 23] == letter) {
			console.log("correct");
			checkDNISubmit = true;
		}
	}
}
const countCharsElement = document.getElementById("form_count_chars_b");
function checkTextArea(text) {
	text = text.trim().replaceAll(" ", "").replaceAll("\n", "");
	console.log(text);
	countCharsElement.innerHTML = text.length;
	if (text.length > 5 && text.length < 650) {
		countCharsElement.style.color = "green";
		checkTextAreaSubmit = true;
	} else {
		countCharsElement.style.color = "red";
	}
}
