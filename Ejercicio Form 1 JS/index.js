/**
 * *	Valida que number sea un valor numerico
 * *	Valida que number es un valor entre 1 y 100
 * @param {form.method} method
 * @param {form.action} url
 * @param {number} number Valor añadido para comprobar asserts (representa el valor del formulario)
 * @returns
 * *	Devuelve number
 * *	Devielve undefined
 */
function informar(method, url, number) {
	number = number ? number : document.getElementsByName("number")[0].value;
	if (number == "" || isNaN(number)) {
		return "Number please!";
	} else {
		if (1 <= number && number <= 100) {
			let form = document.getElementById("miFormulario");
			form.method = method;
			form.action = url;
			form.submit();
			return number;
		} else {
			return "Numero entre 1 y 100!";
		}
	}
}
function testForm() {
	console.assert(informar("GET", "./entrega.html", "") == "Number please!"); //	Assert --> ("GET", "./entrega.html", 1) return "Number please!".
	console.assert(informar("GET", "./entrega.html", "a") == "Number please!"); //	Assert --> ("GET", "./entrega.html", 1) return "Number please!".
	console.assert(
		informar("GET", "./entrega.html", "-1") == "Numero entre 1 y 100!"
	); //	Assert --> ("GET", "./entrega.html", 1) return "Numero entre 1 y 100!".
	console.assert(
		informar("GET", "./entrega.html", -1) == "Numero entre 1 y 100!"
	); //	Assert --> ("GET", "./entrega.html", 1) return "Numero entre 1 y 100!".
	console.assert(
		informar("GET", "./entrega.html", "101") == "Numero entre 1 y 100!"
	); //	Assert --> ("GET", "./entrega.html", 1) return "Numero entre 1 y 100!".
	console.assert(
		informar("GET", "./entrega.html", 101) == "Numero entre 1 y 100!"
	); //	Assert --> ("GET", "./entrega.html", 1) return "Numero entre 1 y 100!".
	console.assert(informar("GET", "./entrega.html", 1) == 1); //	Assert --> ("GET", "./entrega.html", 1) return 1.
	console.assert(informar("GET", "./entrega.html", "1") == 1); //	Assert --> ("GET", "./entrega.html", 1) return 1.
}
