maxc1=getFullCoins(packs.premade);
maxc2=getFullCoins(packs.bonus);
maxc3=getFullCoins(packs.special);
function uploadCustom(id) {
    newLevelData = prompt("paste level data here");
    if (newLevelData !== "" && newLevelData !== null) {
        localStorage.setItem("e5_goo_c" + (id + 1), newLevelData);
    }
    try
    {
        levels[id] = eval("(" + localStorage.getItem("e5_goo_c" + (id + 1)) + ")");
        alert("upload success!");
    }
    catch(err)
    {
        alert("upload failed!");
        localStorage.removeItem("e5_goo_c" + (id + 1));
        localStorage.setItem("reloaded", 0);
        window.location.reload();
    }
}
requestedPack=location.search;
if(!localStorage.getItem("e5_googame_sfx_volume"))
	localStorage.setItem("e5_googame_sfx_volume","0.25");
if(!localStorage.getItem("e5_googame_music_volume"))
	localStorage.setItem("e5_googame_music_volume","0.25");
function addLevel(levelObject)
{
	if(levelObject!==undefined)
		levels[levels.length]=levelObject;
}
