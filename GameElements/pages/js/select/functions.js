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
