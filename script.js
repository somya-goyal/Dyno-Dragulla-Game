// console.log("It is my game");
score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogameover = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);

//main logic
document.onkeydown = function(e) {
    // console.log("Key code is:", e.keyCode);
    if (e.keyCode == 38) //upper arrow 
    {
        dyno = document.querySelector('.dyno');
        dyno.classList.add('animatedyno');
        setTimeout(() => {
            dyno.classList.remove('animatedyno')
        }, 700);
    }
    if (e.keyCode == 39) //right arrow
    {
        dyno = document.querySelector('.dyno');
        dynox = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('left'));
        dyno.style.left = dynox + 112 + 'px';
    }
    if (e.keyCode == 37) //left arrow 
    {
        dyno = document.querySelector('.dyno');
        dynox = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('left'));
        dyno.style.left = dynox - 112 + 'px';
    }

}
setInterval(() => {
    dyno = document.querySelector('.dyno');
    dragulla = document.querySelector('.dragulla');
    gameover = document.querySelector('.gameover');
    //dyno value
    dynox = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('left'));
    dynoy = parseInt(window.getComputedStyle(dyno, null).getPropertyValue('bottom'));

    // dragon values
    dragx = parseInt(window.getComputedStyle(dragulla, null).getPropertyValue('left'));
    dragy = parseInt(window.getComputedStyle(dragulla, null).getPropertyValue('bottom'));

    //calculate difference
    offsetx = Math.abs(dynox - dragx);
    offsety = Math.abs(dynoy - dragy);

    // console.log(offsetx);
    // console.log(offsety);


    if (offsetx < 113 && offsety < 66) {
        gameover.innerHTML = "Game Over - Reload to Play Again";
        dragulla.classList.remove('dragullaAni');
        audiogameover.play();
        setTimeout(() => {
            audiogameover.pause();
            audio.pause();
        }, 1000);
    } else if (offsetx < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dragulla, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.2;
            dragulla.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateScore(score) {
    scorecontent.innerHTML = "Your Score: " + score;
}