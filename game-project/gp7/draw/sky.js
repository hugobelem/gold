let stars = [];

function drawSky()
{
	background(29, 53, 87);
}

function drawStars()
{
	for (let s of stars)
    {
        stroke(235, 233, 224);
        strokeWeight(s.w + random(0.4, 0.5));
        point(s.x, s.y);
    }
}