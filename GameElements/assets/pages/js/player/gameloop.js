function gamePlay()
{
	document.getElementById("player").style.left=playerPos[0]+"px";
	document.getElementById("player").style.top=playerPos[1]+"px";
	if(working)
	{
	    onGroundOverride = false;
        /*
	    if (gravity > 0)
	    {
	        if (checkCollisions()[0][0] === "up" || checkCollisions()[0][1] === "up" || checkCollisions()[1][0] === "up" || checkCollisions()[1][1] === "up")
	        {
	            originalGravity = -1 * originalGravity;
	            jumpPower = jumpPower * -1;
	            dubJumpPower = dubJumpPower * -1;
	            document.getElementById('player').style.background = 'url(' + path + '/chars/' + workingLevel.player + '/upsidedown.png)';
	            fallSpeed = 0;
	        }
	    }
	    else if (gravity < 0)
	    {
	        if (checkCollisions()[0][0] === "down" || checkCollisions()[0][1] === "down" || checkCollisions()[1][0] === "down" || checkCollisions()[1][1] === "down")
	        {
	            originalGravity = -1 * originalGravity;
	            jumpPower = jumpPower * -1;
	            dubJumpPower = dubJumpPower * -1;
	            document.getElementById('player').style.background = 'url(' + path + '/chars/' + workingLevel.player + '/' + workingLevel.player + '.png)';
	            fallSpeed = 0;
	        }
	    }
        */
	    if (gravity >= 0&&fallSpeed>=0)
	    {
	        if(checkCollisions(0, Math.sign(gravity) * 2)[0][1] === "spring")
	        {
	            springX = getPlayerBlock()[0];
	            springY = getPlayerBlock()[1] + 1;
	            document.getElementById(springX + "x" + springY).style.backgroundImage = "url(" + path + "/stageimg/springboard_compressed.png)";
                resetCode += "document.getElementById(" + springX + " + 'x' + " + springY + ").style.backgroundImage = 'url(' + path + '/stageimg/springboard_normal.png)';"
                onGroundOverride = true;
	        }
	        if(checkCollisions(0, Math.sign(gravity) * 2)[1][1] === "spring")
	        {
	            springX = getPlayerBlock()[0] + 1;
	            springY = getPlayerBlock()[1] + 1;
	            document.getElementById(springX + "x" + springY).style.backgroundImage = "url(" + path + "/stageimg/springboard_compressed.png)";
	            resetCode += "document.getElementById(" + springX + " + 'x' + " + springY + ").style.backgroundImage = 'url(' + path + '/stageimg/springboard_normal.png)';"
	            onGroundOverride = true;
	        }
	        if (onGroundOverride)
	        {
	            sfx.jump.play();
	            fallSpeed = Math.min(((Math.abs(fallSpeed) * -1)/1.1), -15);
			    dubJump=1;
		    }
	        setTimeout(function () { eval(resetCode); resetCode="" },500)
	    }
        /*
	    if (gravity <= 0 && fallSpeed <= 0) {
	        if (checkCollisions(0, Math.sign(gravity) * 2)[0][0] === "spring") {
	            springX = getPlayerBlock()[0];
	            springY = getPlayerBlock()[1];
	            document.getElementById(springX + "x" + springY).style.backgroundImage = "url(" + path + "/stageimg/springboard_compressed_up.png)";
	            resetCode += "document.getElementById(" + springX + " + 'x' + " + springY + ").style.backgroundImage = 'url(' + path + '/stageimg/springboard_normal.png)';"
	            onGroundOverride = true;
	        }
	        if (checkCollisions(0, Math.sign(gravity) * 2)[1][0] === "spring") {
	            springX = getPlayerBlock()[0] + 1;
	            springY = getPlayerBlock()[1];
	            document.getElementById(springX + "x" + springY).style.backgroundImage = "url(" + path + "/stageimg/springboard_compressed_up.png)";
	            resetCode += "document.getElementById(" + springX + " + 'x' + " + springY + ").style.backgroundImage = 'url(' + path + '/stageimg/springboard_normal.png)';"
	            onGroundOverride = true;
	        }
	        if (onGroundOverride) {
	            fallSpeed = Math.min(((Math.abs(fallSpeed)) / 1.1), 15);
	            dubJump = 1;
	        }
	        setTimeout(function () { eval(resetCode); resetCode = "" }, 500)
	    }
        */
		if(checkCollisions()[0][0]==="water"||checkCollisions()[0][1]==="water"||checkCollisions()[1][0]==="water"||checkCollisions()[1][1]==="water")
		{
			speed=3;
			fallSpeed=fallSpeed/2;
			dubJump=true;
			dubJumpPower=dubJumpPower*(2/3);
			inWater = true;
		}
	    else
		{
		    inWater = false;
		}
		if (!lFrameInWater && inWater)
		{
		    //water splash?
		    //sfx.splash.play();
		}
		sideBuffer = 1;
		for(i=0; i<speed; i++)
		{
			if(direction===-1)
			{
			    if ((checkCollisions(0-sideBuffer)[0][0] !== "block" && checkCollisions(-sideBuffer)[0][1] !== "block") && (checkCollisions(0 - sideBuffer)[0][0] !== "leftConvey" && checkCollisions(0 - sideBuffer)[0][1] !== "leftConvey") && (checkCollisions(0 - sideBuffer)[0][0] !== "rightConvey" && checkCollisions(0 - sideBuffer)[0][1] !== "rightConvey") && (checkCollisions(0 - sideBuffer)[0][0] !== "spring" && checkCollisions(0 -  sideBuffer)[0][1] !== "spring"))
				{
					playerPos[0]--;
	document.getElementById("player").style.left=playerPos[0]+"px";
	document.getElementById("player").style.top=playerPos[1]+"px";
				}
			}
			if(direction===1)
			{
			    if ((checkCollisions( sideBuffer)[1][0] !== "block" && checkCollisions( sideBuffer)[1][1] !== "block") && (checkCollisions( sideBuffer)[1][0] !== "leftConvey" && checkCollisions( sideBuffer)[1][1] !== "leftConvey") && (checkCollisions( sideBuffer)[1][0] !== "rightConvey" && checkCollisions( sideBuffer)[1][1] !== "rightConvey") && (checkCollisions( sideBuffer)[1][0] !== "spring" && checkCollisions( sideBuffer)[1][1] !== "spring"))
				{
					playerPos[0]++;
	document.getElementById("player").style.left=playerPos[0]+"px";
	document.getElementById("player").style.top=playerPos[1]+"px";
				}
			}
		}
		if((checkCollisions(0,Math.sign(gravity)*(i+1))[0][1]=="leftConvey"||checkCollisions(0,Math.sign(gravity)*(i+1))[1][1]=="leftConvey"))
		{
			for(i=0; i<5; i++)
			{
			    if ((checkCollisions(0 - sideBuffer)[0][0] !== "block" && checkCollisions(0 - sideBuffer)[0][1] !== "block") && (checkCollisions(0 - sideBuffer)[0][0] !== "leftConvey" && checkCollisions(0 - sideBuffer)[0][1] !== "leftConvey") && (checkCollisions(0 - sideBuffer)[0][0] !== "rightConvey" && checkCollisions(0 - sideBuffer)[0][1] !== "rightConvey") && (checkCollisions(0 - sideBuffer)[0][0] !== "spring" && checkCollisions(0 - sideBuffer)[0][1] !== "spring"))
				{
					//console.log("so, get this: if i move left from "+playerPos[0])
					playerPos[0]--;
	document.getElementById("player").style.left=playerPos[0]+"px";
	document.getElementById("player").style.top=playerPos[1]+"px";
					//console.log("i get "+playerPos[0])
				}
			}
		}
		if((checkCollisions(0,Math.sign(gravity)*(i+1))[0][1]=="rightConvey"||checkCollisions(0,Math.sign(gravity)*(i+1))[1][1]=="rightConvey"))
		{
			for(i=0; i<5; i++)
			{
			    if ((checkCollisions(sideBuffer)[1][0] !== "block" && checkCollisions(sideBuffer)[1][1] !== "block") && (checkCollisions(sideBuffer)[1][0] !== "leftConvey" && checkCollisions(sideBuffer)[1][1] !== "leftConvey") && (checkCollisions(sideBuffer)[1][0] !== "rightConvey" && checkCollisions(sideBuffer)[1][1] !== "rightConvey") && (checkCollisions(sideBuffer)[1][0] !== "spring" && checkCollisions(sideBuffer)[1][1] !== "spring"))
				{
					playerPos[0]++;
	document.getElementById("player").style.left=playerPos[0]+"px";
	document.getElementById("player").style.top=playerPos[1]+"px";
				}
			}
		}
		debug=0;
		if(checkCollisions()[0][0]==="spike"||checkCollisions()[0][1]==="spike"||checkCollisions()[1][0]==="spike"||checkCollisions()[1][1]==="spike")
		{
			death();
		}
		if (gravity > 0) {
		    onGround = (((checkCollisions(0, Math.sign(gravity))[0][1] === "block" || checkCollisions(0, Math.sign(gravity))[1][1] === "block") || (checkCollisions(0, Math.sign(gravity))[0][1] === "leftConvey" || checkCollisions(0, Math.sign(gravity))[1][1] === "leftConvey") || (checkCollisions(0, Math.sign(gravity))[0][1] === "rightConvey" || checkCollisions(0, Math.sign(gravity))[1][1] === "rightConvey") || (checkCollisions(0/*, Math.sign(gravity)*/)[0][1] === "spring" || checkCollisions(0 /*,Math.sign(gravity)*/)[1][1] === "spring")) && !onGroundOverride);
		    if(onGroundOverride)
		    {
                //console.log("this is being displayed because onGroundOverride is true:"+onGroundOverride)
		        //console.log("over " + onGround +":"+ ((checkCollisions(0, Math.sign(gravity) * 2)[0][1] === "block" || checkCollisions(0, Math.sign(gravity) * 2)[1][1] === "block") || (checkCollisions(0, Math.sign(gravity) * 2)[0][1] === "leftConvey" || checkCollisions(0, Math.sign(gravity) * 2)[1][1] === "leftConvey") || (checkCollisions(0, Math.sign(gravity) * 2)[0][1] === "rightConvey" || checkCollisions(0, Math.sign(gravity) * 2)[1][1] === "rightConvey") || (checkCollisions(0/*, Math.sign(gravity)*/)[0][1] === "spring" || checkCollisions(0 /*,Math.sign(gravity)*/)[1][1] === "spring")) + "&&" + !onGroundOverride);
		    }
		}
		else
		    onGround = (((checkCollisions(0, Math.sign(gravity))[0][0] === "block" || checkCollisions(0, Math.sign(gravity))[1][0] === "block") || (checkCollisions(0, Math.sign(gravity))[0][0] === "leftConvey" || checkCollisions(0, Math.sign(gravity))[1][0] === "leftConvey") || (checkCollisions(0, Math.sign(gravity))[0][0] === "rightConvey" || checkCollisions(0, Math.sign(gravity))[1][0] === "rightConvey") || (checkCollisions(0, Math.sign(gravity))[0][0] === "spring" || checkCollisions(0, Math.sign(gravity))[1][0] === "spring")) && !onGroundOverride);
	    //console.log(checkCollisions(0,2)[0][1]+"||"+checkCollisions(0,2)[1][1])
        //console.log(onGround)
		if(onGround)
		{
			dubJump=1;
			fallSpeed=0;
			if(!lFrameGround)
			{
				sfx.landing.play()
			}
		}
		if(jumpReq&&onGround)
		{
			sfx.jump.play();
			fallSpeed=0-jumpPower;
			jumpReq=0;
			//console.log("jump activated");
			//console.log(fallSpeed);
		}
		if(jumpReq&&dubJump)
		{
			sfx.dubJump.play();
			fallSpeed=0-dubJumpPower;
			jumpReq=0;
			dubJump=0;
			//console.log("jump activated");
			//console.log(fallSpeed);
		}
		jumpReq = 0;
		vertBuffer = 1;
		for(i=0; i<Math.abs(fallSpeed); i++)
		{
			//falling
			if(fallSpeed>=0)
			{
			    if ((checkCollisions(0, (0 + vertBuffer))[0][1] !== "block" && checkCollisions(0, (0 + vertBuffer))[1][1] !== "block") && (checkCollisions(0, (0 + vertBuffer))[0][1] !== "leftConvey" && checkCollisions(0, (0 + vertBuffer))[1][1] !== "leftConvey") && (checkCollisions(0, (0 + vertBuffer))[0][1] !== "rightConvey" && checkCollisions(0, (0 + vertBuffer))[1][1] !== "rightConvey") && (checkCollisions(0, (0 + vertBuffer))[0][1] !== "spring" && checkCollisions(0, (0 + vertBuffer))[1][1] !== "spring"))
				{
					playerPos[1]++;
	document.getElementById("player").style.left=playerPos[0]+"px";
	document.getElementById("player").style.top=playerPos[1]+"px";
			    }
			}
			//raising
			if(fallSpeed<0)
			{
			    if ((checkCollisions(0, (0 - vertBuffer))[0][0] !== "block" && checkCollisions(0, (0 - vertBuffer))[1][0] !== "block") && (checkCollisions(0, (0 - vertBuffer))[0][0] !== "leftConvey" && checkCollisions(0, (0 - vertBuffer))[1][0] !== "leftConvey") && (checkCollisions(0, (0 - vertBuffer))[0][0] !== "rightConvey" && checkCollisions(0, (0 - vertBuffer))[1][0] !== "rightConvey") && (checkCollisions(0, (0 - vertBuffer))[0][0] !== "spring" && checkCollisions(0, (0 - vertBuffer))[1][0] !== "spring"))
				{
					playerPos[1]--;
	document.getElementById("player").style.left=playerPos[0]+"px";
	document.getElementById("player").style.top=playerPos[1]+"px";
				}
				else
				{
					fallSpeed=0;
				}
			}
		}
		fallSpeed+=gravity;
		if(playerPos[1]>680)
			death();
		if(coinCounter<256)
		{
		if(checkCollisions()[0][0]==="coin")
		{
			coinCounter++;
			//console.log("p"+getPlayerBlock()[0]+"x"+getPlayerBlock()[1])
			document.getElementById("p"+getPlayerBlock()[0]+"x"+getPlayerBlock()[1]).style.display="none"
			document.getElementById(getPlayerBlock()[0]+"x"+getPlayerBlock()[1]).className="air"
			document.getElementById(getPlayerBlock()[0]+"x"+getPlayerBlock()[1]).style.background="url("+path+"/backgrounds/"+workingLevel.theme+"/back.png);";
			document.getElementById(getPlayerBlock()[0]+"x"+getPlayerBlock()[1]).style.backgroundPosition="-"+(getPlayerBlock()[0]*40)+"px -"+(getPlayerBlock()[1]*40)+"px"
			sfx.coin.play()
		}
		if(checkCollisions()[0][1]==="coin")
		{
			coinCounter++;
			//console.log("p"+getPlayerBlock()[0]+"x"+(getPlayerBlock()[1]+1))
			document.getElementById("p"+getPlayerBlock()[0]+"x"+(getPlayerBlock()[1]+1)).style.display="none"
			document.getElementById(getPlayerBlock()[0]+"x"+(getPlayerBlock()[1]+1)).className="air"
			document.getElementById(getPlayerBlock()[0]+"x"+(getPlayerBlock()[1]+1)).style.background="url("+path+"/backgrounds/"+workingLevel.theme+"/back.png);";
			document.getElementById(getPlayerBlock()[0]+"x"+(getPlayerBlock()[1]+1)).style.backgroundPosition="-"+(getPlayerBlock()[0]*40)+"px -"+((getPlayerBlock()[1]+1)*40)+"px"
			sfx.coin.play()
		}
		if(checkCollisions()[1][0]==="coin")
		{
			coinCounter++;
			//console.log("p"+(getPlayerBlock()[0]+1)+"x"+getPlayerBlock()[1])
			document.getElementById("p"+(getPlayerBlock()[0]+1)+"x"+getPlayerBlock()[1]).style.display="none"
			document.getElementById((getPlayerBlock()[0]+1)+"x"+getPlayerBlock()[1]).className="air"
			document.getElementById((getPlayerBlock()[0]+1)+"x"+getPlayerBlock()[1]).style.background="url("+path+"/backgrounds/"+workingLevel.theme+"/back.png);";
			document.getElementById((getPlayerBlock()[0]+1)+"x"+getPlayerBlock()[1]).style.backgroundPosition="-"+((getPlayerBlock()[0]+1)*40)+"px -"+(getPlayerBlock()[1]*40)+"px"
			sfx.coin.play()
		}
		if(checkCollisions()[1][1]==="coin")
		{
			coinCounter++;
			//console.log("p"+(getPlayerBlock()[0]+1)+"x"+(getPlayerBlock()[1]+1))
			document.getElementById("p"+(getPlayerBlock()[0]+1)+"x"+(getPlayerBlock()[1]+1)).style.display="none"
			document.getElementById((getPlayerBlock()[0]+1)+"x"+(getPlayerBlock()[1]+1)).className="air"
			document.getElementById((getPlayerBlock()[0]+1)+"x"+(getPlayerBlock()[1]+1)).style.background="url("+path+"/backgrounds/"+workingLevel.theme+"/back.png);";
			document.getElementById((getPlayerBlock()[0]+1)+"x"+(getPlayerBlock()[1]+1)).style.backgroundPosition="-"+((getPlayerBlock()[0]+1)*40)+"px -"+((getPlayerBlock()[1]+1)*40)+"px"
			sfx.coin.play()
		}
		}
		document.getElementById("coinScore").innerHTML=coinCounter;
		document.getElementById("deathScore").innerHTML=deathCounter;
		if(checkCollisions()[0][0]==="portal"||checkCollisions()[0][1]==="portal"||checkCollisions()[1][0]==="portal"||checkCollisions()[1][1]==="portal")
			endGame();
		
		//determine displayed player frame
		if(facingRight)
		{	
			//console.log("right")	
			correctPose=pose.right
		}
		else
		{
			//console.log("left")
			correctPose=pose.left
		}
		if(!onGround)
		{
			if(fallSpeed>0)
			{
				correctPose=correctPose.fall
			}
			else
			{
				correctPose=correctPose.jump
			}
			walkFrame=0;
		}
		else if(direction===0)
		{
			correctPose=correctPose.stand
			walkFrame=0;
		}
		else
		{
			correctPose=correctPose.walk[Math.floor(walkFrame)];
			walkFrame+=0.25;
			if(walkFrame>=pose.left.walk.length)
			{
				walkFrame=0;
			}
		}
		document.getElementById("player").style.backgroundPosition="-"+correctPose[0]+"px -"+correctPose[1]+"px"
		lFrameGround = onGround;
		lFrameInWater = inWater;
	}
	gravity=originalGravity;
	speed=6;
	dubJumpPower=OdubJumpPower;
	//probably don't need it this fast
	setTimeout(gamePlay,20)
}
