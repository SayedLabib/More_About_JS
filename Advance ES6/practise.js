
//problem 1: we have an odd array [1,3,5,7]. now convert the array to an even numbers array 
// using for loop and arary.,ap() method

// 2: An array is given - [33, 50, 79, 78, 90, 101, 30]. Now return or get all the elements
// which are divisible 10 using filter() method

// Now do the same task using find() method for problem 2

//Problem 3: You have an array of Object like- 

//  const instructor = 
//  [
//    {name:'Nodi' , age:28 , position:'Senior' },
//    {name:'Akil' , age:26 , position:'junior' },
//    {name:'Shobuj' , age:30 , position:'Senior' }

//  ]   display the instructor name who have the position senior using filter() method

// problem 4:
 
// const people =
// [
//     {name:'Meena' , age:20},
//     {name:'Reena' , age:15 },
//     {name:'Suchoriata', age:22}
// ]

// find out the total age from the array of Objects using for loop and reduce method as well

function min(nums) { return Math.min(nums) }
console.log(min( 1,3,4,8));

const cube=x=> x*x*x; 
console.log(cube(2))

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

const{price} = product;
console.log(price);
