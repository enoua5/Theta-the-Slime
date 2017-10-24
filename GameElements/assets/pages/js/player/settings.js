requestedPack=location.search.split("&")[0];
if(!localStorage.getItem("e5_googame_sfx_volume"))
	localStorage.setItem("e5_googame_sfx_volume","0.25");
if(!localStorage.getItem("e5_googame_music_volume"))
	localStorage.setItem("e5_googame_music_volume","0.25");
tick = 0;
function timer()
{
	tick++;
	setTimeout(timer, 1);
}
timer();
levels=[];
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
