const selectDate = document.getElementById("select-date");
const selectDays = document.getElementById("selectDays-container");
const setCookieButton = document.getElementById("set-cookie");
const select = document.getElementById("selector");
const cookieName = document.getElementById("cookieName");
const cookieValue = document.getElementById("cookieValue");
const selectCookieContainer = document.getElementById("selectCookie-container");

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

document.getElementById("selectCookie").addEventListener("click", selectCookie);
function selectCookie() {
	selectCookieContainer.style.visibility = "visible";
	let getCookieValue = select.value.split("=")[1];
	let getCookieName = select.value.split("=")[0];
	cookieName.innerHTML = getCookieName;
	cookieValue.innerHTML = getCookieValue;
}

document.getElementById("modifyCookie").addEventListener("click", modifyCookie);
function modifyCookie() {
	showCreateCookie();
	let cookies = decodeURIComponent(document.cookie).split(";");
	let value = cookieValue.innerHTML;
	for (let i = 0; i < cookies.length; i++) {
		if (cookies[i].split("=")[1] == value) {
			let cname = cookies[i].split("=")[0];
			let cvalue = cookies[i].split("=")[1];
			document.getElementById("inputName").value = cname;
			document.getElementById("inputValue").value = cvalue;
		}
	}
}

document.getElementById("set-cookie").addEventListener("click", switchDateDays);
function switchDateDays() {
	let cname = document.getElementById("inputName").value;
	let cvalue = document.getElementById("inputValue").value;
	let exdays = document.getElementById("select-date").value;
	if (selectDate.style.visibility === "visible") {
		setCookieDate(cname, cvalue, exdays);
	} else {
		setCookieDays(cname, cvalue);
	}
	listCookies();
}
function setCookieDate(cname, cvalue, exdays) {
	exdays = new Date(exdays);
	let expires = "expires=" + exdays.toUTCString();
	document.cookie =
		encodeURIComponent(cname).trim() +
		"=" +
		encodeURIComponent(cvalue).trim() +
		";" +
		expires +
		";path=/";
}
//TODO: cuando usas dias
function setCookieDays(cname, cvalue) {
	let years = document.getElementById("select-years").value * 365 * 24 * 60 * 60 * 1000;
	let months = document.getElementById("select-months").value * 31 * 24 * 60 * 60 * 1000;
	let days = document.getElementById("select-days").value * 24 * 60 * 60 * 1000;
	let gmt2 = 2 * 60 * 60 * 1000;
	let calcMiliseconds = years + months + days + gmt2;
	let dateMili = new Date().getTime();
	let date = new Date(calcMiliseconds + dateMili);
	let expires = "expires=" + date.toUTCString();
	document.cookie =
		encodeURIComponent(cname).trim() +
		"=" +
		encodeURIComponent(cvalue).trim() +
		";" +
		expires +
		";path=/";
}

function removeList() {
	let optionsClass = document.getElementsByClassName("optionCookie");
	if (optionsClass.length > 0) {
		for (let i = 0; i < optionsClass.length; i++) {
			optionsClass[i].remove();
			i--;
		}
	}
}

function listCookies() {
	removeList();
	let cookies = decodeURIComponent(document.cookie).split(";");
	for (let i = 0; i < cookies.length; i++) {
		let opt = document.createElement("option");
		opt.value = cookies[i];
		opt.classList.add("optionCookie");
		opt.innerHTML = cookies[i].split("=")[0];
		select.appendChild(opt);
	}
}

document.getElementById("deleteCookie").addEventListener("click", deleteCookie);
function deleteCookie() {
	let cookies = decodeURIComponent(document.cookie).split(";");
	let value = cookieValue.innerHTML;
	for (let i = 0; i < cookies.length; i++) {
		if (cookies[i].split("=")[1] == value) {
			let cname = cookies[i].split("=")[0].trim();
			let cvalue = cookies[i].split("=")[1].trim();
			let expires = "expires=" + new Date(-1).toUTCString();
			document.cookie =
				encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
			listCookies();
			selectCookieContainer.style.visibility = "hidden";
		}
	}
}
listCookies();
