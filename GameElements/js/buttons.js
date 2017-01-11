function download()
{
	if(location.protocol!="file:")
	{
		var link = document.createElement("a");
    		link.download = "Theta-the-Slime";
    		link.href = "http://www.github.com/enoua5/Theta-the-Slime/archive/master.zip";
    		link.click();
	}
}
function nav(id)
{
	localStorage.reloaded="0";
	if(id==-1)
		window.location.assign("playmenu.html")
	if(id==0)
		window.location.assign("assets/pages/player.html?premade")
	if(id==1)
		window.location.assign("assets/pages/player.html?custom")
	if(id==2)
		window.location.assign("assets/pages/leveleditor.html")
	if(id==3)
	    window.location.assign("assets/pages/controls.html")
	if(id==4&&unlocked)
	    window.location.assign("assets/pages/player.html?bonus")
	if(id==5&&unlocked2)
        	window.location.assign("assets/pages/player.html?special")
	if(id==6)
		window.location.assign("assets/pages/mini.html")
}
function sameArray(a1,a2)
{
    if (a1.length !== a2.length)
        return false;
    for(i=0; i<a1.length; i++)
    {
        if (a1[i] !== a2[i])
            return false;
    }
    return true;
}
function fillContent()
{
    document.getElementById("changelog").innerHTML+=changelog;
    if(location.protocol=="file:")
	document.getElementById("download").style.background="grey";
    for(l=0; l<todos.length;l++)
    {
	document.getElementById("todo").innerHTML+="<h3 class='menutext' style='text-align:left; margin-left: 10px'>- "+todos[l]+"</h3>";
    }
    for(l=0; l<watchlist.length; l++)
    {
	document.getElementById("watchlist").innerHTML+="<h3 class='menutext' style='text-align:left; margin-left: 10px; color:"+["red","green"][watchlist[l].resolved]+"'>"+(l.toString(16))+" - "+watchlist[l].content+"</h3>";
    }
    document.getElementById("versionNumber").innerHTML="v"+ver.maj+"."+ver.min+"."+ver.bug;
    if (sameArray(c3, [3, 14, 4, 3, 4, 5, 0, 3, 1]))
    {
        document.getElementById("player").style.background = "url(assets/chars/9/9.png)";
    }
}
function unlock()
{
    if(sameArray(c,[1, 2, 3, 4, 4, 4, 3, 9, 7]))
    {
        unlocked = true;
        document.getElementById("secret").innerHTML = "play bonus levels";
    }
    else
    {
        document.getElementById("secretButton").style.background = "grey";
    }
    if(sameArray(c2,[11,1,9,2,8,0,10,11,4]))
    {
        unlocked2 = true;
        document.getElementById("secret2").innerHTML="play special levels"
    }
    else
    {
        document.getElementById("secretButton2").style.background = "grey";
    }
    if (sameArray(c3, [3, 14, 4, 3, 4, 5, 0, 3, 1]))
    {
        document.getElementById("player").style.background = "url(assets/chars/9/9.png)";
    }
}
unlocked = false;
unlocked2 = false;
c = [];
if(localStorage.e5_goo_coins)
{
    for(n=0;n<localStorage.e5_goo_coins.length;n++)
    {
        c[n] = localStorage.e5_goo_coins[n].charCodeAt()
    }
}
c2 = [];
if (localStorage.e5_goo_coinsB) {
    for (n = 0; n < localStorage.e5_goo_coinsB.length; n++) {
        c2[n] = localStorage.e5_goo_coinsB[n].charCodeAt()
    }
}
c3 = [];
if (localStorage.e5_goo_coinsS) {
    for (n = 0; n < localStorage.e5_goo_coinsS.length; n++) {
        c3[n] = localStorage.e5_goo_coinsS[n].charCodeAt()
    }
}
