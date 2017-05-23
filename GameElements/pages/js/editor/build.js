function home()
{
	parentPathA=path.split("assets");
	parentPath=""
	for(i=0; i<parentPathA.length-1; i++)
	{
		parentPath+=parentPathA[i]
		if(i!==parentPathA.length-2)
			parentPath+="assets";
	}
	window.location.assign(parentPath+"game.html")
}
var paths=window.location.href.split("assets");
var path="";
for(i=0; i<paths.length-1; i++)
{
	path+=paths[i]+"assets"
}

function tooManyQuotes()
{
		return "\"type\"+selected";
}
function build()
{
	document.body.innerHTML+="";
	if(window.localStorage.getItem("reloaded")==="1")
	{
		window.localStorage.setItem("reloaded", 0);
		home();
	}
	else
	{
		window.localStorage.setItem("reloaded", 1);
		window.onbeforeunload = function(e)
		{
			return "Any unsaved data will be lost if you leave this page.";
		};
	}
	work=document.getElementById("workarea");
	for(x=0; x<30;x++)
	{
		for(y=0; y<17; y++)
		{
			work.innerHTML+="<div id='"+x+"x"+y+"' class='type0' style='position: absolute; left:"+(x*40)+"px; top:"+(y*40)+"px;' onClick='levelData["+x+"]["+y+"]=selected;this.className="+tooManyQuotes()+"'></div>"
		}
	}
	work.innerHTML+=""
	updatePlayer();
}
