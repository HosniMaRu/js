function printUpperCase() {
	let question = prompt("Write somthing in lowercase");
	question = question.toUpperCase();
	const printElement = document.getElementById("printUpperCase");
	printElement.innerHTML = question;
}
