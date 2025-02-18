
const max = Math.max(3,4,10,34,56,77,23,44);
console.log(max);

const numbers = [3,4,10,34,56,77,23,44];

const arrayMax = Math.max(...numbers);


// So, the concept of spread is we can find the numbers or,
// any kind of object from the object or, array using three dots(...)
console.log(numbers);
console.log(...numbers);
console.log('The max number from the array is - '+ arrayMax);


// use spread operator to copy
// So, better approach here is to use the spread operator before pushing another value 
// to the copied array
const values = [3,4,10,34];
const values2 = values;
const values3 = [...values];
const values4 = [...values, 33, 77, 9999];


values2.push(23);
console.log(values2);
console.log(values);
console.log(values3);

// Again we can use spread operator and push another element in the array as well
console.log(values4);
