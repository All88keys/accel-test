var alpha = document.getElementById("alpha");
var beta = document.getElementById("beta");
var gamma = document.getElementById("gamma");
var absolute = document.getElementById("absolute");


 document.addEventListener("deviceorientation", function (e) {
   alpha.innerHTML = "Alpha: " + e.alpha;
   beta.innerHTML = "Beta: " + e.beta;
   gamma.innerHTML = "Gamma: " + e.gamma;
   absolute.innerHTML = "Absolute: " + e.absolute;
 })
