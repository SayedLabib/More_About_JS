// Class Object concept in JavaScript

class Products{

    constructor(id,name,price)
    { 
      this.id = id;
      this.name = name;
      this.price = price;
    }

    details(name,price) 
   {
    
      if(price < 1000)
            {
                   console.log(`The product name is ${name}`);
                   
            }
      else{
        console.log(`The product is not included in the list`);
        
      }  
   } 
}

const mobile = new Products(1,'symphony',800);
console.log(mobile);
mobile.details('symphony',800);
