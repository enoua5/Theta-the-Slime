document.addEventListener('keydown', function(event)
{
	if(working)
	{
		event.preventDefault();
		var key=event.keyCode
		if(key===69)
		{
			death();
		}
		if((key===38||key===32||key===87)&&!holdingDownJump&&(dubJump||checkCollisions(0,1)[1,0]==="block"||checkCollisions(0,1)[1,1]==="block"))
		{
			jumpReq=1;
			holdingDownJump=1;
		}
		if(key===37||key===65)
		{
			direction=-1;
			facingRight=0;
		}
		else if(key===68||key===39)
		{
			direction=1;
			facingRight=1;
		}
	}
}, false);
document.addEventListener('keyup', function(event)
{
	if(working)
	{
		event.preventDefault();
		var key=event.keyCode
		if((key===37||key===65)&&direction===-1)
		{
			direction=0;
		}
		if((key===68||key===39)&&direction===1)
		{
			direction=0
		}
		if(key===38||key===32||key===87)
		{
			holdingDownJump=0;
		}
	}
}, false);
