# RESPOSITORIO EJERCICIOS JS

## Ejercicio 1

> Mostrar texto compejo.

## Ejercicio 3

> Operacion matematica.

> Validar si el valor de entrada mediante prompt és valor numerico.

> Pintar la operacion.

## Ejercicio 4

> Cambiar string a uppercase.

## Ejercicio 5

> Validar si el valor introducido es un valor numerico.

> Validar si el numero es mayor, menor o igual a 10.

## Ejercicio 6

> Validar con un condicional, si el valor és menor a 0, mayor a 99999999 y si es valor numerico.

## Ejercicio 8

> Validar si el valor numerico és par o impar.

## Ejercicio Form 1

> Realiza una página que muestre un formulario y verifique la entrada de un número que esté comprendido entre 1..100.

```function informar(method, url) {
	let number = document.getElementsByName("number")[0].value;
	if (number == "" || isNaN(number)) {
		alert("Number please!");
	} else {
		if (1 <= number && number <= 100) {
			let form = document.getElementById("miFormulario");
			form.method = method;
			form.action = url;
			form.submit();
			alert("Gracias!");
		} else {
			alert("Numero entre 1 y 100!");
		}
	}
}`
```
