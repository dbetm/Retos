var bar = document.querySelector("#colorful");
var pos = document.querySelector("#positron");
var segundos = 0;

var intervalo = setInterval(function() {
    segundos++;
    var a = Math.round(Math.random() * 256);
    var b = Math.round(Math.random() * 256);
    var c = Math.round(Math.random() * 256);
    var color = "rgb(" + a + ", " + b + ", " + c + ")";
    bar.style.background = color;
    console.log(pos);
    if (pos.innerHTML == "+)" && segundos%4 == 0) {
        pos.innerHTML = "-)";
    }
    else {
        pos.innerHTML = "+)";
    }
}, 559);
