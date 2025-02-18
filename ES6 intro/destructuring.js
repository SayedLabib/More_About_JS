
// Simple example of Object destructuring(helps to reduce the repetation of the object)

const person = 
{  
    Name:'Fuad',
   age:24,
   email: 'fuad@gmail.com'             
}

const {Name,age, email: gmail} = person;
console.log(Name);
console.log(age);
console.log(gmail);


// array destructuring

const array = [12,3,25,56,78];

const [num1,,,,num5] = array;

console.log(num1,num5);

// another example
function doubleThem(a,b)
{
    return [a*2, b*3];
}

const [first, second] = doubleThem(6,9);

console.log('The first is - '+first);
console.log("The second is - "+second);

