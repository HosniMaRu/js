function createCookie() {
	let cvalue = document.getElementById("cookieValue");
	checkCookie(cvalue, "create");
}

function setCookie(cvalue) {
	let exdays = document.getElementById("expiresIn");
	let exdaysDate = document.getElementById("selectDate");
	const d = new Date();
	let date;
	debugger;
	if (exdays?.value || typeof exdays == "number") {
		d.setTime(d.getTime() + exdays.value * 24 * 60 * 60 * 1000);
		let expires = "expires=" + d.toUTCString();
		document.cookie = "username" + "=" + cvalue.value + ";" + expires + ";path=/";
	} else if (exdaysDate?.value || typeof exdaysDate == "number") {
		let myDate = new Date(exdaysDate.value);
		let hoursStamp = d.getHours() * 60 * 60 * 1000;
		let minutesStamp = d.getMinutes() * 60 * 1000;
		let secondsStamp = d.getMilliseconds();
		myDate = new Date(exdaysDate.value).getTime() + hoursStamp + minutesStamp + secondsStamp;
		myDate = new Date(myDate);
		date = "expires=" + myDate.toUTCString();
		document.cookie = "username" + "=" + cvalue.value + ";" + date + ";path=/";
	} else {
		date = "expires=" + new Date(-1).toUTCString();
		document.cookie = "username" + "=" + cvalue.value + ";" + date + ";path=/";
	}
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i].trim();
		if (c.indexOf(name) == 0) {
			console.log(c.substring(name.length, c.length));
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie(cvalue, method) {
	let user = getCookie("username");
	if (!cvalue) {
		cvalue = document.getElementById("checkCookie");
	}
	if (user == cvalue.value) {
		alert("Welcome again " + user);
	} else {
		if (cvalue.value == "") {
			user = alert("Please enter your name:", "");
		} else {
			switch (method) {
				case "create":
					setCookie(cvalue);
					break;
				case "check":
					alert("No coincide");
					break;
				default:
					break;
			}
		}
	}
}

function printContent() {
	let cookie = document.cookie;
	alert(cookie);
}
function modifyCookie() {
	let modify = document.getElementById("modifyCookie");
	checkCookie(modify, "create");
}
function eraseCookie() {
	setCookie("");
}
