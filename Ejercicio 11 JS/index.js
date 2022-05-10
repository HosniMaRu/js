function ej11() {
	//  Cantidad de enlaces
	let getAnchor = document.getElementsByTagName("a");
	let check = getAnchor.length;
	document.getElementById("anchorQuantity").innerHTML = `Numero de links: ${
		check - 1
	}`;

	//  Direccion ultimo enlace
	let lastHRef = getAnchor[check - 1].href;
	document.getElementById(
		"anchorHRef"
	).innerHTML = `Ultimo link apunta a: ${lastHRef}`;

	//  Numero de enlaces que apuntan a "http://prueba"
	let count = 0;
	for (let i = 0; i < getAnchor.length - 1; i++) {
		console.log(getAnchor[i]);
		if (getAnchor[i].href === "http://prueba/") {
			count++;
		}
		document.getElementById(
			"anchorHRefCount"
		).innerHTML = `Cantidad de link que apuntan a "http://prueba": ${count}`;
	}

	//  Numero de enlaces del tercer párrafo
	let getParagraph = document.getElementsByTagName("p");
	let lastParagraph = getParagraph[getParagraph.length - 1];
	let anchorLastParagraph = lastParagraph.getElementsByTagName("a");
	let countLastP = 0;
	for (let i = 0; i < anchorLastParagraph.length; i++) {
		countLastP++;
	}
	document.getElementById(
		"lastPCount"
	).innerHTML = `Cantidad de link que hay en el ultimo parrafo": ${countLastP}`;
}
