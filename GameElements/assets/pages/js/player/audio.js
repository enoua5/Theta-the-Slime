//preload and prepare sound
var sfx={
	coin:new Audio(path+'/sounds/sfx/coin.wav'),
	death:new Audio(path+'/sounds/sfx/death.wav'),
	jump:new Audio(path+'/sounds/sfx/jump.wav'),
	dubJump:new Audio(path+'/sounds/sfx/jump2.wav'),
	landing:new Audio(path+'/sounds/sfx/landing.wav'),
	levelComp: new Audio(path + '/sounds/sfx/levelComplete.wav')/*,
    	splash: new Audio(path + '/sounds/sfx/splash.wav')*/
}
var music=[
	{intro:new Audio(path+'/sounds/music/0/intro.ogg'),loop:new Audio(path+'/sounds/music/0/loop.ogg')},
	{intro:new Audio(path+'/sounds/music/1/intro.ogg'),loop:new Audio(path+'/sounds/music/1/loop.ogg')},
	{intro:new Audio(path+'/sounds/music/2/intro.ogg'),loop:new Audio(path+'/sounds/music/2/loop.ogg')},
	{intro:new Audio(path+'/sounds/music/3/intro.ogg'),loop:new Audio(path+'/sounds/music/3/loop.ogg')},
	{intro:new Audio(path+'/sounds/music/4/intro.ogg'),loop:new Audio(path+'/sounds/music/4/loop.ogg')},
	{intro:new Audio(path+'/sounds/music/5/intro.ogg'),loop:new Audio(path+'/sounds/music/5/loop.ogg')},
	{intro:new Audio(path+'/sounds/music/6/intro.ogg'),loop:new Audio(path+'/sounds/music/6/loop.ogg')},
	{intro:new Audio(path+'/sounds/music/7/intro.ogg'),loop:new Audio(path+'/sounds/music/7/loop.ogg')},
	{intro:new Audio(path+'/sounds/music/8/intro.ogg'),loop:new Audio(path+'/sounds/music/8/loop.ogg')},
	{intro:new Audio(path+'/sounds/music/9/intro.ogg'),loop:new Audio(path+'/sounds/music/9/loop.ogg')},
    { intro: new Audio(path + '/sounds/music/10/intro.ogg'), loop: new Audio(path + '/sounds/music/10/loop.ogg') },
    { intro: new Audio(), loop: new Audio()}
]
var menuintro = new Audio(path+'/sounds/music/8/intro.ogg');
var menuloop = new Audio(path + '/sounds/music/8/loop.ogg');
menuintro.play();
menuintro.addEventListener("ended", function () {
    menuintro.pause();
    menuintro.currentTime = 0;
    menuloop.play();
});
menuloop.addEventListener("ended", function () {
    menuloop.currentTime = 0;
    menuloop.play();
});
function updateSfx()
{
	sfx.death.pause();
	sfx.coin.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.death.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.jump.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.dubJump.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.landing.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.levelComp.volume=parseFloat(localStorage.e5_googame_sfx_volume);
	sfx.death.play();
}
function updateMusic()
{
	workingIntro.volume=parseFloat(localStorage.e5_googame_music_volume);
	workingLoop.volume=parseFloat(localStorage.e5_googame_music_volume);
}
