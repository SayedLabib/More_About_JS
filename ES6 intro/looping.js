
// for of normally use in the array or string not in an object 
// where for in use on object

// example:1

const numbers = [1,2,3,4,5]; 

for(const num of numbers)
    {
    //    console.log(num);
       
    }

//example:2 

const Name = 'Sayed Fuad Al Labib';

for (const name of Name )
    {
    //   console.log(name);
    }


 //example:3 
 const product = 
 {
     Pname : 'comb',
     color: 'Golden-red',
     price: 120,
     length: 10
 }

 for(const p in product)
    {
        const values = product[p];
        
        // console.log(p, values);
        
    }

//example   :4 

 const keys = Object.keys(product);
//  console.log(keys);
 
 for(const key of keys)
    {
        const value = product[key];
        console.log(key, value);
        
    }