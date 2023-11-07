"use strict";

// Variables
const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");
let painting = false;
let color, width, difX, difY;

// Start painting when the user clicks
canvas.addEventListener("mousedown",e=>{
	difX = e.clientX - dif.left;
	difY = e.clientY - dif.top;
	painting = true;
	color = document.getElementById("line-color").value;
	width = document.getElementById("line-width").value;
	ctx.beginPath();
});

// Creates the line when the mouse moves
canvas.addEventListener("mousemove",e=>{
	if (painting) {
		const newDifX = e.clientX - dif.left;
		const newDifY = e.clientY - dif.top;
		draw(difX,difY,newDifX,newDifY);
		difX = newDifX;
		difY = newDifY;
	}
});

// Stop painting
canvas.addEventListener("mouseup",e=>{
	ctx.closePath();
	painting = false;
})

// Function that draws the line from a (x1,y1) to a (x2,y2)
function draw(x1,y1,x2,y2) {
	ctx.strokeStyle = color;
	ctx.lineWidth = width;
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}
