let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log(this.msg.value);

console.log("Hello");

});
