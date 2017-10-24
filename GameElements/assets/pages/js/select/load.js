//load save data
if(localStorage.getItem("e5_goo_deaths")===null || localStorage.getItem("e5_goo_deaths")==="")
{
	var asdf="";
	for(n=0; n<levels.length; n++)
	{
		asdf+=String.fromCharCode(255)
	}
	localStorage.setItem("e5_goo_deaths",asdf);
}
if(localStorage.getItem("e5_goo_coins")===null || localStorage.getItem("e5_goo_coins")==="")
{
	var asdf="";
	for(n=0; n<levels.length; n++)
	{
		asdf+=String.fromCharCode(0)
	}
	localStorage.setItem("e5_goo_coins",asdf);
}
if (localStorage.getItem("e5_goo_deathsB")===null || localStorage.getItem("e5_goo_deathsB")==="") {
    var asdf = "";
    for (n = 0; n < levels.length; n++) {
        asdf += String.fromCharCode(255)
    }
    localStorage.setItem("e5_goo_deathsB", asdf);
}
if (localStorage.getItem("e5_goo_coinsB") === null || localStorage.getItem("e5_goo_coinsB")==="") {
    var asdf = "";
    for (n = 0; n < levels.length; n++) {
        asdf += String.fromCharCode(0)
    }
    localStorage.setItem("e5_goo_coinsB", asdf);
}
if (localStorage.getItem("e5_goo_deathsS") === null || localStorage.getItem("e5_goo_deathsS")==="") {
    var asdf = "";
    for (n = 0; n < levels.length; n++) {
        asdf += String.fromCharCode(255)
    }
    localStorage.setItem("e5_goo_deathsS", asdf);
}
if (localStorage.getItem("e5_goo_coinsS") === null || localStorage.getItem("e5_goo_coinsS")==="") {
    var asdf = "";
    for (n = 0; n < levels.length; n++) {
        asdf += String.fromCharCode(0)
    }
    localStorage.setItem("e5_goo_coinsS", asdf);
}
d=[];
c=[];
for(n=0; n<localStorage.getItem("e5_goo_deaths").length; n++)
{
	d[n]=localStorage.getItem("e5_goo_deaths")[n].charCodeAt()
}
for(n=0; n<localStorage.getItem("e5_goo_coins").length; n++)
{
	c[n]=localStorage.getItem("e5_goo_coins")[n].charCodeAt()
}
db = [];
cb = [];
for (n = 0; n < localStorage.getItem("e5_goo_deathsB").length; n++) {
    db[n] = localStorage.getItem("e5_goo_deathsB")[n].charCodeAt()
}
for (n = 0; n < localStorage.getItem("e5_goo_coinsB").length; n++) {
    cb[n] = localStorage.getItem("e5_goo_coinsB")[n].charCodeAt()
}
ds = [];
cs = [];
for (n = 0; n < localStorage.getItem("e5_goo_deathsS").length; n++) {
    ds[n] = localStorage.getItem("e5_goo_deathsS")[n].charCodeAt()
}
for (n = 0; n < localStorage.getItem("e5_goo_coinsS").length; n++) {
    cs[n] = localStorage.getItem("e5_goo_coinsS")[n].charCodeAt()
}
