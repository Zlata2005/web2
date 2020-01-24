let canvas = document.getElementById("sandbox"),
context = canvas.getContext("2d");



function drawWatch() {
context.clearRect(0, 0, 300, 300);
let R = 300/2;
for(let d = 0; d < 60; ++d) {
let angle = (d/60) * (2 * Math.PI);
let pX = Math.cos(angle) * R;
let pY = -Math.sin(angle) * R;
let qX = 0.9 * pX;
let qY = 0.9 * pY;
pX += R; pY += R;
qX += R; qY += R;
let line = new Path2D();


line.moveTo(pX, pY);
line.lineTo(qX, qY);
context.strokeStyle="blue";
context.lineWidth=2;
context.stroke(line);

}

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

secondsAngle = (seconds / 60) * (2 * Math.PI);
minutesAngle = (minutes / 60) * (2 * Math.PI);
hoursAngle = ((hours % 12)/12) * (2 * Math.PI);
secondsAngle = Math.PI / 2 - secondsAngle;
minutesAngle = Math.PI / 2 - minutesAngle;
hoursAngle = Math.PI / 2 - hoursAngle;
drawLine(secondsAngle,0,0.95, "red",3);
drawLine(minutesAngle,0,0.75, "black",5);
drawLine(hoursAngle,0,0.5, "green",10);
setTimeout(drawWatch,1000);

}
drawWatch();







function drawLine(angle,a,b,style,w){
let R = 300/2;
let pX = Math.cos(angle) * R;
let pY = -Math.sin(angle) * R;
qX = a*pX;
qY = a*pY;
pX *= b;
pY *= b;
pX += R; pY += R;
qX += R; qY += R;
let line = new Path2D();
line.moveTo(pX, pY);
line.lineTo(qX, qY);
context.strokeStyle=style;
context.lineWidth=w;
context.stroke(line);
}