function derp()
{
	var txt=document.getElementById("title").innerHTML.toLowerCase();
	if(txt.toLowerCase()==="iota")
	{
		document.getElementById("title").style.color="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
	}
	setTimeout(derp,500)
}

