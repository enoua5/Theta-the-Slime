function displaySelect()
{
	var box=document.getElementById("levels");
	//just making it easier to add more later
	var x=0;
	var y = 0;
	if (requestedPack == "?premade" ||
		requestedPack == "?bonus"||
		requestedPack=="?special")
	{
	    levels=packs[requestedPack.split("?")[1]];
	    for (i = 0; i < levels.length; i++)
	    {
		d={
			"?premade":d,
			"?bonus":db,
			"?special":ds
		}[requestedPack];
		c={
			"?premade":c,
			"?bonus":cb,
			"?special":cs
		}[requestedPack];
		maxc={
			"?premade":maxc1,
			"?bonus":maxc2,
			"?special":maxc3
		}[requestedPack];
	        box.innerHTML += "<div class='level' style='top:" + ((y * 250) + 100) + "px;left:" + ((x * 250) + 250) + "px;' onClick='localStorage.reloaded=\"0\";location.assign(\"player.html\"+location.search+\"&"+i+"\")'>" + (i + 1) + "</div><div  class='stat' id='stats" + i + "' style='top:" + ((y * 250) + 200) + "px;left:" + ((x * 250) + 250) + "px; position: absolute;'><div style='display:inline-block; background:url(" + path + "/chars/0/splat1.png); width: 15px; height: 15px; position: absolute; top: 5px; left:5px; background-size: contain'></div><span id='deathCount" + i + "'>" + d[i] + "</span><br><div style='display:inline-block;position: absolute; left: 5px; top: 20px; background:url(" + path + "/stageimg/coin.gif); height: 15px; width: 15px;background-size:contain'></div><span id='coinCount" + i + "'>" + c[i] + "/"+maxc[i]+"</span></div>";
	        x++;
	        if (x > 2) {
	            x = 0;
	            y++;
	        }
	    }
	}
	if (requestedPack == "?custom")
	{
	    console.log(levels)
	    for (i = 0; i < levels.length; i++) {
	        box.innerHTML += "<div class='level' style='top:" + ((y * 250) + 100) + "px;left:" + ((x * 250) + 250) + "px;' onClick='localStorage.reloaded=\"0\";location.assign(\"player.html\"+location.search+\"&"+i+"\")'>" + (i + 1) + "</div><div  class='stat' id='update" + i + "' style='top:" + ((y * 250) + 200) + "px;left:" + ((x * 250) + 250) + "px; position: absolute;' onClick='uploadCustom(" + i + ")'>upload level</div>";
	        x++;
	        if (x > 2) {
	            x = 0;
	            y++;
	        }
	    }
	}
	box.innerHTML+="<div style='position: absolute; top: 0;height: "+(((y)*250)+300)+"px; width: 10px'></div>";
	document.body.innerHTML+="<div style='width: 120px; height: 30px; position: absolute; top:0; right: 0; background:url("+path+"/stageimg/home.png)' onClick='home()'></div>";
	document.body.innerHTML+="<div style='width: 120px; height: 30px; position: absolute; top:0; right: 150px; background:url("+path+"/stageimg/back.png)' onClick='back()'></div>";
	document.getElementById("loadingThing").innerHTML="";
}
function toSelect()
{
	localStorage.reloaded="0";
	location.reload();
}
