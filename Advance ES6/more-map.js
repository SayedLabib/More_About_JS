const numbers = [12, 5, 10 ,32, 27];


// using  arrow function and mapping

const mode = numbers.map(num => num/2);
console.log(mode);

const Add = numbers.map(num => num+10);
console.log(Add);

const friends = ['Jhon','Don','Rafi', 'Baron', 'Fuad'];
const firstLetter = friends.map(f => f[0]);
console.log(firstLetter);

