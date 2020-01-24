let canvas = document.getElementById("sandbox") ,
context = canvas.getContext("2d");
let R = 300 /2;
for(let d = 0; d < 60; ++d) {
    let angle = (d / 60) * (2 * Math.PI);
    let pX = Math.cos(angle) * R;
    let pY= -Math.sin(angle) * R;
    let qX = 0.9 * pX;
    let qY = 0.9 * pY;
    pX += R; pY += R;
    qX += R; qY +=R;
line = new Path2D();
line.moveTo(pX, pY);
line.lineTo(qX, qY);
context.stroke(line);
}
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(hours, minutes, seconds);

let secondsAngle = (seconds / 60) * (2 * Math.PI);
let minutesAnle = (minutes / 60) * (2 * Math.PI);
let hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);
secondsAngle = Math.PI / 2 - secondsAngle;
minutesAngle = Math.PI / 2 - minutesAngle;
hoursAngle = Math.PI / 2 - hoursAngle;

/*
line = new Path2D();
line.moveTo(0,0);
line.lineTo(300,300);
context.lineWidth = 5;
context.stroke(line);
context.fillStyle = "red";
context.fillRect(0, 0, 200, 200);
context.fillStyle = "rgba(0, 255, 0, 0.5) ";
context.fillRect(100, 100, 300, 300);
*/

