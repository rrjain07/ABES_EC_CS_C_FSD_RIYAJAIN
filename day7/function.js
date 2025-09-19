function isODD(){
    return a%2 !==0;
}


console.log(isODD(3));


function isODDusingTernary(a){
    return a%2 !==0 ? "value is odd ": "value is even";
}
//function as expression 
let funAsExpression = function isODD(a){
      return a%2 !==0 ? "value is odd ": "value is even";

}


console.log(isODDusingTernary);