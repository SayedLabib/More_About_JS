


// for arrow functions for single parameter we don't have to declare it in parenthesis

// ex:01
const student = {name:'Fuad', age: 24};
const getAge = person => person.age;
const age = console.log(getAge(student));



// ex:02
const getIndex = index => index[4];
const array = [45,62,33,74,32];
const arrayIndex = console.log(getIndex(array));

// No parameters

const getPI = () => Math.PI;
console.log(getPI());

// large arrow function or, big array function

const largeArrow = (a,b,c) => {
    
    const sum = a + b + c;
    const mult = a * b * c;
    const result  = mult / sum;

    return result;
}

const result = console.log(largeArrow(12,3,4));