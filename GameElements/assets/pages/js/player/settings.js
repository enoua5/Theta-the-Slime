maxc1= [1, 2, 3, 4, 4, 4, 3, 9, 7];
maxc2 = [11, 1, 9, 2, 8, 0, 10, 11, 4];
maxc3 = [3, 14, 4, 3, 4, 5, 0, 3, 1];
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
	localStorage.e5_googame_sfx_volume="1";
if(!localStorage.e5_googame_music_volume)
	localStorage.e5_googame_music_volume="1";
tick = 0;
function timer()
{
	tick++;
	setTimeout(timer, 1);
}
timer();
function addLevel(levelObject)
{
	if(levelObject!==undefined)
		levels[levels.length]=levelObject;
}
levels=[]
var pose=
{
	left:{
		walk:
		[
			[0,0],
			[40,0],
			[80,0],
			[40,0],
			[0,0],
			[120,0],
			[0,40],
			[120,0]
		],
		jump:[120,80],
		fall:[40,120],
		stand:[80,120]
	},
	right:{
		walk:
		[
			[40,40],
			[80,40],
			[120,40],
			[80,40],
			[40,40],
			[0,80],
			[40,80],
			[0,80]
		],
		jump:[80,80],
		fall:[0,120],
		stand:[120,120]
	}
}
jumpReq=0;
dubJump=0;
holdingDownJump=0;
totalDeaths = 0;
var report = false;
//-1=left; 0=not moving; 1=right;
direction=0;
speed=6;
debug=0;
fallSpeed=0;
jumpPower=20;
dubJumpPower = 15;
OdubJumpPower = 15;
gravity = 1;
originalGravity = 1;
var resetCode = "";
lFrameInWater = false;
