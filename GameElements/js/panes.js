creditsShown = false;
changeShown=false;
function showCredits()
{
    document.getElementById("credits").style.display = "block";
    creditsShown = true;
}
function hideCredits()
{
    document.getElementById("credits").style.display = "none";
    creditsShown = false;
}
function showChange()
{
    document.getElementById("changelog").style.display = "block";
    changeShown = true;
}
function hideChange()
{
    document.getElementById("changelog").style.display = "none";
    changeShown = false;
}
function showTodo()
{
    document.getElementById("todo").style.display = "block";
}
function hideTodo()
{
    document.getElementById("todo").style.display = "none";
}
function showWatch()
{
    document.getElementById("watchlist").style.display = "block";
}
function hideWatch()
{
    document.getElementById("watchlist").style.display = "none";
}
