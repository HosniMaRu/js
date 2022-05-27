let productos = [];
class Producto {
	constructor(nombre, iu, precio) {
		this.nombre = nombre;
		this.iu = iu == "" ? generateIU() : iu;
		this.precio = precio;
		productos.push(this);
		printProductTable(productos);
	}
}
function printProductTable(products) {
	let sorted = products.sort((a, b) => {
		if (parseInt(a.precio) < parseInt(b.precio)) {
			return -1;
		}
		if (a.precio > b.precio) {
			return 1;
		}
		return 0;
	});
	console.table(sorted);
}
function showAddProduct() {
	let container = document.getElementById("addProduct");
	container.innerHTML = "";
	let inputProduct = document.createElement("input");
	inputProduct.type = "text";
	inputProduct.id = "addProductName";
	inputProduct.placeholder = "Nom producte";
	let inputIU = document.createElement("input");
	inputIU.type = "text";
	inputIU.id = "addProductIU";
	inputIU.placeholder = "IU";
	let inputPrice = document.createElement("input");
	inputPrice.type = "number";
	inputPrice.id = "addProductprice";
	inputPrice.placeholder = "Preu";
	let button = document.createElement("button");
	button.innerHTML = "AFEGIR";
	button.addEventListener("click", addProduct);
	container.appendChild(inputProduct);
	container.appendChild(inputIU);
	container.appendChild(inputPrice);
	container.appendChild(button);
}
function addProduct() {
	let name = document.getElementById("addProductName").value;
	let iu = document.getElementById("addProductIU").value;
	let price = document.getElementById("addProductprice").value;
	price = price.replaceAll(",", ".");
	new Producto(name, iu, price);
}
function generateIU(lengthText = 5) {
	let wordsLowerCase = "abcdefghijklmnopqrstuvwxyz";
	let numbers = "1234567890";
	let characters = wordsLowerCase + wordsLowerCase.toUpperCase() + numbers;
	let result = "";
	let charLength = characters.length;
	for (let i = 0; i < lengthText; i++) {
		result += characters.charAt(Math.floor(Math.random() * charLength));
	}
	return result;
}

function printUIList() {
	let ol = document.getElementById("uiList");
	let sorted = productos.sort((a, b) => {
		if (a.iu < b.iu) {
			return -1;
		}
		if (a.iu > b.iu) {
			return 1;
		}
		return 0;
	});
	for (let i = 0; i < sorted.length; i++) {
		let li = document.createElement("li");
		li.innerHTML = `Nom: ${sorted[i].nombre}, IU: ${sorted[i].iu}, Preu: ${sorted[i].precio}`;
		ol.appendChild(li);
	}
}
function printNameList() {
	let ol = document.getElementById("uiList");
	let sorted = productos.sort((a, b) => {
		if (a.nombre < b.nombre) {
			return -1;
		}
		if (a.nombre > b.nombre) {
			return 1;
		}
		return 0;
	});
	for (let i = 0; i < sorted.length; i++) {
		let li = document.createElement("li");
		li.innerHTML = `Nom: ${sorted[i].nombre}, IU: ${sorted[i].iu}, Preu: ${sorted[i].precio}`;
		ol.appendChild(li);
	}
}
