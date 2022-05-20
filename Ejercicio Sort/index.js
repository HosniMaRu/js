const array1 = [10, 1, 2, 3, 4];
function sortArray(array) {
	let indexOfTemp;
	let arraySort = [];
	console.log("Array-ENTRADA--> " + array);
	while (array.length > 0) {
		let temp = array[0];
		for (let i = 0; i < array.length; i++) {
			if (temp >= array[i]) {
				temp = array[i];
			}
		}
		arraySort.push(temp);
		indexOfTemp = array.indexOf(temp);
		let spliceArray = array.splice(indexOfTemp, 1);

		console.log("Elemento a mover----> " + spliceArray);
		console.log("Viejo Array----> " + array);
		console.log("Nuevo Array----> " + arraySort);
	}
}
sortArray(array1);
let myObj = {
    name: "juan",
}
if(navigator.cookieEnabled)//se puede crear cookie
