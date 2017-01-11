var specialScripts = {
    moonGravity: ["gravity=","; originalGravity=",";"],
    gravitySwitch: ["function switchG(){originalGravity=-1*originalGravity; jumpPower=-1*jumpPower; dubJumpPower=-1*dubJumpPower; OdubJumpPower=dubJumpPower; console.log('switch'); if(originalGravity\>0){document.getElementById('player').style.background='url('+path+'\/chars\/",  "\/", ".png)'} else{document.getElementById('player').style.background='url('+path+'\/chars\/", "\/upsidedown.png)'} setTimeout(switchG,",")}switchG();"],
    lightFlicker: "setTimeout(function(){document.getElementById('playerArea').innerHTML+=\\\"\<div id='blinder'; style='position:absolute; left: 0; top: 0; height: 680px; width: 1200px; background: black'\>\<\/div\>\\\";document.getElementById('blinder').innerHTML=\\\"\<div style='position: absolute; top: 0; right: 0; width: 40px; height: 40px;' onClick='pause()'\>\<\/div\>\\\"; document.getElementById('blinder').style.width='1200px'; opacity=0; function fade(){document.getElementById('blinder').style.opacity=Math.sin(opacity); opacity+=0.05; setTimeout(fade,20)} fade();},3000);",
    randomJumps: "function jumpy(){if(Math.floor(Math.random()*100)===0){jumpReq=1;} originalGravity=0.5} setInterval(jumpy,10);",
    limitedSplats: ["lastCount=0; function checkAndRemove(){if(lastCount\<totalDeaths){lastCount++; if(lastCount-","\>0){document.getElementById('splat'+(lastCount-",")).style.display='none'}}}setInterval(checkAndRemove,20);"],
    skinRotation: "charNum=0; function updateCharColor(){document.getElementById('player').style.background='url('+path+'\/chars\/'+charNum+'\/'+charNum+'.png)'; workingLevel.player=charNum; charNum++; if(charNum\>6)charNum=0;}setInterval(updateCharColor,500);",
    fireworks: "document.getElementById('playerArea').innerHTML=\\\"\<img src='\\\" + path + \\\"\/stageimg\/firework1.gif' style='position: absolute; left: 0; top: 0;'\>\<img src='\\\" + path + \\\"\/stageimg\/firework2.gif' style='position: absolute; left: 400px; top: 0;'\>\<img src='\\\" + path + \\\"\/stageimg\/firework3.gif' style='position: absolute; left: 800px; top: 0;'\>\\\"+document.getElementById('playerArea').innerHTML;",
    backgroundColor: ["document.getElementById('background').style.background=", ";"],
    corruption: "var avilBlocks=[{id:'air',back: path+'\/backgrounds\/'+workingLevel.theme+'\/back.png'},{id:'block',back: ''},{id:'spike',back: path+'\/backgrounds\/'+workingLevel.theme+'\/up.png'},{id:'spike',back: path+'\/backgrounds\/'+workingLevel.theme+'\/right.png'},{id:'spike',back: path+'\/backgrounds\/'+workingLevel.theme+'\/down.png'},{id:'spike',back: path+'\/backgrounds\/'+workingLevel.theme+'\/left.png'},{id:'spike',back: path + '\/stageimg\/lava.gif'},{id:'water',back: path + '\/stageimg\/water.gif'}];function corrupt(){var currX=Math.floor(Math.random()*30); var currY=Math.floor(Math.random()*17); if(getBlockData(currX,currY)!=='portal'&&(respawn[0]\/40!==currX&&respawn[1]\/40!==currY)){typeToChange=Math.floor(Math.random()*avilBlocks.length);document.getElementById(currX+'x'+currY).className=avilBlocks[typeToChange].id;document.getElementById(currX+'x'+currY).style.background='url('+avilBlocks[typeToChange].back+')';}}setTimeout(function(){setInterval(corrupt, 1000); death=function(){fallSpeed=-20}},4000);"
}
function getSpecialScript()
{
    var output = "";
    if (document.getElementById("moonGravity").checked)
        output += specialScripts.moonGravity[0] + document.getElementById("gravityStrength").value + specialScripts.moonGravity[1] + document.getElementById("gravityStrength").value + specialScripts.moonGravity[2];
    if (document.getElementById("gravitySwitch").checked)
        output += specialScripts.gravitySwitch[0] + level.player + specialScripts.gravitySwitch[1] + level.player + specialScripts.gravitySwitch[2] + level.player + specialScripts.gravitySwitch[3] + (parseFloat(document.getElementById("gravityTimer").value)*100) + level.player + specialScripts.gravitySwitch[4];
    if (document.getElementById("lightflicker").checked)
        output += specialScripts.lightFlicker;
    if (document.getElementById("randomJumps").checked)
        output += specialScripts.randomJumps;
    if (document.getElementById("limitedSplats").checked)
        output += specialScripts.limitedSplats[0] + document.getElementById("splatCount").value + specialScripts.limitedSplats[1] + document.getElementById("splatCount").value + specialScripts.limitedSplats[2];
    if (document.getElementById("skinRotation").checked)
        output += specialScripts.skinRotation;
    if (document.getElementById("fireworks").checked)
        output += specialScripts.fireworks;
    if (document.getElementById("background").checked)
        output += specialScripts.backgroundColor[0] + "'"+document.getElementById("color").value +"'" + ";";
    if (document.getElementById("corruption").checked)
        output += specialScripts.corruption;
    return output;
}
toggled = 0;
function toggleSpecialList()
{
    toggled = !toggled;
    if (toggled)
    {
        document.getElementById("specialList").style.overflow = "visible";
        document.getElementById("specialList").style.height = "auto";
    }
    else
    {
        document.getElementById("specialList").style.overflow = "hidden";
        document.getElementById("specialList").style.height = "0";
    }
}
charToggle=0;
function toggleCharOpt()
{
	charToggle=!charToggle;
	if(charToggle)
	{
		document.getElementById("charopt").style.overflow="visible";
		document.getElementById("charopt").style.height = "auto";
	}
	else
	{
		document.getElementById("charopt").style.overflow = "hidden";
		document.getElementById("charopt").style.height = "0";
	}
}
function resetfilters()
{
	document.getElementById("charopt").innerHTML="\t\t<p style=\"font-size: 11px; color: red; background: black\">Note: these options will be reset when opening a level file!<\/p>\r\n\t\t<p>blur<\/p>\r\n\t\t<input id=\"blur\" type=\"range\" value=\"0\" min=\"0\" max=\"30\" onchange=\"filters.blur=this.value\"><\/input>\r\n\t\t<p>brightness<\/p>\r\n\t\t<input id=\"brightness\" type=\"range\" value=\"100\" min=\"0\" max=\"400\" onchange=\"filters.brightness=this.value\"><\/input>\r\n\t\t<p>contrast<\/p>\r\n\t\t<input id=\"contrast\" type=\"range\" value=\"100\" min=\"0\" max=\"400\" onchange=\"filters.contrast=this.value\"><\/input>\r\n\t\t<p>grey<\/p>\r\n\t\t<input id=\"grey\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" onchange=\"filters.grayscale=this.value\"><\/input>\r\n\t\t<p>hue-rotate<\/p>\r\n\t\t<input id=\"hue\" type=\"range\" value=\"0\" min=\"0\" max=\"360\" onchange=\"filters.hue=this.value\"><\/input>\r\n\t\t<p>invert<\/p>\r\n\t\t<input id=\"invert\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" onchange=\"filters.invert=this.value\"><\/input>\r\n\t\t<p>opacity<\/p>\r\n\t\t<input id=\"opacity\" type=\"range\" value=\"100\" min=\"0\" max=\"100\" onchange=\"filters.opacity=this.value\"><\/input>\r\n\t\t<p>saturate<\/p>\r\n\t\t<input id=\"saturate\" type=\"range\" value=\"100\" min=\"0\" max=\"400\" onchange=\"filters.saturate=this.value\"><\/input>\r\n\t\t<p>sepia<\/p>\r\n\t\t<input id=\"sepia\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" onchange=\"filters.sepia=this.value\"><\/input>\r\n\t\t<br>\r\n\t\t<button onclick=\"filter=\'none\'; resetfilters();\">reset<\/button>";
	filters={
			blur: 0,
			brightness: 100,
			contrast: 100,
			grayscale: 0,
			hue: 0,
			invert: 0,
			opacity: 100,
			saturate: 100,
			sepia: 0
		}
}
