function ej12() {
	let arrRequest = numberRequest();
	let numReversed = reverseNum(arrRequest);
	let numConcated = concatNum(numReversed);
	let operationArray = operation(numConcated);
	fixFloat(operationArray);
}
function numberRequest() {
	let arrayNum = [];
	const title = "Numero solicitado";
	printH1("numeroSolicitado", title);
	for (let i = 0; i < 5; i++) {
		let requestedNumber;
		let promtText = "Introduce un numero entero mayor a 1000";
		let promtText2 = `El numero "${requestedNumber}" no cumple las condiciones necesarias.\n\nIntroduce un numero entero mayor a 1000`;
		do {
			requestedNumber = prompt(promtText);
			if (requestedNumber == null) {
				break;
			}
			promtText = promtText2;
		} while (
			requestedNumber < 1000 ||
			isNaN(requestedNumber) ||
			Number.isInteger(requestedNumber)
		);

		if (requestedNumber == null) {
			document.getElementById("cancel").innerHTML = "Finish";
			break;
		}
		arrayNum.push(requestedNumber);
		printLI("numeroSolicitado", arrayNum);
	}
	return arrayNum;
}
function reverseNum(array) {
	let reverseArray = [];
	const title = "Numero invertido";
	printH1("reverseNumber", title);
	array.forEach((element, index) => {
		let textInput = `Numero ${index} invertido: ${element}`;
		element.split("").reverse().join("");
		reverseArray.push(element.split("").reverse().join(""));
		printLI("reverseNumber", reverseArray, textInput);
	});
	return reverseArray;
}

function concatNum(array) {
	let concatArray = [];
	let y = 0;
	let textInput;
	const title = "Numero concatenado";
	printH1("concatNumber", title);

	for (let i = 0; i < array.length; i += 2) {
		if (array[i + 1] == undefined) {
			concatArray.push(array[i]);
		} else {
			concatArray.push(`${array[i]}.${array[i + 1]}`);
		}

		if (i == array.length - 1 && array.length % 2) {
			textInput = `Numero ${i} no concatenado: ${concatArray[y]}`;
			printLI("concatNumber", concatArray, textInput);
		} else {
			textInput = `Numeros ${i} y ${i + 1} concatenados: ${concatArray[y]}`;
			printLI("concatNumber", concatArray, textInput);
		}
		y++;
	}
	return concatArray;
}
function operation(array) {
	let resultArray = [];
	const title = "Resultado";

	printH1("printOperation", title);
	for (let i = 0; i < array.length - 1; i++) {
		resultArray.push(array[i] / array[array.length - 1]);
		let resultFloat = fixFloat(resultArray);
		let floatArray = fixFloat(array);
		let factor = floatArray[floatArray.length - 1];
		let num = floatArray[i];
		let textInput = `${num} / ${factor} = ${resultFloat[i]}`;

		printLI("printOperation", floatArray, textInput);
	}
	return resultArray;
}

function fixFloat(array) {
	let fixedFloat = [];
	array.forEach((element) => {
		element = parseFloat(element);
		fixedFloat.push(element.toFixed(2));
	});
	return fixedFloat;
}
function printLI(append, array, textInput) {
	let createElementLI = document.createElement("li");
	let ulElement = document.getElementById(append);
	let text = textInput ? textInput : "";
	switch (append) {
		case "numeroSolicitado":
			array.forEach((element, index) => {
				text = `Numero ${index} solicitado: ${element}`;
				createElementLI.innerHTML = text;
				ulElement.appendChild(createElementLI);
			});
			break;
		case "reverseNumber":
			array.forEach(() => {
				createElementLI.innerHTML = text;
				ulElement.appendChild(createElementLI);
			});
			break;
		case "concatNumber":
			array.forEach(() => {
				createElementLI.innerHTML = text;
				ulElement.appendChild(createElementLI);
			});
			break;
		case "printOperation":
			array.forEach(() => {
				createElementLI.innerHTML = text;
				ulElement.appendChild(createElementLI);
			});
			break;
		default:
			break;
	}
}
function printH1(append, text) {
	let createElementH1 = document.createElement("h1");
	ulElement = document.getElementById(append);
	createElementH1.innerHTML = text;
	ulElement.appendChild(createElementH1);
}
