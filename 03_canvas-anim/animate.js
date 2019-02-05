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


//initializing function that starts the necessary methods and prevents several frames from starting
var init = function(e)
{
	//if requestID is null, that means no animation is running
	if (requestID != null)
	{
		e.preventDefault();
		console.log("Already animating, this button does NOTHING");
	}
	else
	{
		console.log("Starting animation!");
		requestID = window.requestAnimationFrame(drawDot);
	}
};

//main function to be called by init
var drawDot = function()
{
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
	ctx.stroke;
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

//link up the releveant event listeners to the buttons 'circle' and 'stop'
document.getElementById('circle').addEventListener('click', init);
document.getElementById('stop').addEventListener('click', stopIt);
