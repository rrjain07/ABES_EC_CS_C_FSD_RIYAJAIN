{var a=20;
let b=30;
const pi= 3.14;
console.log("block scope:");
console.log("value of a in block scope : ",a);
console.log("value of b in block  scope : ",b);
console.log("value of pi in block scope : ",pi);
}

console.log("outside the block:");
console.log("value of a in block scope : ",a);
console.log("value of b in block scope : ",b);//error
console.log("value of pi in block scope : ",pi);//error