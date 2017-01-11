working = false;
direction = 0;
speed = 6;
debug = 0;
fallSpeed = 0;
jumpPower = 20;
dubJumpPower = 15;
OdubJumpPower = 15;
gravity = 1;
originalGravity = 1;
var pose=
{
    left:{
        walk:
		[
			[0,0],
			[40,0],
			[80,0],
			[40,0],
			[0,0],
			[120,0],
			[0,40],
			[120,0]
		],
        jump:[120,80],
        fall:[40,120],
        stand:[80,120]
    },
    right:{
        walk:
		[
			[40,40],
			[80,40],
			[120,40],
			[80,40],
			[40,40],
			[0,80],
			[40,80],
			[0,80]
		],
        jump:[80,80],
        fall:[0,120],
        stand:[120,120]
    }
}
jumpReq=0;
dubJump=0;
holdingDownJump=0;
document.addEventListener('keydown', function(event)
{
    if(working)
    {
        var key=event.keyCode
        if(key===69)
        {
            death();
        }
        if((key===38||key===32||key===87)&&!holdingDownJump&&(checkOnGround()||dubJump))
        {
            jumpReq=1;
            holdingDownJump=1;
        }
        if(key===37||key===65)
        {
            direction=-1;
            facingRight=0;
        }
        else if(key===68||key===39)
        {
            direction=1;
            facingRight=1;
        }
    }
}, false);
document.addEventListener('keyup', function(event)
{
    if(working)
    {
        var key=event.keyCode
        if((key===37||key===65)&&direction===-1)
        {
            direction=0;
        }
        if((key===68||key===39)&&direction===1)
        {
            direction=0
        }
        if(key===38||key===32||key===87)
        {
            holdingDownJump=0;
        }
    }
}, false);
respawn = [600, 100];
playerPos = [600, 100];
facingRight = false;
function death() {
    playerPos = [respawn[0], respawn[1]];
    document.getElementById("player").style.left = playerPos[0] + "px";
    document.getElementById("player").style.top = playerPos[1] + "px";
    jumpReq = 0;
    dubJump = 0;
    fallSpeed = 0;
    working = false;
    direction = 0;
    holdingDownJump = 0;
    setTimeout(function () { working = true; }, 500);
}
function overlap(rect1, rect2, offsetX, offsetY)
{
    try
    {
        rect1 = rect1.getBoundingClientRect();
        rect2 = rect2.getBoundingClientRect();
        rect1.left=parseInt(document.getElementById("player").style.left);
        rect1.right = parseInt(document.getElementById("player").style.left)+30;
        rect1.top=parseInt(document.getElementById("player").style.top);
        rect1.bottom = parseInt(document.getElementById("player").style.top) + 30;
        return !(rect1.right + offsetX <= rect2.left || rect1.left + offsetX >= rect2.right || rect1.bottom + offsetY <= rect2.top || rect1.bottom + offsetY >= rect2.bottom+1);
    }
    catch(e)
    {
        return false;
    }
}
function checkOnGround()
{
    var plats = [document.getElementById("plat0"), document.getElementById("plat1"), document.getElementById("plat2"), document.getElementById("plat3"), document.getElementById("plat4"), document.getElementById("plat5"), document.getElementById("plat6"), document.getElementById("plat7"), document.getElementById("plat8"), document.getElementById("plat9"),];
    onground = false;
    for (j = 0; j < plats.length; j++)
    {
        if(overlap(document.getElementById("player"),plats[j],moved[0],moved[1]))
        {
            //console.log("ermergerd, "+j+"!")
            onground=true;
        }
    }
    return onground;
}
setInterval(function () {
    if (working) {
        moved = [0, 0];
        document.getElementById("player").style.left = playerPos[0] + "px";
        document.getElementById("player").style.top = playerPos[1] + "px";
        fallSpeed += gravity;
        if (jumpReq && checkOnGround())
        {
            fallSpeed = 0 - jumpPower;
            jumpReq = 0;
        }
        if (jumpReq && dubJump)
        {
            fallSpeed = 0 - dubJumpPower;
            dubJump = 0;
            jumpReq = 0;
        }
        jumpReq = 0;
        for (i = 0; i < Math.abs(fallSpeed) ; i++) {
            if (fallSpeed > 0 && !checkOnGround()) {
                playerPos[1]++;
                moved[1]++;
            }
            else if (fallSpeed < 0) {
                playerPos[1]--;
                moved[1]--;
            }
        }
        if(checkOnGround())
        {
            fallSpeed = 0;
            dubJump = 1;
        }
        if (direction == -1) {
            playerPos[0] -= speed;
            moved[0] -= speed;
        }
        if (direction == 1) {
            playerPos[0] += speed;
            moved[0] += speed;
        }
        if (playerPos[1] > 680)
        {
            death();
        }
        //determine displayed player frame
        if (facingRight) {
            //console.log("right")	
            correctPose = pose.right
        }
        else {
            //console.log("left")
            correctPose = pose.left
        }
        if (!checkOnGround()) {
            if (fallSpeed > 0) {
                correctPose = correctPose.fall
            }
            else {
                correctPose = correctPose.jump
            }
            walkFrame = 0;
        }
        else if (direction === 0) {
            correctPose = correctPose.stand
            walkFrame = 0;
        }
        else {
            correctPose = correctPose.walk[Math.floor(walkFrame)];
            walkFrame += 0.25;
            if (walkFrame >= pose.left.walk.length) {
                walkFrame = 0;
            }
        }
        document.getElementById("player").style.backgroundPosition = "-" + correctPose[0] + "px -" + correctPose[1] + "px"
        lFrameGround = checkOnGround();
    }
}, 20);

