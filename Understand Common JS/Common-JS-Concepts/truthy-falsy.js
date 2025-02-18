

// *
// Truthy:
// 1. True
// 2. any number (+ve, -ve) will be truthy other than 0
// 3.any string will be truthy except for empty string
// 4. '0'
// 5. {} empty object is a truthy value
// 6. [] empty array is a truthy value
// 
// 
// 

// falsy:
// 1.false
// 2.0
// 3. '' empty string will be falsy
// 4. undefined is a falsy value
// 5. Null is a falsy value
// 
// 
// *//




const x = false;

if(x = -4)
    {
        console.log(`the value of x is truthy ` );
        
    }

else{
      console.log(`the value of x is falsy`);
      
}