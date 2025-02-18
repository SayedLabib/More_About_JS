
// how to show the object's keys or, properties in an array 
// As well as how to display the object's values in an array

const product = 
{
    Pname : 'comb',
    color: 'Golden-red',
    price: 120,
    length: 10
}

const keys = Object.keys(product);
const values = Object.values(product);

// console.log(keys);
// console.log(values);

// paring the properties and values in an two dimensional array

// const entries = Object.entries(product);
// console.log(entries);

// deleting one of the properties in two different ways

delete product.length;
console.log(product);

// Here there is no change to the actual product since used a destructuring method here
const {color,...newProduct} = product;
console.log(newProduct);
console.log(product);


// freeze method to freeze the object so that no internal changes can be made
product.source = 'Bangladesh';
Object.seal(product);
product.source = 'Thiland';
delete product.source;
product.price = 1000;
console.log(product);

// where if we want to use seal we can modify the products values but,
// can't add or remove them




