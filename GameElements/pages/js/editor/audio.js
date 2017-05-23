function playMusic()
{
	document.getElementById("startAndStop").innerHTML="<div id='stopButton' onClick='stopMusic()'></div>";
	intro = new Audio(path+'/sounds/music/'+music+'/intro.ogg');
	loop = new Audio(path+'/sounds/music/'+music+'/loop.ogg');
	intro.play();
	intro.addEventListener("ended", function() 
     	{
		intro.pause();
		intro.currentTime = 0;
		loop.play();
     	});
	loop.addEventListener("ended",function()
	{
		loop.currentTime=0;
		loop.play();
	});
}
function stopMusic()
{
	document.getElementById("startAndStop").innerHTML="<div id='playButton' onClick='playMusic()'></div>";
	loop.pause();
	intro.pause();
	intro=undefined;
	loop=undefined;
}
