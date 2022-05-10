function showDate() {
	document.getElementById("dia-actual").innerHTML = "Fecha de hoy";
	let hoy = new Date();
	let dia = hoy.getDate();
	let mes = hoy.getMonth();
	let anyo = hoy.getYear();

	if (mes == "0") convertir_mes = "Enero";
	else if (mes == "1") convertir_mes = "Febrero";
	else if (mes == "2") convertir_mes = "Marzo";
	else if (mes == "3") convertir_mes = "Abril";
	else if (mes == "4") convertir_mes = "Mayo";
	else if (mes == "5") convertir_mes = "Junio";
	else if (mes == "6") convertir_mes = "Julio";
	else if (mes == "7") convertir_mes = "Agosto";
	else if (mes == "8") convertir_mes = "Septiembre";
	else if (mes == "9") convertir_mes = "Octubre";
	else if (mes == "10") convertir_mes = "Noviembre";
	else convertir_mes = "Diciembre";
	let showDate = document.getElementById("showDate");
	showDate.innerHTML = `<H3>Hoy es ${dia} de ${convertir_mes} de ${anyo}</H3>`;
}

let timerID = null;
let timerRunning = false;

function stopclock() {
	if (timerRunning) clearTimeout(timerID);
	timerRunning = false;
	document.getElementById("hora-actual").innerHTML = "";
}
function showtime() {
	document.getElementById("hora-actual").innerHTML =
		"Visualización de la ora actual";
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let timeValue = "" + (hours > 12 ? hours - 12 : hours);
	timeValue += (minutes < 10 ? ":0" : ":") + minutes;
	timeValue += (seconds < 10 ? ":0" : ":") + seconds;
	timeValue += hours >= 12 ? " P.M." : " A.M.";
	document.getElementById("clock").innerText = timeValue;
	timerID = setTimeout("showtime()", 1000);
	timerRunning = true;
}
function startclock() {
	changeDisplay("clock", "block");
	stopclock();
	showtime();
	changeDisplay("startBtn", "none");
	changeDisplay("stopBtn", "block");
}
function abortclock() {
	changeDisplay("clock", "none");
	stopclock();
	changeDisplay("startBtn", "block");
	changeDisplay("stopBtn", "none");
}
function changeDisplay(id, value) {
	document.getElementById(id).style.display = value;
}
window.onload = showDate;
