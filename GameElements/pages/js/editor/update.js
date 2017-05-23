function updatePlayer()
{
	var pos=[0,0];
	for(x=0; x<30;x++)
	{
		for(y=0; y<17; y++)
		{
			if(levelData[x][y]===1)
			{
				pos=[x,y]
			}
		}
	}
	filter="blur("+filters.blur+"px) brightness("+filters.brightness+"%) contrast("+filters.contrast+"%) grayscale("+filters.grayscale+"%) hue-rotate("+filters.hue+"deg) invert("+filters.invert+"%) opacity("+filters.opacity+"%) saturate("+filters.saturate+"%) sepia("+filters.sepia+"%)";
	document.getElementById("playerStats").innerHTML=".type1{background:url(../chars/"+player+"/"+player+".png);width:40px;height:40px;border: 1px solid black;background-position: -120px -120px; -webkit-filter: "+filter+"}"
	document.getElementById("player").style.left=(pos[0]*40)+"px";
	document.getElementById("player").style.top=(pos[1]*40)+"px";
	//document.getElementById("player").style.backgroundPosition="-120px -120px"
	document.getElementById("workarea").style.background="url(../backgrounds/"+theme+".png)";
	level.data=levelData;
	level.name=document.getElementById("name").value;
	level.player=player;
	level.theme = theme;
	level.sub = document.getElementById("sub").value;
	var radioElements = document.getElementsByName("block");
	for(var i=0; i < radioElements.length; i++)
	{
	    if(radioElements[i].checked) 
	    {
	        selected=parseInt(radioElements[i].value)
	        break;
	    }
	}
	level.music=music;
	updateCode();
	setTimeout(updatePlayer,20);
}
