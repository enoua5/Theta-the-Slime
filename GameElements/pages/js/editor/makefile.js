function prepData(array)
{
	var output='[';
	for(y=0; y<17; y++)
	{
		output+='[';
		for(x=0; x<30; x++)
		{
			output+=array[x][y]
			if(x!==29)
			{
				output+=',';
			}
		}
		output+=']'
		if(y!==16)
		{
			output+=',';
		}
	}
	output+=']';
	return output;
}
var file=null;
makeFile=function(text){
var data=new Blob([text],{type:'text/plain'});
if(file!==null){
window.URL.revokeObjectURL(file);
}
file=window.URL.createObjectURL(data);
return file;
};
function updateCode()
{
	document.getElementById('download').href=makeFile("{name:\""+level.name+"\", sub:\""+level.sub+"\", theme:"+level.theme+", music:"+level.music+", player:"+level.player+", filter:\""+filter+"\", data:"+prepData(level.data)+", special:\""+getSpecialScript()+"\"}");
	document.getElementById('download').download=level.name+".txt"
}
