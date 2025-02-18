


//1. Function declaration
function add(num1, num2)
{
   const result = num1 + num2;
   return result;
}

// const sum = add(12, 12);

//2. Template string
// const a = 10;
// const b = 20;

// const sum = `The sum of ${a} and ${b} is ${a+b}`;

// console.log(sum);


// function expressions

const add2 = function(a,b){
     return a + b;
};

// Arrow function expressions just like function expressions

const add3 = (a,b) => a + b; //for simple mathematical equations

const sum = add3(3,12);
console.log(sum);
