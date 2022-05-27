const selectDate = document.getElementById("select-date");
const selectDays = document.getElementById("selectDays-container");
const setCookieButton = document.getElementById("set-cookie");
const select = document.getElementById("selector");
const cookieName = document.getElementById("cookieName");
const cookieValue = document.getElementById("cookieValue");
const selectCookieContainer = document.getElementById("selectCookie-container");
const inputContent = document.getElementById("input-content");
const inputSelectYear = document.getElementById("select-years");
const inputSelectMonth = document.getElementById("select-months");
const inputSelectDays = document.getElementById("select-days");
const inputSelectName = document.getElementById("inputName");
const inputSelectValue = document.getElementById("inputValue");

document.getElementById("createCookie").addEventListener("click", showCreateCookie);
document.getElementById("selectDateContent").addEventListener("click", showSelectDate);
document.getElementById("selectDaysContent").addEventListener("click", showSelectDays);
document.getElementById("selectCookie").addEventListener("click", selectCookie);
document.getElementById("modifyCookie").addEventListener("click", modifyCookie);
document.getElementById("deleteCookie").addEventListener("click", deleteCookie);
setCookieButton.addEventListener("click", switchDateDays);

function showCreateCookie() {
	inputContent.style.visibility = "visible";
}

function showSelectDate() {
	selectDays.style.visibility = "hidden";
	selectDays.value = "";
	selectDate.style.visibility = "visible";
	setCookieButton.style.visibility = "visible";
}

function showSelectDays() {
	selectDate.style.visibility = "hidden";
	selectDate.value = "";
	selectDays.style.visibility = "visible";
	setCookieButton.style.visibility = "visible";
}

function selectCookie() {
	selectCookieContainer.style.visibility = "visible";
	let getCookieValue = select.value.split("=")[1];
	let getCookieName = select.value.split("=")[0]; // TODO: solo un split!
	cookieName.innerHTML = getCookieName;
	cookieValue.innerHTML = getCookieValue;
}

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
			setCookieButton.innerHTML = "Modify Cookie";
		}
	}
}

function switchDateDays() {
	let expires;
	let cname = document.getElementById("inputName").value;
	let cvalue = document.getElementById("inputValue").value;
	if (selectDate.style.visibility === "visible") {
		expires = setCookieDate();
	} else {
		expires = setCookieDays();
	}
	document.cookie =
		encodeURIComponent(cname).trim() +
		"=" +
		encodeURIComponent(cvalue).trim() +
		";" +
		expires +
		";path=/";

	if (setCookieButton.innerHTML == "Modify Cookie") {
		setCookieButton.innerHTML = "Create Cookie";
	}
	resetForm();
	listCookies();
}
function resetForm() {
	inputSelectName.value = "";
	inputSelectValue.value = "";
	inputSelectYear.value = "";
	inputSelectMonth.value = "";
	inputSelectDays.value = "";
	selectDate.style.visibility = "hidden";
	selectDays.style.visibility = "hidden";
	inputContent.style.visibility = "hidden";
	setCookieButton.style.visibility = "hidden";
}
function setCookieDate() {
	let exdays = document.getElementById("select-date").value;
	exdays = new Date(exdays);
	return (expires = "expires=" + exdays.toUTCString());
}

function setCookieDays() {
	let years = inputSelectYear.value * 365;
	let months = (years + inputSelectMonth.value) * 31;
	let days = (months + inputSelectDays.value) * 24 * 60 * 60 * 1000;
	let gmt2 = 2 * days;
	let calcMiliseconds = years + months + days + gmt2;
	let dateMili = new Date().getTime();
	let date = new Date(calcMiliseconds + dateMili);
	return (expires = "expires=" + date.toUTCString());
}

// function removeList() {
// 	let optionsClass = document.getElementsByClassName("optionCookie");
// 	if (optionsClass.length > 0) {
// 		for (let i = 0; i < optionsClass.length; i++) {
// 			optionsClass[i].remove();
// 			i--;
// 		}
// 	}
// }

function listCookies() {
	// removeList();
	let cookies = decodeURIComponent(document.cookie).split(";");
	select.innerHTML = "";
	for (let i = 0; i < cookies.length; i++) {
		let opt = document.createElement("option");
		opt.value = cookies[i];
		opt.classList.add("optionCookie");
		opt.innerHTML = cookies[i].split("=")[0];
		select.appendChild(opt);
	}
}

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
