    function kebabToSnake(stri){
        // var i=stri.indexOf("-");
        // if(i === -1){
        //     return stri;
        // }
        // console.log("hello");
        // stri[i]="_";
        var newStr=stri.replace("-","_");
        return newStr;    
    }