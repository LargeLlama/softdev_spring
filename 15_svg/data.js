d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/2014_world_gdp_with_codes.csv").then( function(d)
	{
		for (var i = 0; i < d.length; i++)
		{
			console.log(d[i]);
		}
	})
