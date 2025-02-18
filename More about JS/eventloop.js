
// console.log("Synchronus_1");

// const timeOut = setTimeout( () => 
//     {
          
//         console.log("Asynchronus_1");   

//     }, 2000)


// console.log("Synchronus_2");


// const timeOut2 = setTimeout( () => {
      
//     console.log("Asycnronus_2");
    
// }, 5000) 

// console.log("Synchronus_3");


async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
   }
   f();