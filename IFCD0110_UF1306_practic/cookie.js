function showCreateCookie() {
	document.getElementById("create-cookie").style.visibility = "visible";
}
function showDays() {
	document.getElementById("select-calendar").style.visibility = "hidden";
	document.getElementById("select-days").style.visibility = "visible";
}
function showCalendar() {
	document.getElementById("select-days").style.visibility = "hidden";
	document.getElementById("select-calendar").style.visibility = "visible";
}
function createCookie(dateType) {
	let expires;
	let cname = document.getElementById("inputName").value;
	let cvalue = document.getElementById("inputValue").value;
	switch (dateType) {
		case "days":
			expires = setCookieDays();
			break;
		case "calendar":
			expires = setCookieCalendar();
			break;
		default:
			break;
	}
	document.cookie =
		encodeURIComponent(cname).trim() +
		"=" +
		encodeURIComponent(cvalue).trim() +
		";" +
		expires +
		";path=/";
}
function setCookieCalendar() {
	let exdays = document.getElementById("dateInput").value;
	exdays = new Date(exdays);
	document.getElementById("showCreate").innerHTML = "Crear galeta";
	return "expires=" + exdays.toUTCString();
}

function setCookieDays() {
	let inputYears = document.getElementById("inputYears");
	let inputMonths = document.getElementById("inputMonths");
	let inputDays = document.getElementById("inputDays");
	let years = inputYears.value * 365 * 24 * 60 * 60 * 1000;
	let months = inputMonths.value * 31 * 24 * 60 * 60 * 1000;
	let days = inputDays.value * 24 * 60 * 60 * 1000;
	let gmt2 = 2 * 60 * 60 * 1000;
	let calcMiliseconds = years + months + days + gmt2;
	let dateMili = new Date().getTime();
	let date = new Date(calcMiliseconds + dateMili);
	document.getElementById("showCreate").innerHTML = "Crear galeta";

	return "expires=" + date.toUTCString();
}
function listCookies() {
	document.getElementById("table").style.visibility = "visible";
	let tableElement = document.getElementById("tbody");
	tableElement.style.visibility = "visible";
	let cookies = decodeURIComponent(document.cookie).split(";");
	for (let i = 0; i < cookies.length; i++) {
		let tr = document.createElement("tr");
		let tdName = document.createElement("td");
		let tdValue = document.createElement("td");
		let cookieSplit = cookies[i].split("=");
		tdName.innerHTML = cookieSplit[0];
		tdValue.innerHTML = cookieSplit[1];
		tr.appendChild(tdName);
		tr.appendChild(tdValue);
		tableElement.appendChild(tr);
	}
}
function cookieSelector() {
	let cookies = decodeURIComponent(document.cookie).split(";");
	let select = document.getElementById("llistaGaletes");
	select.innerHTML = "";
	for (let i = 0; i < cookies.length; i++) {
		let opt = document.createElement("option");
		opt.value = cookies[i];
		opt.classList.add("optionCookie");
		opt.innerHTML = cookies[i].split("=")[0];
		select.appendChild(opt);
	}
}
cookieSelector();
function showCookieData() {
	document.getElementById("deleteInfo").innerHTML = "";

	document.getElementById("show-cookieSelected").style.visibility = "visible";
	let cookies = decodeURIComponent(document.cookie).split(";");
	let cookieSelected = document.getElementById("llistaGaletes").value;
	for (let i = 0; i < cookies.length; i++) {
		if (cookieSelected == cookies[i]) {
			let splitCookie = cookies[i].split("=");
			let cookieName = splitCookie[0];
			let cookieValue = splitCookie[1];
			document.getElementById("showCookieName").innerHTML = cookieName;
			document.getElementById("showCookieValue").innerHTML = cookieValue;
		}
	}
}
function modifyCookie() {
	let value = document.getElementById("llistaGaletes").value;
	let splitCookie = value.split("=");
	let cname = splitCookie[0];
	let cvalue = splitCookie[1];
	document.getElementById("inputName").value = cname;
	document.getElementById("inputValue").value = cvalue;
	showCreateCookie();
	window.scrollTo({ top: 0, behavior: "smooth" });
	document.getElementById("showCreate").innerText = "Modificar galeta";
}
function deleteCookie() {
	let value = document.getElementById("llistaGaletes").value;
	let splitCookie = value.split("=");
	let cname = splitCookie[0];
	let cvalue = splitCookie[1];
	let expires = "expires=" + new Date(-1).toUTCString();
	document.cookie =
		encodeURIComponent(cname).trim() +
		"=" +
		encodeURIComponent(cvalue).trim() +
		";" +
		expires +
		";path=/";
	document.getElementById("deleteInfo").innerHTML = "Cookie eliminada";
	cookieSelector();
}
