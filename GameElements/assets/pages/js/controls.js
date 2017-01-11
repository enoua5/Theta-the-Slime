function icon()
{
	document.head.innerHTML+="<link rel='shortcut icon' href='"+path+"/icon.ico' type='image/x-icon'><link rel='icon' href='"+path+"/icon.ico' type='image/x-icon'>";
	document.body.innerHTML += "<div style='width: 120px; height: 30px; position: absolute; top:0; right: 0; background:url(" + path + "/stageimg/home.png)' onClick='home()'></div>";
	document.getElementById("img0").style.backgroundImage = "url(" + path + "/chars/0/0.png)";
	document.getElementById("img1").style.backgroundImage = "url(" + path + "/stageimg/coin.gif)";
	document.getElementById("img2").style.backgroundImage = "url(" + path + "/stageimg/spikeExample.png)";
	document.getElementById("img3").style.backgroundImage = "url(" + path + "/stageimg/lava.png)";
	document.getElementById("img4").style.backgroundImage = "url(" + path + "/stageimg/portal.png)";
	document.getElementById("img5").style.backgroundImage = "url(" + path + "/chars/0/splat1.png)";

    setInterval(readjust,100)
}
pane=0;
panes=6;
function readjust()
{
    height = window.innerHeight;
    width = window.innerWidth;
    document.getElementById("leftHider").style.width = ((width / 2) - 350) + "px";
    document.getElementById("leftHider").style.height = height + "px";
    document.getElementById("rightHider").style.width = ((width / 2) - 350) + "px";
    document.getElementById("rightHider").style.height = height + "px";
    document.getElementById("slider").style.top = ((height / 2) - 300) + "px";
    document.getElementById("slider").style.left = ((-1 * (((width / 2) - 350) + (700 * pane))) + 2*((width / 2) - 350)) + "px";
    document.getElementById("slider").style.width = (700 * (panes+1))+"px";
    document.getElementById("leftArrow").style.left = ((width / 2) - 340) + "px";
    document.getElementById("rightArrow").style.right = ((width / 2) - 340) + "px";
    document.getElementById("leftArrow").style.top = ((height / 2)-100) + "px";
    document.getElementById("rightArrow").style.top = ((height / 2)-100) + "px";
    if(pane<0)
    {
        pane = panes - 1;
    }
    if(pane>=panes)
    {
        pane = 0;
    }
}
