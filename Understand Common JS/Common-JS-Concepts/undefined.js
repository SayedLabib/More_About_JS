//**
// 8 ways to get undefined
// 
// 1. variable that is not initialized yet 
// 2. function that has been not returned
// 3. Parameter that is not passed will be undefined
// 4. if return value is not declared them it will be undefined
// 5.If there is no property exists in the object by default then it will be undefined
// 6. accessing array elements out of the index range will be undefined
// 7. deleting and element from an array will be undefined
// 8. if we explicitly set the value undefined then it will be undefined
//  */   


// 1
let first;
console.log(first);

// 2
function total(a,b)
{
   const sum = a + b;
}
const result = total(12,12);
console.log(result);

// 3
function Sum(a,b,c,d)
{
 
   console.log(a,b,c,d);
   
}

Sum(12,5);

// 4

function noNegative(a,b)
{
    if(a < 0 || b < 0)
        {
                return;
        }
    
    return a+b;  
}

console.log(noNegative(12,-12));

// 5

const fifth = 
{
     name: 'Shudorshon',
     id:23,
}

console.log(fifth.salary);

// 6

const array = [12, 13, 4, 1,51];
console.log(array[1], array[6], array[10]);

// 7
