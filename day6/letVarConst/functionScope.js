function fun(){
var a=20;
let b=30;
const pi= 3.14;
console.log("function scope");
console.log("value of a in function : ",a);
console.log("value of b in function : ",b);
console.log("value of pi in function : ",pi);
}
fun();
console.log("outside the function:");
console.log("value of a outside function : ",a);
console.log("value of b outside function : ",b);
console.log("value of pi outside function : ",pi);