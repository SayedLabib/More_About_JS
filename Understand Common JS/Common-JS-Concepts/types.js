// javascript is a dynamic type language
// there is no need to define the type of the variable before the variable
// like any other strongly typed language


// primitive types
const a = 'Abul';
const b = 28;

// non primitive types
const c = [13, 14 ,16 ,33, 77, 46];
const student = {
      name:'Fuad',
      class:'PH batch 9',
      id:281
};

console.log(typeof a, typeof b, typeof c, typeof student);

// non primitive type language types ar refere to the previously declared type if I do not
// re-aasign the value
// Ex:----

let data = 
{
    name:'Abul',
};

let data2 = data;
// data2.name = 'Khairul';
console.log(data, data2); // The output will be same for the two different objects

// But if I re-assigned the value  then the output will not change for the first object

data2 = {name:'khairul'};
console.log(data, data2);



