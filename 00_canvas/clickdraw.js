const canvas = document.getElementById("slate");
const ctx = canvas.getContext("2d");
var drawRect = true;

document.getElementById('draw').addEventListener('click', function(e)
	{
		drawRect = !drawRect;
	});

document.getElementById('clear').addEventListener('click', function(e)
	{
		ctx.clearRect(0, 0, 600, 600);
	});

canvas.addEventListener('click', function(e)
	{
		if (drawRect)
		{
			//var mousePos = canvas.getMousePos(canvas, e);
			//ctx.fillRect(mousePos.x, mousePos.y, 100, 100);
			ctx.fillRect(50, 50, 100, 100);
		}
		else
		{
			alert('UwU');
		}
	});
