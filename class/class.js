class Random {
	static generateMatricula() {
		return Math.floor(Math.random() * 9999 + 1);
	}
	static generateDNI() {
		return Math.floor(Math.random() * 99999999 + 1);
	}
}

class Car {
	constructor(marca, propietario) {
		this.brand = marca;
		this.propietario = propietario;
		this.pasajeros = [];
		this.matricula = Random.generateMatricula();
	}
	show() {
		return this.brand + " " + this.matricula;
	}
	addPasajeros(pasajero) {
		this.pasajeros.push(pasajero);
	}
	printJSON() {
		return JSON.stringify(this);
	}
}

class Persona {
	constructor(name) {
		this.nombre = name;
		this.dni = Random.generateDNI();
		listaPersonas.push(this);
	}
}

let listaPersonas = [];
let persona1 = new Persona("Juan");
let persona2 = new Persona("Manolo");
let persona3 = new Persona("Pakita");

let coche1 = new Car("Seat", persona1);
let coche2 = new Car("Seat", persona2);
let coche3 = new Car("Ford", persona3);

coche1.addPasajeros(persona1);
coche1.addPasajeros(persona2);

console.table([coche1.brand, coche1.propietario, coche1.pasajeros]);
console.log(coche1);
console.log(coche1.printJSON());
