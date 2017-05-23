function genRandString()
{
    var output = "";
    while(Math.floor(Math.random()*100)!==0)
    {
        output += String.fromCharCode(Math.floor(Math.random() * 1024));
    }
    return output;
}
