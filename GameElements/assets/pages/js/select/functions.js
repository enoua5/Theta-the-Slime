function resetSave()
{
    	if (requestedPack == "?premade")
    	{
    	    	//alert("resetting premade scores")
    	    	localStorage.removeItem("e5_goo_deaths");
    	    	localStorage.removeItem("e5_goo_coins");
    	    	localStorage.removeItem("e5_goo_deathsB");
    	    	localStorage.removeItem("e5_goo_coinsB");
    	    	localStorage.removeItem("e5_goo_deathsS");
    	    	localStorage.removeItem("e5_goo_coinsS");
    	}
    	if (requestedPack == "?bonus")
    	{
    	    	//alert("resetting bonus scores")
    	    	localStorage.removeItem("e5_goo_deathsB");
    	    	localStorage.removeItem("e5_goo_coinsB");
    	    	localStorage.removeItem("e5_goo_deathsS");
    	    	localStorage.removeItem("e5_goo_coinsS");
    	}
    	if (requestedPack == "?special")
    	{
    	    	localStorage.removeItem("e5_goo_deathsS");
    	    	localStorage.removeItem("e5_goo_coinsS");
    	}
	if(requestedPack=="?custom")
	{
		localStorage.removeItem("e5_goo_c1");
		localStorage.removeItem("e5_goo_c2");
		localStorage.removeItem("e5_goo_c3");
	}
	localStorage.setItem("reloaded","0");
	location.reload();
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
function sum(arr)
{
	var tot=0;
	for(var i=0; i<arr.length; i++)
		tot+=arr[i];
	return tot;
}
