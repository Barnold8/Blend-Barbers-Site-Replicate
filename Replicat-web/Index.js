
console.log("JS FOUND");

var title = document.title;

function StartTitle(){

	document.title = `${title}`;
}

function BlurTitle(){

	document.title = "No fresh trim for you";

}

window.onblur = BlurTitle;
window.onfocus = StartTitle;

