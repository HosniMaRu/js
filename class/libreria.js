"use strict";
let listaLibros = [];
class Book {
	constructor(title, author, edicion, price, tema) {
		this.sn = this.serialNumber() + "_" + title;
		this.titulo = title;
		this.autor = author;
		this.edicion = edicion;
		this.precio = price;
		this.tematica = tema;
		this.printTableHTML();
		listaLibros.push(this);
	}
	serialNumber() {
		return Math.floor(Math.random() * 10000);
	}

	printTableHTML() {
		let tr = document.createElement("tr");
		let table = document.getElementById("table");
		let tdSN = document.createElement("td");
		let tdTitulo = document.createElement("td");
		let tdAutor = document.createElement("td");
		let tdEdicion = document.createElement("td");
		let tdPrecio = document.createElement("td");
		let tdTematica = document.createElement("td");
		let tdDelete = document.createElement("td");
		let tdModify = document.createElement("td");
		let buttonDelete = document.createElement("button");
		buttonDelete.addEventListener("click", () => Book.deleteRow(tr));

		let buttonModify = document.createElement("button");
		buttonModify.addEventListener("click", () => Book.modifyRow(tr));

		tdSN.innerHTML = this.sn;
		tdTitulo.innerHTML = this.titulo;
		tdAutor.innerHTML = this.autor;
		tdEdicion.innerHTML = this.edicion;
		tdPrecio.innerHTML = this.precio + "€";
		tdTematica.innerHTML = Book.pintarTematicaAcumulada(this.tematica);
		buttonDelete.id = "delete-button";
		buttonModify.id = "modify-button";
		buttonDelete.innerHTML = "Delete";
		buttonModify.innerHTML = "Modify";

		tdDelete.appendChild(buttonDelete);
		tdModify.appendChild(buttonModify);
		tr.appendChild(tdSN);
		tr.appendChild(tdTitulo);
		tr.appendChild(tdAutor);
		tr.appendChild(tdEdicion);
		tr.appendChild(tdPrecio);
		tr.appendChild(tdTematica);
		tr.appendChild(tdDelete);
		tr.appendChild(tdModify);

		table.appendChild(tr);
	}

	static pintarTematicaAcumulada(array) {
		let acumulado = "";
		for (let i = 0; i < array.length; i++) {
			acumulado += array[i] + ", ";
		}
		return acumulado.slice(0, -2);
	}

	static deleteRow(tr) {
		tr.remove();
	}
	static modifyRow(tr) {
		let tableTitle = document.getElementById("thead");
		let titles = tableTitle.children;
		let childTr = tr.children;
		for (let i = 0; i < childTr.length - 2; i++) {
			let inputModify = document.createElement("input");
			switch (i) {
				case 0:
					inputModify.value = childTr[i].innerHTML;
					inputModify.disabled = true;
					break;
				default:
					childTr[i].style.color = "red";
					inputModify.placeholder = titles[i].innerHTML;
					break;
			}
			childTr[i].appendChild(inputModify);
		}
		childTr[childTr.length - 1].innerHTML = "";
		Book.setButton(childTr);
	}

	static setButton(element) {
		let button = document.createElement("button");
		button.innerHTML = "Introducir";
		element[element.length - 1].appendChild(button);
		button.addEventListener("click", () => {
			if (
				element[1].children[0].value &&
				element[2].children[0].value &&
				element[3].children[0].value &&
				element[4].children[0].value &&
				element[5].children[0].value
			) {
				button.style.background = "green";
				for (let i = 0; i < element.length; i++) {
					element[i].style.color = "black";
					if (i == 0) {
						let firstElement = element[i].innerHTML.split("_");
						element[i].innerHTML = firstElement[0] + "_" + element[1].children[0].value;
					} else {
						element[i].innerHTML = element[i].children[0].value;
					}
				}
			} else {
				button.style.background = "red";
			}
		});
	}
}
for (let i = 0; i < 10; i++) {
	new Book(`Libro${i}`, `Autor${i}`, i, Math.floor(Math.random() * 100), [
		`tematica${i}`,
		`tematica${i + 1}`,
	]);
}
