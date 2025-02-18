
// data access
const data = [{id:1, name:'fuad', email:'fuad@gmail.com'}];

// console.log(data);

// console.log(data[0].name);

// ex:02

const products =
    {
      count: 5000,
      dataDetails:[
        
        {Name: 'watch', price: 2000, model: 'Fossil' },
        
        {Name:'Laptop', price:75000, model:'HP pavillion'},
    ]
      
    };

    // find put the seconde product price in the list
     console.log(products.dataDetails[1]?.model); // Optional Chaining


// ex:03
// Nested Objects
const users = {
       id: 5001,
       Name:'Jhankar Mahbub',
       Address:{
             city:'Dhaka',

             street:
             {
                Apartment:'2B',
                Holdings: '04/1',
                road: 'Bhumi Office Road',
                

             }
        
       }
};

 console.log(users.Address.city);
 console.log(users.Address.street?s.model); // Chain Objects and Optional chaining
 
 