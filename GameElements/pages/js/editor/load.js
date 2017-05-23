function show()
{
    var levelToUpload = prompt("paste level data here");
    eval('addLevel(' + levelToUpload + ');');
}
function addLevel(loadlevel)
{
    document.getElementById("name").value = loadlevel.name;
    document.getElementById("themeSelect").value = loadlevel.theme.toString();
    theme = loadlevel.theme;
    document.getElementById("musicSelect").value = loadlevel.music.toString();
    music = loadlevel.music;
    document.getElementById("playerSelect").value = loadlevel.player.toString();
    player = loadlevel.player;
    //when you program something backwards, you gotta live with the consequences
    for(h=0;h<17;h++)
    {
    console.log("i will burn you in an endless fire "+h)
        for(c=0; c<30; c++)
        {
            console.log(c+"x"+h);
            levelData[c][h] = loadlevel.data[h][c];
            document.getElementById(c + "x" + h).className = "type" + loadlevel.data[h][c];
        }
    }
}
function upload(uploadFile)
{
	document.getElementById("loadbox").innerHTML="<script type='text/javascript' src='"+uploadFile+"'><\/script>"
}
