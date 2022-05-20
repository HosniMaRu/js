let posicion = 0;
const arrayFotos = [
	"céline.jpg",
	"enrique-hoyos.jpg",
	"shad-meeg.jpg",
	"tatiana.jpg",
	"empty.jpg",
];
const posicionesArray = arrayFotos.length;
const imagenTag = document.getElementById("imagen");
const imageNum = document.getElementById("imageNum");

function contar(number) {
	let text, textCapitalize;
	if (number != 0) {
		posicion = posicion + number;
		if (posicion > posicionesArray - 1) {
			posicion = 0;
		}
		if (posicion < 0) {
			posicion = posicionesArray - 1;
		}
	} else {
		posicion = 0;
	}
	text = arrayFotos[posicion].split(".")[0];
	textCapitalize = text.charAt(0).toUpperCase() + text.slice(1);
	imageNum.innerHTML = "Imatge número: <b>" + posicion + "</b>";
	imagenTag.src = "./carousel/" + arrayFotos[posicion];
	imagenTag.alt = text;
	imagenTag.title = textCapitalize;
}
