const numbers  = [12, 13, 14, 15, 16];


const doubled = [];


// we can use an arrow function to and then map it too

const doubled2 = numbers.map(n => n*2) ;

console.log(doubled2);


//Ex:02 - Using map and callback functions

// So, basically what  map do is doing here is -  loop through the array and using the 
// callback function it doubled the items in the array and then store the result 
// and finally return the final stored array result
// No need for using new array to store the result
function doubleIT(num)
{
   return num * 2;
}

const result = numbers.map(doubleIT);
console.log(result);


// Ex:01 - simple way of doing doubled numbers through a function
// for(num of numbers )
//     {
//         const double  = num *2;
//         doubled.push(double);
//     }

//     console.log(doubled );
    