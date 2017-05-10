var intro = new Audio('assets/sounds/music/9/intro.ogg');
var loop = new Audio('assets/sounds/music/9/loop.ogg');
intro.play();
intro.addEventListener("ended", function () {
    intro.pause();
    intro.currentTime = 0;
    loop.play();
});
loop.addEventListener("ended", function () {
    loop.currentTime = 0;
    loop.play();
});
