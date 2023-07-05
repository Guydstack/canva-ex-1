
// Ex 1
let canva1 = document.querySelector("canvas#ex1"); // Find the canvas in the DOM
let canva1Draw = canva1.getContext("2d"); // Prepare canvas to Draw in 2d
canva1Draw.beginPath(); // Start a path to draw
canva1Draw.arc(95, 50, 40, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva1Draw.strokeStyle = "red"
canva1Draw.stroke(); // draw!

// Ex 2
let canva2 = document.querySelector("canvas#ex2"); // Find the canvas in the DOM
let canva2Draw = canva2.getContext("2d"); // Prepare canvas to Draw in 2d
canva2Draw.beginPath(); // Start a path to draw
canva2Draw.lineWidth = 25; // Set the width of the line
canva2Draw.strokeRect(20, 20, 100, 100); // Short way to draw a rectangle
canva2Draw.lineWidth = 1;
canva2Draw.strokeStyle = "red" // Set the color of the line
canva2Draw.strokeRect(37.5, 37.5, 65, 65); // Short way to draw a rectangle


// Ex 3

let canva3 = document.querySelector("canvas#ex3"); // Find the canvas in the DOM
let canva3Draw = canva3.getContext("2d"); // Prepare canvas to Draw in 2d
canva3Draw.beginPath(); // Start a path to draw
canva3Draw.fillStyle = "red";
canva3Draw.fillRect(20, 20, 100, 100) // Fill the area with color
canva3Draw.stroke();
canva3Draw.fillStyle = "blue";
canva3Draw.globalAlpha = 0.6; // Set the opacity of the color from 0-1
canva3Draw.fillRect(70, 70, 100, 100);
canva3Draw.stroke();


// Ex 4

let canva4 = document.querySelector("canvas#ex4"); // Find the canvas in the DOM
let canva4Draw = canva4.getContext("2d"); // Prepare canvas to Draw in 2d
canva4Draw.beginPath(); // Start a path to draw
canva4Draw.moveTo(20,20); // Moves the path to a specified point without drawing a line.
canva4Draw.lineTo(20,100); // Creat a line at a specified point 
canva4Draw.lineTo(100,100);
canva4Draw.lineTo(20,20);
canva4Draw.closePath(); // Close the path
canva4Draw.fillStyle = "black"; // Set the fill color to black
canva4Draw.fill(); // Fill the path with black color
canva4Draw.stroke();


// Ex 5

let canva5 = document.querySelector("canvas#ex5"); // Find the canvas in the DOM
let canva5Draw = canva5.getContext("2d"); // Prepare canvas to Draw in 2d
canva5Draw.beginPath(); // Start a path to draw
canva5Draw.arc(50, 50, 40, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva5Draw.stroke(); // draw!

canva5Draw.beginPath(); // Start a path to draw
canva5Draw.arc(50, 50, 30, 0, 1 * Math.PI); // Draw a cricle on the canvas
canva5Draw.lineCap = "round"; // Sets or returns the style of the end caps for a line.
canva5Draw.stroke(); // draw!

canva5Draw.beginPath(); // Start a path to draw
canva5Draw.arc(40, 40, 5, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva5Draw.moveTo(35,40)
canva5Draw.arc(60, 40, 5, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva5Draw.stroke(); // draw!


// Ex 6

let canva6 = document.querySelector("canvas#ex6"); // Find the canvas in the DOM
let canva6Draw = canva6.getContext("2d"); // Prepare canvas to Draw in 2d

// Cricle 1
canva6Draw.beginPath(); // Start a path to draw
canva6Draw.arc(95, 50, 30, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva6Draw.closePath(); // Close the path
canva6Draw.stroke(); // draw!

// Cricle 2
canva6Draw.beginPath(); // Start a path to draw
canva6Draw.moveTo(170,100)
canva6Draw.arc(140, 100, 30, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva6Draw.fillStyle = "black"; // Set the fill color to black
canva6Draw.globalAlpha = 0.2;
canva6Draw.fill(); // Fill the path with black color
canva6Draw.closePath(); // Close the path
canva6Draw.stroke(); // draw!

// Cricle 3
canva6Draw.beginPath(); // Start a path to draw
canva6Draw.moveTo(215,150)
canva6Draw.arc(185, 150, 30, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva6Draw.fillStyle = "black"; // Set the fill color to black
canva6Draw.globalAlpha = 0.4;
canva6Draw.fill(); // Fill the path with black color
canva6Draw.closePath(); // Close the path
canva6Draw.stroke(); // draw!

// Cricle 4
canva6Draw.beginPath(); // Start a path to draw
canva6Draw.moveTo(260,200)
canva6Draw.arc(230, 200, 30, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva6Draw.fillStyle = "black"; // Set the fill color to black
canva6Draw.globalAlpha = 0.6;
canva6Draw.fill(); // Fill the path with black color
canva6Draw.closePath(); // Close the path
canva6Draw.stroke(); // draw!

// Cricle 5
canva6Draw.beginPath(); // Start a path to draw
canva6Draw.moveTo(305,250)
canva6Draw.arc(275, 250, 30, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva6Draw.fillStyle = "black"; // Set the fill color to black
canva6Draw.globalAlpha = 0.8;
canva6Draw.fill(); // Fill the path with black color
canva6Draw.closePath(); // Close the path
canva6Draw.stroke(); // draw!

// Cricle 6
canva6Draw.beginPath(); // Start a path to draw
canva6Draw.moveTo(350,300)
canva6Draw.arc(320, 300, 30, 0, 2 * Math.PI); // Draw a cricle on the canvas
canva6Draw.fillStyle = "black"; // Set the fill color to black
canva6Draw.globalAlpha = 1;
canva6Draw.fill(); // Fill the path with black color
canva6Draw.closePath(); // Close the path
canva6Draw.stroke(); // draw!


