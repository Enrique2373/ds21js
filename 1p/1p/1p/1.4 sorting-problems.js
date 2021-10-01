//metodo burbuja
var numero=[];
var contador=1,pasos=0;
var l=0,m=0;

console.log("Orden "/n)
    console.log(numero);
console.log("metodo burbuja");
//while (contador < 11) {
for(var i=0;i<10000;i++){
    numero [i]=Math.floor(Math.random() * 10000);
}
console.log("Numeros sin orden");
console.log(numero);
    var a = numero.length;
    var temp = 0;
    var start = new Date();
for(var i=0; i < a; i++){
for(var j=1; j < (a-i); j++){
    
    if( numero [j-1] > numero[j]){
  
    temp =numero[j-1];
    numero[j-1] = numero[j];
    numero[j] = temp;
    pasos++   
}
}

var end = new Date() - start;
} 
/*console.log('tiempo de ejecución ',end ,'ms','pasos:',pasos,'numero de tabla:',contador)*/
l+=end;
m+=pasos;

pasos=0;
    ++contador;
console.log("Numeros ordenados ");
console.log(numero);
//console.log('Tiempo sumado:',l,'Pasos contados:',m );
console.log('Tiempo Promediado:',(l/10),'ms','Pasos Promediados:',(m/10), '\n \n' );
 

//Metodo selecte//
var numero=[];
var contador=1,pasos=0;
var l=0,m=0;

//numero [0]=10000*Math.random();
console.log("Metodo Selecter")

for(var i=0;i<10000;i++){
    numero [i]=Math.floor(Math.random() * 10000);;
}
console.log("Numero sin ordenar");
console.log(numero);
var i, j, menor, pos, tmp;
var start = new Date();
for (i = 0; i < numero.length - 1; i++) {      
      menor = numero[i];                                     
      pos = i;                          
      for (j = i + 1; j < numero.length; j++){ 
            if (numero[j] < menor) {           
                menor = numero[j];             
                pos = j;
            }
      }
      if (pos != i){                                              
          tmp = numero[i];
          numero[i] = numero[pos];
          numero[pos] = tmp;
          pasos++   
      }
} 
var end = new Date() - start;
//console.log('Tiempo de ejecución ',end ,'ms','Pasos:',pasos,'Nomero de Tabla:',contador)
l+=end;
m+=pasos;

pasos=0;
    ++contador;
//}
console.log("Numeros ordenados");
console.log(numero);
//console.log('Tiempo sumado:',l,'Pasos contados:',m )
console.log('Tiempo Promediado:',(l/10) ,'ms','Pasos Promediados:',(m/10) );