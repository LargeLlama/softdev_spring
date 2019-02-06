//Databend - Rubin P. and Wei Wen
//SoftDev Pd08
//2019-01-04
//K03 - They lock us in the tower whenever we get caught

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


//initializing function that starts the necessary methods and prevents several frames from starting
var drawDot = function()
{
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

var dvdLogoSetup = function(e)
{
	window.cancelAnimationFrame(requestID);

	var dvdWidth = 100; 
	var dvdHeight = 50;
	var dvdX = Math.floor(Math.random() * (canvas.width - dvdWidth));
	var dvdY = Math.floor(Math.random() * (canvas.height - dvdHeight));

	var xVel = 1;
	var yVel = 1;

	var dvdLogo = function()
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.drawImage(logo, dvdX, dvdY, dvdWidth, dvdHeight);

		if (dvdX >= canvas.width || dvdX <= 0)
		{
			xVel = -1 * xVel;
		}
		else if (dvdY >= canvas.height || dvdY <= 0)
		{
			yVel = -1 * yVel;
		}


		dvdX += xVel;
		dvdY += yVel;

		window.requestAnimationFrame(dvdLogo);
	};

	dvdLogo();
};

//link up the releveant event listeners to the buttons 'circle' and 'stop'
document.getElementById('circle').addEventListener('click', drawDot);
document.getElementById('stop').addEventListener('click', stopIt);
document.getElementById('dvd').addEventListener('click', dvdLogoSetup);
