maxc1=getFullCoins(packs.premade);
maxc2=getFullCoins(packs.bonus);
maxc3=getFullCoins(packs.special);
function uploadCustom(id) {
    newLevelData = prompt("paste level data here");
    if (newLevelData !== "" && newLevelData !== null) {
        localStorage["e5_goo_c" + (id + 1)] = newLevelData;
    }
    try
    {
        levels[id] = eval("(" + localStorage["e5_goo_c" + (id + 1)] + ")");
        alert("upload success!");
    }
    catch(err)
    {
        alert("upload failed!");
        delete localStorage["e5_goo_c" + (id + 1)];
        localStorage.reloaded = 0;
        window.location.reload();
    }
}
requestedPack=location.search;
if(!localStorage.e5_googame_sfx_volume)
	localStorage.e5_googame_sfx_volume="0.25";
if(!localStorage.e5_googame_music_volume)
	localStorage.e5_googame_music_volume="0.25";
function addLevel(levelObject)
{
	if(levelObject!==undefined)
		levels[levels.length]=levelObject;
}
