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
function back()
{
	localStorage.setItem("reloaded","0");
	window.location.assign("../../playmenu.html");
}
var paths=window.location.href.split("assets");
var path="";
for(i=0; i<paths.length-1; i++)
{
	path+=paths[i]+"assets"
}
if(localStorage.getItem("reloaded")==="1")
{
	home();
}
localStorage.setItem("reloaded", "1");
