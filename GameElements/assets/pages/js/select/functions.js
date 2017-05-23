function resetSave()
{
    	if (requestedPack == "?premade")
    	{
    	    	//alert("resetting premade scores")
    	    	delete localStorage.e5_goo_deaths;
    	    	delete localStorage.e5_goo_coins;
    	    	delete localStorage.e5_goo_deathsB;
    	    	delete localStorage.e5_goo_coinsB;
    	    	delete localStorage.e5_goo_deathsS;
    	    	delete localStorage.e5_goo_coinsS;
    	}
    	if (requestedPack == "?bonus")
    	{
    	    	//alert("resetting bonus scores")
    	    	delete localStorage.e5_goo_deathsB;
    	    	delete localStorage.e5_goo_coinsB;
    	    	delete localStorage.e5_goo_deathsS;
    	    	delete localStorage.e5_goo_coinsS;
    	}
    	if (requestedPack == "?special")
    	{
    	    	delete localStorage.e5_goo_deathsS;
    	    	delete localStorage.e5_goo_coinsS;
    	}
	if(requestedPack=="?custom")
	{
		delete localStorage.e5_goo_c1;
		delete localStorage.e5_goo_c2;
		delete localStorage.e5_goo_c3;
	}
	localStorage.reloaded="0";
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
