
//

const products = [

    {id: 1, brand:'Fossil', price: 22500, source:'America'},
    {id:2 , brand: 'Titan', price: 15000, source:'Australia'},
    {id:3 , brand: 'Rolex', price: 150000, source:'Europe'},
];

// map method find the All the same properties from multiple Objects

const brand = products.map(product => product.brand);
console.log(brand);

// forEach method find the single properties value

const Source = products.forEach(product => console.log(product.source));

// filter method find the whole Object based on the condition

const productPrice  = products.filter(p => p.price >100000);
console.log(productPrice);

// find mehod find the single property from the first object if the condition matched

const affordable = products.find(p => p.price < 100000);
console.log(affordable);

// reduce method find the value based on the condition and will return  value

const total = products.reduce((p, c)=> p + c.price, 0);
console.log(total);

