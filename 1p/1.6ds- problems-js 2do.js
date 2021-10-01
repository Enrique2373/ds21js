let numeroale=100000;
var contador=0,l=0;
const map = new Map()
let ale=[];

while (contador <= 7) {
for (var a=0; i<100000; a++){
  ale[a] = Math.floor(Math.random() * numeroale);
 
  
}
var start = new Date();
for (var a=0; a<100000; a++){
  
  map.set('name'+ale[i],ale[a])
  
}
var end = new Date() - start;
contador++;
l+=end;

}

console.log('Tiempo promedio:',(l/7),'ms');