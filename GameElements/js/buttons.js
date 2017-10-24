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
	localStorage.setItem("reloaded","0");
	if(id==-1)
		window.location.assign("playmenu.html")
	if(id==0)
		window.location.assign("assets/pages/select.html?premade")
	if(id==1)
		window.location.assign("assets/pages/select.html?custom")
	if(id==2)
		window.location.assign("assets/pages/leveleditor.html")
	if(id==3)
	    window.location.assign("assets/pages/controls.html")
	if(id==4&&unlocked)
	    window.location.assign("assets/pages/select.html?bonus")
	if(id==5&&unlocked2)
        	window.location.assign("assets/pages/select.html?special")
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
function sum(arr)
{
	var tot=0;
	for(var i=0; i<arr.length; i++)
		tot+=arr[i];
	return tot;
}
function getTotalCoins()
{
	return sum(c)+sum(c2)+sum(c3);
}
function getFullCoins(pack)
{
	var ret=new Array(pack.length)
	for(var i=0; i<pack.length; i++)
	{
		var tot=0;
		for(var x=0; x<pack[i].data.length; x++)
			for(var y=0; y<pack[i].data[x].length; y++)
			{
				var id=0;
				if(typeof(pack[i].data[x][y])=="number")
					id=pack[i].data[x][y];
				else if(typeof(pack[i].data[x][y])=="object")
					id=pack[i].data[x][y].id;
				if(id==8)
					tot++;
			}
		ret[i]=tot;
	}
	return ret;
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
    if (getTotalCoins()>=cmax1+cmax2+cmax3)
    {
        document.getElementById("player").style.background = "url(assets/chars/9/9.png)";
    }
}
function unlock()
{
    if(getTotalCoins()>=cmax1)
    {
        unlocked = true;
        document.getElementById("secret").innerHTML = "play bonus levels";
    }
    else
    {
        document.getElementById("secretButton").style.background = "grey";
	document.getElementById("secret").innerHTML = "collect "+(cmax1-getTotalCoins())+" more coins to unlock";
    }
    if(getTotalCoins()>=cmax1+cmax2)
    {
        unlocked2 = true;
        document.getElementById("secret2").innerHTML="play special levels"
    }
    else
    {
        document.getElementById("secretButton2").style.background = "grey";
	document.getElementById("secret2").innerHTML = "collect "+(cmax1+cmax2-getTotalCoins())+" more coins to unlock";
    }
    if(getTotalCoins()>=cmax1+cmax2+cmax3)
    {
        document.getElementById("player").style.background = "url(assets/chars/9/9.png)";
    }
}
unlocked = false;
unlocked2 = false;
c = [];
if(localStorage.getItem("e5_goo_coins"))
{
    for(n=0;n<localStorage.getItem("e5_goo_coins").length;n++)
    {
        c[n] = localStorage.getItem("e5_goo_coins")[n].charCodeAt()
    }
}
c2 = [];
if (localStorage.getItem("e5_goo_coinsB")) {
    for (n = 0; n < localStorage.getItem("e5_goo_coinsB").length; n++) {
        c2[n] = localStorage.getItem("e5_goo_coinsB")[n].charCodeAt()
    }
}
c3 = [];
if (localStorage.getItem("e5_goo_coinsS")) {
    for (n = 0; n < localStorage.getItem("e5_goo_coinsS").length; n++) {
        c3[n] = localStorage.getItem("e5_goo_coinsS")[n].charCodeAt()
    }
}
cmax1=sum(getFullCoins(packs.premade));
cmax2=sum(getFullCoins(packs.bonus));
cmax3=sum(getFullCoins(packs.special));
