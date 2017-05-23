function pause()
{
	working=!working;
	//reusing the loading screen
	document.getElementById("loadingScreen").style.width="1200px";
	screen=document.getElementById("loadingScreen");
	screen.innerHTML="<h1 style='color: white'>PAUSED</h1>";
	screen.innerHTML+="<h3 style='color: white;'>music: </h3><input type='range' id='myRange' value='"+localStorage.e5_googame_music_volume+"' min='0' max='1' step='0.01' onchange='localStorage.e5_googame_music_volume=this.value; updateMusic();'>";
	screen.innerHTML+="<h3 style='color: white;'>sfx: </h3><input type='range' id='myRange' value='"+localStorage.e5_googame_sfx_volume+"' min='0' max='1' step='0.01' onchange='localStorage.e5_googame_sfx_volume=this.value; updateSfx();'>";
	screen.innerHTML+="<h2 onClick='resume()' style='color: white'>back to game</h2>";
	screen.innerHTML+="<h2 onClick='reset()' style='color: white'>reset level</h2>";
	screen.innerHTML+="<h2 onClick='toSelect()' style='color: white'>quit</h2>";
}
function toSelect()
{
	localStorage.reloaded = "0";
	location.assign("select.html"+requestedPack);
}
function resume()
{
	screen.style.width="0";
	working=!working;
}
function reset()
{
	localStorage.reloaded = "0";
	location.reload();
}
