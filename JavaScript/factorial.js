function factorial(num){
    var fact=1;
    while(num!=0){
        fact=fact*num;
        num=num-1;    
    }
    return fact;
}