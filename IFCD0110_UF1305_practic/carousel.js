let posicion = 0;
const arrayFotos = [
	"carousel/céline.jpg",
	"carousel/enrique-hoyos.jpg",
	"carousel/shad-meeg.jpg",
	"carousel/tatiana.jpg",
	"empty.jpg",
];
const posicionesArray = arrayFotos.length;
const imagenTag = document.getElementById("imagen");
const imageNum = document.getElementById("imageNum");

function contar(number) {
	let altTitle, text, textCapitalize;
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

	altTitle = arrayFotos[posicion].split("/");
	altTitle = altTitle[altTitle.length - 1].split(".");
	text = altTitle[0];

	textCapitalize = text.charAt(0).toUpperCase() + text.slice(1);

	imagenTag.src = "./" + arrayFotos[posicion];
	imageNum.innerHTML = "Imatge número: <b>" + posicion + "</b>";
	imagenTag.alt = text;
	imagenTag.title = textCapitalize;
}
