//Databend - Rubin P. and Wei Wen
//SoftDev Pd08
//2019-01-04
//K04 - What is it saving the screen from?


//variables to hold the canvas and the 2d context
const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

//relevant variables
var requestID;				//stores the requestID, initialized to null
var radius = 1;				//sets the inital radius to 1
var growing = true;			//sets the growing variable to true

//logo declared once
var logo = new Image();
logo.src = "logo_dvd.jpg"


//draws the dot
var drawDot = function()
{
	//cancels any previous animation frames, preventing them from "stacking" up
	window.cancelAnimationFrame(requestID);

	//checks if the radius is greater than the canvas width or less than 0
	//if so, swaps the boolean value of growing
	if ( radius >= canvas.width / 2 || radius <= 0)
	{
		growing = !growing
	}

	//if growing, increment radius, otherwise decrement
	if (growing)
	{
		radius++;
	}
	else
	{
		radius--;
	}

	//clear the canvas before redrawing
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	//draw the ellipse with the specified dimensions
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.ellipse(canvas.width / 2, canvas.height / 2, radius, radius, 0, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();

	//set the request ID to the return value of requestAnimationFrame, and call this method again
	requestID = window.requestAnimationFrame(drawDot);
};

//stops the growth, and prints a message if growth already stopped
var stopIt = function(e)
{
	if (requestID == null)
	{
		e.preventDefault();																//prevents default action of the stop mechanism from running
		console.log("Animation already stopped, this button does nothing!");			//prints this message instead
	}
	else
	{
		console.log("request ID is " + requestID + ", animation has been STOPPED");		//prints message
		window.cancelAnimationFrame(requestID);											//cancels the animation frame
		requestID = null;																//resets value of requestID to null
	}
};

var dvdLogoSetup = function()
{
	window.cancelAnimationFrame(requestID);												//cancel existing animations

	//set the width and height of the logo
	var dvdWidth = 100; 
	var dvdHeight = 50;

	//set the x and y coordinate to a random int within the canvas
	var dvdX = Math.floor(Math.random() * (canvas.width - dvdWidth));
	var dvdY = Math.floor(Math.random() * (canvas.height - dvdHeight));

	//x and y velocity
	var xVel = 1;
	var yVel = 1;

	//function inside the setup function - necessary to carry over variables
	//without having to constantly "setup" and have the logo appear in a random spot
	//on the canvas
	var dvdLogo = function()
	{
		//clear the entire canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		//draw the logo with the specified parameters at the x and y coordinate variables
		ctx.drawImage(logo, dvdX, dvdY, dvdWidth, dvdHeight);

		//bouncing physics:
		//if x + 100 is greater than canvas width, or the x is less than/equal to 0, reverse x velocity
		//if y + 50 is greater than canvas height, or the y is less than/equal to 0, reverse y velocity
		if (dvdX + dvdWidth >= canvas.width || dvdX <= 0)
		{
			xVel = -1 * xVel;
		}
		else if (dvdY + dvdHeight >= canvas.height || dvdY <= 0)
		{
			yVel = -1 * yVel;
		}

		//console.log("x: " + dvdX + "\ny: " + dvdY);	debugging

		//increment/decrement the x and y coordinates by their respective velocities
		dvdX += xVel;
		dvdY += yVel;

		//set the requestID and request an animation frame to run this inner function again
		requestID = window.requestAnimationFrame(dvdLogo);
	};

	//run the function we just declared
	dvdLogo();
};

//link up the releveant event listeners to the buttons 'circle,' 'stop,' and 'dvd'
document.getElementById('circle').addEventListener('click', drawDot);
document.getElementById('stop').addEventListener('click', stopIt);
document.getElementById('dvd').addEventListener('click', dvdLogoSetup);		//note that it runs the SETUP function, not the logo function
