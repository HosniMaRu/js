let arrayReceived = [];
/**
 * *    Comprueba que inputTextArea es string.
 * *    Split en array inputTextArea por palabras.
 * *    Inverierte el array.
 * *    Reordena de A-Z.
 * *    Invierte el array reordenado.
 * *    Pinta en nueva ventana los valores.
 * *
 * @param {*} inputTextArea Valor recibido del input form
 * @returns
 * *    Devuelve los valores que pintara en nueva ventana.
 */
function tratarTexto(inputTextArea) {
	inputTextArea = inputTextArea //  para tirar el assert
		? inputTextArea
		: document.getElementsByName("miArea")[0].value;

	if (inputTextArea != "" && isNaN(inputTextArea)) {
		let generateArray = inputTextArea.split(" ");
		let arrayInvertido = [];
		for (let i = generateArray.length - 1; i >= 0; i--) {
			arrayInvertido.push(generateArray[i]);
		}
		let arrayAToC = bubbleSort(generateArray);
		let arrayAToCInvertido = [];
		for (let i = arrayAToC.length - 1; i >= 0; i--) {
			arrayAToCInvertido.push(arrayAToC[i]);
		}

		let newWin = open("url", "Arrays", "height=300,width=400");
		let addText = `<center><div id="test"><h3>Informacion sobre el texto introducido</h3></div></center>`;
		if (newWin != null) {
			newWin.document.write(addText);
			let text = `Numero de palabras: <b>${generateArray.length}</b>`;
			addElementsInWindows(newWin, text);
			text = `Primera palabra: <b>${generateArray[0]}</b>`;
			addElementsInWindows(newWin, text);
			text = `Ultima palabra: <b>${
				generateArray[generateArray.length - 1]
			}</b>`;
			addElementsInWindows(newWin, text);
			text = `Colocadas al reves: <b>${arrayInvertido}</b>`;
			addElementsInWindows(newWin, text);
			text = `Ordenadas de la A a la Z: <b>${arrayAToC}</b>`;
			addElementsInWindows(newWin, text);
			text = `Ordenadas de la Z a la A: <b>${arrayAToCInvertido}</b>`;
			addElementsInWindows(newWin, text);
			text = `<h3>Hecho...</h3>`;
			addElementsInWindows(newWin, text);
		}
		return true;
	}
}

console.assert(tratarTexto("ASD ZXC QWE") == true);
console.assert(
	bubbleSort(["ASD", "ZXC", "QWE"])[0] == ["ASD", "QWE", "ZXC"][0],
	""
);
console.assert(
	bubbleSort(["ASD", "ZXC", "QWE"])[1] == ["ASD", "QWE", "ZXC"][1],
	""
);
console.assert(
	bubbleSort(["ASD", "ZXC", "QWE"])[2] == ["ASD", "QWE", "ZXC"][2],
	""
);
/**
 * *    Reordena de A-Z
 * @param {*} array Array recibido
 * @returns Devuelve el array reordenado
 */
function bubbleSort(array) {
	var done = false;
	while (!done) {
		done = true;
		for (var i = 1; i < array.length; i += 1) {
			if (array[i - 1] > array[i]) {
				done = false;
				var tmp = array[i - 1];
				array[i - 1] = array[i];
				array[i] = tmp;
			}
		}
	}
	return array;
}
/**
 * *    Pinta en la nueva ventana los valores requeridos
 * @param {*} newWin Abre nueva ventana
 * @param {*} text Texto para añadir
 */
function addElementsInWindows(newWin, text) {
	let createElement = document.createElement("p");
	createElement.innerHTML = text;
	newWin.document.getElementById("test").appendChild(createElement);
}
