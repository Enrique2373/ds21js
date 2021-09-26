function fibonacci(num){
     var a = 1, e = 0, temp;

     while (num >= 0){
         temp = a;
         a = a + e;
         e = temp;
         num--;
     }


     return e;
}

fibonacci(10);

function poweroftwo(i) {
    if (i % 2 == 0) {
        console.log("is power of two");
    } else {
        console.log("is'nt power of two");
    }
}

poweroftwo(2);