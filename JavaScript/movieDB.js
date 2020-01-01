var movieDB = [
    {
        title: "In Bruges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Mad Max Fury Road",
        hasWatched: false,
        rating: 3.5
    },
]

movieDB.forEach(function(item){
    var result="You have"
    if(item.hasWatched===true){
        result +=" watched ";
    }
    else{
        result +=" not seen ";
    }
    result +="\"" + item.title + "\" -";
    console.log(result+" "+item.rating+" stars");
    
})