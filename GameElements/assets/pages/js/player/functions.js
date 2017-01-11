function death()
{
	document.getElementById("splats").innerHTML+="<div class='splat' id='splat"+(totalDeaths+1)+"' style='width:240px; height: 240px; position: absolute; -webkit-transform: rotate("+(Math.floor(Math.random()*360))+"deg); left:"+(playerPos[0]-100)+"px; top:"+(playerPos[1]-100)+"px; background:url("+path+"/chars/"+workingLevel.player+"/splat"+Math.ceil(Math.random()*2)+".png)'></div>";
	playerPos=[respawn[0],respawn[1]];
	document.getElementById("player").style.left=playerPos[0]+"px";
	document.getElementById("player").style.top=playerPos[1]+"px";
	jumpReq=0;
	dubJump=0;
	fallSpeed=0;
	if(deathCounter<255)
	    deathCounter++;
	totalDeaths++;
	sfx.death.play();
	working=false;
	direction=0;
	holdingDownJump=0;
	setTimeout(function(){working=true;},500);
}
function getPlayerBlock(offsetX,offsetY)
{
	if(offsetX===undefined)
		offsetX=0;
	if(offsetY===undefined)
		offsetY=0;
	return ([Math.floor((playerPos[0]+offsetX)/40),Math.floor((playerPos[1]+offsetY)/40)])
}
function getBlockData(bx,by)
{
    if (bx >= -1 && by >= -1 && bx <= 30 && by <= 17)
        return document.getElementById(bx + "x" + by).className
    else
        return undefined;
}
function addBlock(data,x,y)
{
	var block="";
	if(data.id==undefined)
	{
		//air
		if(data===0||data===1)
			blocks.innerHTML+="<div id='"+x+"x"+y+"' class='air' style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/backgrounds/"+workingLevel.theme+".png); background-position: -"+(x*40)+"px -"+(y*40)+"px'></div>";
		//block
		if(data===2)
		    blocks.innerHTML += "<div id='" + x + "x" + y + "' class='block' style='background-position: -" + (x * 40) + "px -" + (y * 40) + "px; width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px;'></div>";
		//up spike
		if(data===3)
			blocks.innerHTML+="<div id='"+x+"x"+y+"' class='spike' style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/backgrounds/"+workingLevel.theme+".png); background-position: -"+(x*40)+"px -"+(y*40)+"px;clip-path: url(#upspike)'></div>";
		//right spike
		if(data===4)
			blocks.innerHTML+="<div id='"+x+"x"+y+"' class='spike' style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/backgrounds/"+workingLevel.theme+".png); background-position: -"+(x*40)+"px -"+(y*40)+"px;clip-path: url(#rightspike)'></div>";
		//down spike
		if(data===5)
			blocks.innerHTML+="<div id='"+x+"x"+y+"' class='spike' style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/backgrounds/"+workingLevel.theme+".png); background-position: -"+(x*40)+"px -"+(y*40)+"px;clip-path: url(#downspike)'></div>";
		//left spike
		if(data===6)
			blocks.innerHTML+="<div id='"+x+"x"+y+"' class='spike' style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/backgrounds/"+workingLevel.theme+".png); background-position: -"+(x*40)+"px -"+(y*40)+"px;clip-path: url(#leftspike)'></div>";
		//portal
		if(data===7)
		{
			blocks.innerHTML+="<div id='"+x+"x"+y+"' class='portal' style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/backgrounds/"+workingLevel.theme+".png); background-position: -"+(x*40)+"px -"+(y*40)+"px'></div>";
			document.getElementById("playerArea").innerHTML+="<div id='p"+x+"x"+y+"' class='portal' style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/stageimg/portal.png);'></div>";
		}
		//coin
		if(data===8)
		{
			blocks.innerHTML+="<div id='"+x+"x"+y+"' class='coin' style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/backgrounds/"+workingLevel.theme+".png); background-position: -"+(x*40)+"px -"+(y*40)+"px'></div>";
			document.getElementById("playerArea").innerHTML+="<div id='p"+x+"x"+y+"' class='coin' style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/stageimg/coin.gif);'></div>";
		}
	    //lava
		if (data === 9) {
		    blocks.innerHTML += "<div id='" + x + "x" + y + "' class='spike' style='width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px; background:url(" + path + "/stageimg/lava.gif); background-position: -" + (x * 40) + "px -" + (y * 40) + "px'></div>";
		}
		//water
		if (data === 10) {
		    blocks.innerHTML += "<div id='" + x + "x" + y + "' class='water' style='width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px; background:url(" + path + "/stageimg/water.gif); background-position: -" + (x * 40) + "px -" + (y * 40) + "px'></div>";
		}
		//left conveyer
		if (data === 11) {
		    blocks.innerHTML += "<div id='" + x + "x" + y + "' class='leftConvey' style='width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px; background:url(" + path + "/stageimg/conveyLeft.gif); background-position: -" + (x * 40) + "px -" + (y * 40) + "px'></div>";
		}
		//right conveyer
		if (data === 12) {
		    blocks.innerHTML += "<div id='" + x + "x" + y + "' class='rightConvey' style='width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px; background:url(" + path + "/stageimg/conveyRight.gif); background-position: -" + (x * 40) + "px -" + (y * 40) + "px'></div>";
		}
		    //spring
		if (data === 13) {
		    //so springs don't allow splats behind
		    blocks.innerHTML+="<div style='width: 40px; height: 40px; position: absolute; top:"+(y*40)+"px;left:"+(x*40)+"px; background:url("+path+"/backgrounds/"+workingLevel.theme+".png); background-position: -"+(x*40)+"px -"+(y*40)+"px'></div>"
		    blocks.innerHTML += "<div id='" + x + "x" + y + "' class='spring' style='width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px; background:url(" + path + "/stageimg/springboard_normal.png); background-position: -" + (x * 40) + "px -" + (y * 40) + "px'></div>";
		}
		    //up gravity
		if (data === 14) {
		    blocks.innerHTML += "<div style='width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px; background:url(" + path + "/backgrounds/" + workingLevel.theme + ".png); background-position: -" + (x * 40) + "px -" + (y * 40) + "px'></div>"
		    blocks.innerHTML += "<div id='" + x + "x" + y + "' class='up' style='width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px; background:url(" + path + "/stageimg/upgravity.png); background-position: -" + (x * 40) + "px -" + (y * 40) + "px'></div>";
		}
		    //down gravity
		if (data === 15) {
		    blocks.innerHTML += "<div style='width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px; background:url(" + path + "/backgrounds/" + workingLevel.theme + ".png); background-position: -" + (x * 40) + "px -" + (y * 40) + "px'></div>"
		    blocks.innerHTML += "<div id='" + x + "x" + y + "' class='down' style='width: 40px; height: 40px; position: absolute; top:" + (y * 40) + "px;left:" + (x * 40) + "px; background:url(" + path + "/stageimg/downgravity.png); background-position: -" + (x * 40) + "px -" + (y * 40) + "px'></div>";
		}
		
	}
	blocks.innerHTML+=block;
}
//pass this function two elements, and it will return their overlap status
function overlap(rect1, rect2,offsetX,offsetY)
{
	rect1=rect1.getBoundingClientRect();
	rect2=rect2.getBoundingClientRect();
	return !(rect1.right+offsetX <= rect2.left || rect1.left+offsetX >= rect2.right || rect1.bottom+offsetY <= rect2.top || rect1.top+offsetY >= rect2.bottom);
}
function checkCollisions(offsetX,offsetY)
{
	if(offsetX===undefined)
		offsetX=0;
	if(offsetY===undefined)
		offsetY=0;
	//0,0 is player block. 1,0 is right of the player. 0,1 is below the player. 1,1 is bottom right of the player.
	//these are everything he can be touching
	colides=[[undefined,undefined],[undefined,undefined]];
	check=getPlayerBlock(offsetX,offsetY);
	//he is always touching the top left, as that's his reported position
	if(check[0]>=-1&&check[1]>=-1&&check[0]<=30&&check[1]<=17)
	{
	    colides[0][0] = getBlockData(check[0], check[1]);
	}
	if(check[0]>=-1&&check[1]>=-1&&check[0]<=30&&check[1]<=16)
	{
		//console.log((check[0]+0)+"x"+(check[1]+1))
		if(overlap(document.getElementById("player"),document.getElementById((check[0]+0)+"x"+(check[1]+1)),offsetX,offsetY))
		{
			colides[0][1]=getBlockData(check[0]+0,check[1]+1);
		}
	}
	if(check[0]>=-1&&check[1]>=-1&&check[0]<=29&&check[1]<=17)
	{
		//console.log((check[0]+1)+"x"+(check[1]+0))
		if(overlap(document.getElementById("player"),document.getElementById((check[0]+1)+"x"+(check[1]+0)),offsetX,offsetY))
		{
			colides[1][0]=getBlockData(check[0]+1,check[1]+0);
		}
	}
	if(check[0]>=-1&&check[1]>=-1&&check[0]<=29&&check[1]<=16)
	{
		//console.log((check[0]+0)+"x"+(check[1]+1))
		if(overlap(document.getElementById("player"),document.getElementById((check[0]+1)+"x"+(check[1]+1)),offsetX,offsetY))
		{
			colides[1][1]=getBlockData(check[0]+1,check[1]+1);
		}
	}
	if (report)
	{
	    console.log("offsetX: " + offsetX + "; offsetY: " + offsetY);
	    console.log(colides);
	}
	report = false;
	return colides;
}
function endGame()
{
	document.getElementById("loadingScreen").innerHTML = "<h1 stlye='color: white'>loading...</h1>";
	document.getElementById("loadingScreen").style.width = "1200px";
	document.getElementById("levelSelect").style.display = "none";
	setTimeout(function () {
	    working = false;
	    sfx.levelComp.play();
	    workingLoop.pause();
	    document.getElementById("background").style.width = "0px";
	    if (requestedPack == "?premade") {
	        if (coinCounter > c[workingNum]) {
	            //console.log("coin record:"+coinCounter)
	            c[workingNum] = coinCounter;
	            asdf = "";
	            for (n = 0; n < c.length; n++) {
	                asdf += String.fromCharCode(c[n]);
	            }
	            localStorage.e5_goo_coins = asdf;
	            document.getElementById("coinCount" + workingNum).innerHTML = coinCounter;
	        }
	        if (deathCounter < d[workingNum]) {
	            //console.log("death counter"+deathCounter)
	            d[workingNum] = deathCounter;
	            asdf = "";
	            for (n = 0; n < d.length; n++) {
	                asdf += String.fromCharCode(d[n]);
	            }
	            localStorage.e5_goo_deaths = asdf;
	            document.getElementById("deathCount" + workingNum).innerHTML = deathCounter;
	        }
	    }
	    if (requestedPack == "?bonus")
	    {
	        if (coinCounter > cb[workingNum]) {
	            //console.log("coin record:"+coinCounter)
	            cb[workingNum] = coinCounter;
	            asdf = "";
	            for (n = 0; n < cb.length; n++) {
	                asdf += String.fromCharCode(cb[n]);
	            }
	            localStorage.e5_goo_coinsB = asdf;
	            document.getElementById("coinCount" + workingNum).innerHTML = coinCounter;
	        }
	        if (deathCounter < db[workingNum]) {
	            //console.log("death counter"+deathCounter)
	            db[workingNum] = deathCounter;
	            asdf = "";
	            for (n = 0; n < db.length; n++) {
	                asdf += String.fromCharCode(db[n]);
	            }
	            localStorage.e5_goo_deathsB = asdf;
	            document.getElementById("deathCount" + workingNum).innerHTML = deathCounter;
	        }
	    }
	    if (requestedPack == "?special") {
	        if (coinCounter > cs[workingNum]) {
	            //console.log("coin record:"+coinCounter)
	            cs[workingNum] = coinCounter;
	            asdf = "";
	            for (n = 0; n < cs.length; n++) {
	                asdf += String.fromCharCode(cs[n]);
	            }
	            localStorage.e5_goo_coinsS = asdf;
	            document.getElementById("coinCount" + workingNum).innerHTML = coinCounter;
	        }
	        if (deathCounter < ds[workingNum]) {
	            //console.log("death counter"+deathCounter)
	            ds[workingNum] = deathCounter;
	            asdf = "";
	            for (n = 0; n < ds.length; n++) {
	                asdf += String.fromCharCode(ds[n]);
	            }
	            localStorage.e5_goo_deathsS = asdf;
	            document.getElementById("deathCount" + workingNum).innerHTML = deathCounter;
	        }
	    }
	    sfx.levelComp.addEventListener("ended", function () {
	        localStorage.reloaded = "0";
	        location.reload();
	    });
	}, 20);
}
function resetSave()
{
    	if (requestedPack == "?premade")
    	{
    	    	//alert("resetting premade scores")
    	    	delete localStorage.e5_goo_deaths;
    	    	delete localStorage.e5_goo_coins;
    	    	delete localStorage.e5_goo_deathsB;
    	    	delete localStorage.e5_goo_coinsB;
    	    	delete localStorage.e5_goo_deathsS;
    	    	delete localStorage.e5_goo_coinsS;
    	}
    	if (requestedPack == "?bonus")
    	{
    	    	//alert("resetting bonus scores")
    	    	delete localStorage.e5_goo_deathsB;
    	    	delete localStorage.e5_goo_coinsB;
    	    	delete localStorage.e5_goo_deathsS;
    	    	delete localStorage.e5_goo_coinsS;
    	}
    	if (requestedPack == "?special")
    	{
    	    	delete localStorage.e5_goo_deathsS;
    	    	delete localStorage.e5_goo_coinsS;
    	}
	if(requestedPack=="?custom")
	{
		delete localStorage.e5_goo_c1;
		delete localStorage.e5_goo_c2;
		delete localStorage.e5_goo_c3;
	}
	localStorage.reloaded="0";
	location.reload();
}
