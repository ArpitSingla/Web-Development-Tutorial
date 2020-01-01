var todos=[];
var input=prompt("What would you like to do ?");
while(input!=="quit"){
    if(input==="new"){
        var data=prompt("Enter a new todo");
        todos.push(data);
        console.log(data+" added to the list");
    }
    else if(input==="list"){
        console.log("***************");
        todos.forEach(function(todo,i){
            console.log(i+" : "+todo);
        })
        console.log("***************");
    }
    else if(input==="delete"){
        var index=prompt("Enter Index of entry to be deleted");
        todos.splice(index,1);
        console.log("Deleted "+todos[index]+" from todo list");
    }
    input=prompt("What would you like to do ?");
}
alert("Okay, you quit the App");
console.log("Okay, you quit the App");

