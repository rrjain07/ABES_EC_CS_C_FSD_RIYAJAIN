var a=20;
let b=30;
const pi= 3.14;
console.log("global scope:");
console.log("value of a in global scope : ",a);
console.log("value of b in global scope : ",b);
console.log("value of pi in global scope : ",pi);
function callValues(a,b,c){
    console.log("global scope:"); 
 console.log("value of a inside function : ",a); 
 console.log("value of b in inside function : ",b);
 console.log("value of pi inside function : ",c);


}
callValues(a,b,pi);