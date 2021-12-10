var character = document.querySelector('div#character');
var ball = document.querySelector('div#ball');
var counter = 1;
var score = document.querySelector('label#score');

function jump(){
    //Counting gamer score
    score.innerText = `${counter++}`;

    if(character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var ballLeft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));

    if((ballLeft > 0 && ballLeft < 20) && (characterTop >= 80)){
        ball.style.animation = "none";
        ball.style.display = "none";
        window.alert('You lose!');
    }
}, 10);