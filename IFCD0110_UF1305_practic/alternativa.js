function ValidatePassword(campo, nombreCampoError) {
	let campoValor = campo.value;
	let texto = campoValor.trim().replaceAll(" ", "");
	let largoTexto = texto.length;
	if (largoTexto > 3) {
		if (largoTexto < 8) {
			//7a4
			if (letras(texto)) {
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}
		} else if (largoTexto < 12) {
			//11a8
			let bloque1 = texto.slice(4);
			let bloque2 = texto.slice(4, 8);
		} else {
			//inf a 12
			let bloque1 = texto.slice(4);
			let bloque2 = texto.slice(4, 8);
			let bloque3 = texto.slice(8, 12);
		}
	} else {
		cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
	}
}
//cambiarCorrectoIncorrecto(campo, nombreCampoError, true);

const mayuscula = /[A-Z]/;
const minuscula = /[a-z]/;
const numero = /[0-9]/;
const caracter = /[!@#\$%\^\&*\)\(+=._-]/;
//letras("Aa0@");
function letras(texto) {
	let var1 = false;
	let var2 = false;
	let var3 = false;
	let var4 = false;
	if (mayuscula.test(texto)) {
		console.log("mayusucula");
		var1 = true;
	}
	if (minuscula.test(texto)) {
		console.log("minuscula");
		var2 = true;
	}
	if (numero.test(texto)) {
		console.log("numero");
		var3 = true;
	}
	if (caracter.test(texto)) {
		console.log("caracter");
		var4 = true;
	}
	if (var1 && var2 && var3 && var4) {
		console.log("PASO TRUE");
		return true;
	}
	return false;
}
function checkCities(price, checked, id) {
	let totalPriceElement = document.getElementById(id);
	price = parseFloat(price);
	if (checked == true) {
		totalPriceElement.innerHTML = parseFloat(totalPriceElement.innerHTML) + price;
	} else {
		totalPriceElement.innerHTML = parseFloat(totalPriceElement.innerHTML) - price;
	}
	if (totalPriceElement.innerHTML > 0) {
		checkCitiesSubmit = true;
	} else {
		checkCitiesSubmit = false;
	}
	checkSubmitButton();
}
