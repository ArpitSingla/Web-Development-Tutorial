var secretNumber = 4;
var yourChoice=Number(prompt("What is your guess"));
if(yourChoice === secretNumber){
    alert("You got it right");
}
else if(yourChoice > secretNumber){
    alert("Too high");
}
else{
    alert("Too Low");
} 