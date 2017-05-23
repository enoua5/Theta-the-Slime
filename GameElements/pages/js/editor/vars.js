var level={}
var levelData=new Array(30);
for(i=0; i<30;i++)
{
	levelData[i]=new Array(17);
}
for(x=0;x<30;x++)
{
	for(y=0;y<17;y++)
	{
		levelData[x][y]=0;
	}
}
var selected=1;
var player=0;
var theme=0;
var music=0;
var filter="none";
var filters={
blur: 0,
brightness: 100,
contrast: 100,
grayscale: 0,
hue: 0,
invert: 0,
opacity: 100,
saturate: 100,
sepia: 0
}
