konami = [13, 65, 66, 39, 37, 39, 37, 40, 40, 38, 38]
keys = new Array(11)
window.addEventListener('keydown', function (event) {
    for (i = 9; i >= 0; i--) {
        keys[i + 1] = keys[i]
    }
    keys[0] = event.keyCode;
}, false);
function check() {
    if (sameArray(keys, konami))
    {
        document.getElementById("player").style.background = "url(assets/chars/4/4.png)";
        playerPos[1]--;
        keys[0] = 0;
    }
    setTimeout(check, 20)
}
check()
