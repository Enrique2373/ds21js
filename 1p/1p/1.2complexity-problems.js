function eratosthenes(a){
    var array = [];
    var tmpArray = []; // 
    var maxPrimeFactor = 0;
    var upperLimit = Math.sqrt(a);
    var output = [];
    
    for(var i = 2; i < a; i++){
        array.push(i);
    }
    
    for(var i = array[0]; i < upperLimit; i = array[0]){
        removeMultiples: 
        for(var j = i, k = i; j < a; j += i){
            var index = array.indexOf(j);
            if(index === -1)
                continue removeMultiples;
            else
                array.splice(index,1);
        }
        tmpArray.push(k);
    }
    array.unshift(tmpArray);
    return array;
    }

    sieve(100);

    

    function random(n){
        min = 1;
        return  Math.floor(Math.random() * (n - 1)) + 1;
    }

    sieve(100);