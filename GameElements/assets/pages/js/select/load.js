//load save data
debugger;
if(localStorage.e5_goo_deaths===undefined || localStorage.e5_goo_deaths==="")
{
	var asdf="";
	for(n=0; n<levels.length; n++)
	{
		asdf+=String.fromCharCode(255)
	}
	localStorage.e5_goo_deaths=asdf
}
if(localStorage.e5_goo_coins===undefined || localStorage.e5_goo_coins==="")
{
	var asdf="";
	for(n=0; n<levels.length; n++)
	{
		asdf+=String.fromCharCode(0)
	}
	localStorage.e5_goo_coins=asdf
}
if (localStorage.e5_goo_deathsB === undefined || localStorage.e5_goo_deathsB==="") {
    var asdf = "";
    for (n = 0; n < levels.length; n++) {
        asdf += String.fromCharCode(255)
    }
    localStorage.e5_goo_deathsB = asdf;
}
if (localStorage.e5_goo_coinsB === undefined || localStorage.e5_goo_coinsB==="") {
    var asdf = "";
    for (n = 0; n < levels.length; n++) {
        asdf += String.fromCharCode(0)
    }
    localStorage.e5_goo_coinsB = asdf;
}
if (localStorage.e5_goo_deathsS === undefined || localStorage.e5_goo_deathsS==="") {
    var asdf = "";
    for (n = 0; n < levels.length; n++) {
        asdf += String.fromCharCode(255)
    }
    localStorage.e5_goo_deathsS = asdf;
}
if (localStorage.e5_goo_coinsS === undefined || localStorage.e5_goo_coinsS==="") {
    var asdf = "";
    for (n = 0; n < levels.length; n++) {
        asdf += String.fromCharCode(0)
    }
    localStorage.e5_goo_coinsS = asdf;
}
d=[];
c=[];
for(n=0; n<localStorage.e5_goo_deaths.length; n++)
{
	d[n]=localStorage.e5_goo_deaths[n].charCodeAt()
}
for(n=0; n<localStorage.e5_goo_coins.length; n++)
{
	c[n]=localStorage.e5_goo_coins[n].charCodeAt()
}
db = [];
cb = [];
for (n = 0; n < localStorage.e5_goo_deathsB.length; n++) {
    db[n] = localStorage.e5_goo_deathsB[n].charCodeAt()
}
for (n = 0; n < localStorage.e5_goo_coinsB.length; n++) {
    cb[n] = localStorage.e5_goo_coinsB[n].charCodeAt()
}
ds = [];
cs = [];
for (n = 0; n < localStorage.e5_goo_deathsS.length; n++) {
    ds[n] = localStorage.e5_goo_deathsS[n].charCodeAt()
}
for (n = 0; n < localStorage.e5_goo_coinsS.length; n++) {
    cs[n] = localStorage.e5_goo_coinsS[n].charCodeAt()
}
