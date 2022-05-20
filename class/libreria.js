"use strict";
let listaLibros = [];
class Book {
	constructor(title, author, edicion, price, tema) {
		this.titulo = title;
		this.autor = author;
		this.edicion = edicion;
		this.precio = price;
		this.tematica = tema;
		this.printTableHTML();
		listaLibros.push(this);
	}

	printTableHTML() {
		let tr = document.createElement("tr");
		let table = document.getElementById("table");
		let tdTitulo = document.createElement("td");
		let tdAutor = document.createElement("td");
		let tdEdicion = document.createElement("td");
		let tdPrecio = document.createElement("td");
		let tdTematica = document.createElement("td");

		tdTitulo.innerHTML = this.titulo;
		tdAutor.innerHTML = this.autor;
		tdEdicion.innerHTML = this.edicion;
		tdPrecio.innerHTML = this.precio + "€";
		tdTematica.innerHTML = Book.pintarTematicaAcumulada(this.tematica);

		tr.appendChild(tdTitulo);
		tr.appendChild(tdAutor);
		tr.appendChild(tdEdicion);
		tr.appendChild(tdPrecio);
		tr.appendChild(tdTematica);

		table.appendChild(tr);
	}

	static pintarTematicaAcumulada(array) {
		let acumulado = "";
		for (let i = 0; i < array.length; i++) {
			acumulado += array[i] + ", ";
		}
		return acumulado.slice(0, -2);
	}
}
for (let i = 0; i < 10; i++) {
	new Book(`Libro${i}`, `Autor${i}`, i, Math.floor(Math.random() * 100), [
		`tematica${i}`,
		`tematica${i + 1}`,
	]);
}
// console.log(Book.pintarTematicaAcumulada(listaLibros[0]?.tematica));
