workingLevel=undefined;
working=false;
repawn=new Array(2);
playerPos=[0,0];
workingLevel={}
function launchLevel(which)
{
    menuintro.pause();
    menuintro.currentTime = 0;
    menuloop.pause();
    menuloop.currentTime = 0;
    curTime = tick;
	num=which+1;
	which=levels[which];
	workingNum=num-1;
	workingLevel={
		format: which.format,
		data: which.data,
		player: which.player,
		filter: which.filter,
		music: which.music,
		theme: which.theme,
		name: which.name,
		sub: which.sub,
		number: num-1
	}
	lFrameGround=1;
	walkFrame=0;
	coinCounter=0;
	deathCounter=0;
	facingRight=1;
	document.getElementById("background").style.background="url("+path+"/backgrounds/"+workingLevel.theme+".png)";
	document.getElementById("background").style.width="1200px";
	document.getElementById("loadingScreen").style.width="1200px";
	document.getElementById("loadingScreen").innerHTML="<h1 style='color: white'>"+num+". "+workingLevel.name+"</h1><br><h3 style='color: white'>"+workingLevel.sub+"</h3>";
	document.getElementById("pauseButton").style.background="url("+path+"/stageimg/pause.png)";
	workingIntro=music[workingLevel.music].intro;
	workingLoop=music[workingLevel.music].loop;
	//find player
	playerPos=[0,0]
	for(i=0; i<workingLevel.data.length; i++)
	{
		for(j=0; j<(workingLevel.data)[i].length; j++)
		{
			if((workingLevel.data)[i][j]===1)
			{
				//  /yay, backwards stuff!/
				playerPos=[j*40, i*40]
			}
		}
	}
	player=document.getElementById("player");
	player.style.top=playerPos[1]+"px";
	player.style.left=playerPos[0]+"px";
	player.style.background="url("+path+"/chars/"+workingLevel.player+"/"+workingLevel.player+".png)";
	player.style.backgroundPosition="-120px -120px";
	blocks=document.getElementById("data");
	blocks.innerHTML="";
	for(y=-1; y<workingLevel.data.length+1; y++)
	{
		for(x=-1; x<(workingLevel.data)[0].length+1; x++)
		{
			if(x===-1||y===-1||y===workingLevel.data.length||x===(workingLevel.data)[0].length)
				addBlock(1,x,y);
			else
				addBlock(workingLevel.data[y][x],x,y);
		}
	}
	if(workingLevel.filter)
	{
		document.getElementById("filters").innerHTML=".splat{-webkit-filter: "+workingLevel.filter+"} #player{-webkit-filter: "+workingLevel.filter+"}"
	}
	if (requestedPack == "?special" || requestedPack == "?custom")
	{
	    eval(which.special);
	}
	document.getElementById("splats").innerHTML = "";
	//workingIntro.volume = 0.7;
	//workingLoop.volume = 0.7;
	workingIntro.play();
	sfx.coin.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.death.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.jump.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.dubJump.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.landing.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.levelComp.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	workingIntro.volume=parseFloat(localStorage.e5_googame_music_volume);
	workingLoop.volume=parseFloat(localStorage.e5_googame_music_volume);
	workingIntro.addEventListener("ended", function() 
	{
	    workingIntro.pause();
	    workingIntro.currentTime = 0;
	    workingLoop.play();
	    console.log("intro over");
	});
	workingLoop.addEventListener('ended', function () {
	    this.currentTime = 0;
	    this.play();
        console.log("loop over")
	}, false);
	function check()
	{
	    	if (tick >= curTime + 1000)
	    	{
	            //workingIntro.pause();
	            //workingIntro.currentTime = 0;
	            //workingLoop.play();
	            respawn = [playerPos[0], playerPos[1]]
	            working = true;
	            document.getElementById("loadingScreen").style.width = "0";
	            document.getElementById("levelSelect").style.display = "none";
	            setTimeout(function () { document.getElementById("levelSelect").style.display = "inline-block"; }, 20);
	    	}
	    	else
	        	setTimeout(check, 1);
	}
	check();
}
