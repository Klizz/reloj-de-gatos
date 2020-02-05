
let today = new Date();
let h = today.getHours();
let m = today.getMinutes();

time = h + ":" + m + " hrs";

var catImage = document.getElementById('catClock');

if (h < 12) {
    img = "./img/dia.gif";
    message = "¡Buenos días!";
} else if (h > 19) {
    img = "./img/noche.gif";
    message = "¡Buenas noches!";
} else {
    img = "./img/tarde.gif";
    message = "¡Buenas tardes!";
}

catImage.src = img;
getMessage = message;

document.getElementById("mensaje").innerHTML = getMessage;
document.getElementById("demo").innerHTML = time;