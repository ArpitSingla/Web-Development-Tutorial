var p1Button=document.querySelector("button");
var p2Button=document.getElementById("p2");
var p1Display=document.getElementById("p1Display");
var p2Display=document.getElementById("p2Display");
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winningScore=5;

p1Button.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        if(p1Score===winningScore){
            p1Display.classList.add("winner");
            gameOver=true;
        }
        p1Display.textContent=p1Score;
    }
});     

p2Button.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if(p2Score===winningScore){
            p2Display.classList.add("winner");
            gameOver=true;
        }
        p2Display.textContent=p2Score;
    }
});
