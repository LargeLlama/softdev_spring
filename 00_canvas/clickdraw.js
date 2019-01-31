//Constant variables
const canvas = document.getElementById("slate");
const ctx = canvas.getContext("2d");

//defines the height and length of the rect
const rect_height = 50;
const rect_length = 50;

//defines the x and y radius of the ellipse
const x_radius = 5;
const y_radius = 5;

//keeps track of what shape to draw
var drawRect = true;

//gets button with id "draw" and runs the following function when clicked
document.getElementById('draw').addEventListener('click', function(e)
	{
		//sets the value of drawRect to opposite of what it is
		drawRect = !drawRect;
	});

//gets button with id "clear" and runs the following function when clicked
document.getElementById('clear').addEventListener('click', function(e)
	{
		//clears the entire screen of any rect
		ctx.clearRect(0, 0, 600, 600);
	});

//function to get mouse position inside the canvas
function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect(); //returns the size of an element and its position relative to the viewport.
	
	//returns the difference between the mouse position on the page and the left/top edge of the canvas
	return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
}
//canvas has already been initialized previously, so use that
//to check when clicked and run the following function
canvas.addEventListener('click', function(e)
	{
		//gets the mousePos, as explained by our function
		var mousePos = getMousePos(canvas, e);

		if (drawRect)	//when drawRect is true, draw a rectangle
		{
			ctx.fillRect(mousePos.x - (rect_length / 2), mousePos.y - (rect_height / 2), rect_length, rect_height);
			//ctx.fillRect(50, 50, 100, 100); testing
		}
		else	//otherwise, draw an ellipse
		{
			ctx.beginPath();	//begin the drawing
			ctx.ellipse(mousePos.x - (x_radius / 4),  mousePos.y - (y_radius / 4), x_radius, y_radius, 0, 0, 2 * Math.PI);	//info regarding ellipse
			ctx.stroke();	//write the drawing to the canvas
		}
	});
