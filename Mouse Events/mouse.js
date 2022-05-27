//print position mouse
function getPositions(ev) {
	if (ev == null) {
		ev = window.event;
	}
	_mouseX = ev.clientX;
	_mouseY = ev.clientY;
	console.log(_mouseX + " " + _mouseY);
}
document.addEventListener("mouseup", getPositions);
//print if mouse leave out window
document.addEventListener("mouseleave", (event) => {
	if (
		event.clientY <= 0 ||
		event.clientX <= 0 ||
		event.clientX >= window.innerWidth ||
		event.clientY >= window.innerHeight
	) {
		console.log("I'm out");
	}
});
// reset window events
window.addEventListener("beforeunload", function (e) {
	e.preventDefault();
	e.returnValue = "";
});
// click button with alt and shift keys
let button = document.getElementsByTagName("button")[0];
button.onclick = function (event) {
	if (event.altKey && event.shiftKey) {
		alert("Hooray!");
	}
};

document.addEventListener("mousemove", function (e) {
	let cursor = document.getElementById("follow");
	cursor.style.left = e.pageX + "px";
	cursor.style.top = e.pageY + "px";
});
const person = {
	fullName: function (city, country) {
		console.log(this);
		return this.firstName + " " + this.lastName + "," + city + "," + country;
	},
};
const person1 = {
	firstName: "nom",
	lastName: "cognom",
};
console.log(person.fullName.call(person1, "Ciutat", "Pais"));
