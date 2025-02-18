
// ASo, arguments is basically is Array like object
// I can see the other elements from the array like objects 
// but, cant push or, pop the element from the object

function Sum(a,b,c)
{
    
    console.log(arguments);
    console.log(arguments[4]);
    
    const args = [...arguments];
    console.log(args);
    
    const total = a  + b + c;
    return total;
}

const result = Sum(12,12,12,67,56);
	
console.log(result);

// let p='Javascript'; 
// let q=p; 
// p='React'; 
// console.log(q);
// const isTrue=true;
// console.log(!isTrue ? "hello" : "world")
function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));