const selectDate = document.getElementById("select-date");
const selectDays = document.getElementById("selectDays-container");
const setCookieButton = document.getElementById("set-cookie");
document.getElementById("createCookie").addEventListener("click", showCreateCookie);
function showCreateCookie() {
	document.getElementById("input-content").style.visibility = "visible";
}

document.getElementById("selectDateContent").addEventListener("click", showSelectDate);
function showSelectDate() {
	selectDays.style.visibility = "hidden";
	selectDays.value = "";
	selectDate.style.visibility = "visible";
	setCookieButton.style.visibility = "visible";
}
document.getElementById("selectDaysContent").addEventListener("click", showSelectDays);
function showSelectDays() {
	selectDate.style.visibility = "hidden";
	selectDate.value = "";
	selectDays.style.visibility = "visible";
	setCookieButton.style.visibility = "visible";
}

// check cookie
function funcionCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i].trim();
		if (c.indexOf(name) == 0) {
			return true;
		}
	}
	return false;
}

document.getElementById("set-cookie").addEventListener("click", () => {
	let cname = document.getElementById("inputName").value;
	let cvalue = document.getElementById("inputValue").value;
	let exdays = document.getElementById("select-date").value;
	if (exdays) {
		setCookieDate(cname, cvalue, exdays);
	} else {
		console.log("kk");
		setCookieDays(cname, cvalue);
	}
});

function setCookieDate(cname, cvalue, exdays) {
	exdays = new Date(exdays);
	let expires = "expires=" + exdays.toUTCString();
	document.cookie =
		encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}
//TODO: cuando usas dias
function setCookieDays(cname, cvalue) {
	let years = document.getElementById("select-years").value * 365 * 24 * 60 * 60 * 1000;
	let months = document.getElementById("select-months").value * 31 * 24 * 60 * 60 * 1000;
	let days = document.getElementById("select-days").value * 24 * 60 * 60 * 1000;
	let calcMiliseconds = years + months + days;
	let dateMili = new Date().getTime();
	let date = new Date(calcMiliseconds + dateMili);
	let expires = "expires=" + date.toUTCString();
	document.cookie =
		encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function checkCookie() {
	let username = getCookie("username");
	if (username != "") {
		alert("Welcome again " + username);
	} else {
		username = prompt("Please enter your name:", "");
		if (username != "" && username != null) {
			setCookie("username", username, 365);
		}
	}
}

const select = document.getElementById("selector");

function listCookies() {
	let cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		let opt = document.createElement("option");
		opt.value = cookies[i];
		opt.innerHTML = cookies[i].split("=")[0];
		select.appendChild(opt);
	}
}

document.getElementById("leerContenido").addEventListener("click", leerContenido);
function leerContenido() {
	return "a";
}

listCookies();

document.getElementById("modifyCookie").addEventListener("click", modifyCookie);
function modifyCookie() {
	console.log(select.value);
	document.getElementById("preg1").style.visibility = "visible";
	let array = select.value.split("=");
	console.log(array[0]);
	console.log(array[1]);
	document.getElementById("nameCookie").value = array[0];
	document.getElementById("valueCookie").value = array[1];
}
