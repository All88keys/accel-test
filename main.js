var alpha = document.getElementById("alpha");
var beta = document.getElementById("beta");
var gamma = document.getElementById("gamma");
var absolute = document.getElementById("absolute");


window.addEventListener("deviceorientation", function (e) {
   alpha.innerHTML = "Alpha: " + Math.round(e.alpha);
   beta.innerHTML = "Beta: " + Math.round(e.beta);
   gamma.innerHTML = "Gamma: " + Math.round(e.gamma);
   absolute.innerHTML = "Absolute: " + e.absolute;
 }, false);
