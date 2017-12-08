var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

var alpha = document.getElementById("alpha");
var beta = document.getElementById("beta");
var gamma = document.getElementById("gamma");
var absolute = document.getElementById("absolute");
var a = 0;
var b = 0;
var g = 0;

window.addEventListener("deviceorientation", function (e) {
   alpha.innerHTML = "Alpha: " + Math.round(e.alpha);
   beta.innerHTML = "Beta: " + Math.round(e.beta);
   gamma.innerHTML = "Gamma: " + Math.round(e.gamma);
   absolute.innerHTML = "Absolute: " + e.absolute;
   a = e.alpha;
   b = e.beta;
   g = e.gamma;

 }, false);


var x = c.width/2;
var y = c.width/2;


setInterval(function () {
  x+=g/10;
  y+=b/10;
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillRect(x,y,20,20);
  console.log('fdf');
},10)
