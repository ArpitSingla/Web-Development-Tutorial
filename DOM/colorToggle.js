//alert("File is linked");
var bt=document.querySelector("button");
var bg=document.querySelector("body");
var flag=0;
bt.addEventListener("click",changeColor)
function changeColor(){
    if(flag===0){
        bg.style.background="purple";
        flag=1;
    }
    else{
        bg.style.background="white";
        flag=0;
    }
}