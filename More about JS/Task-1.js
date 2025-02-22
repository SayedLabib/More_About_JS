




// Task-1

// a) writing a function that show an output result after 5 seconds

const timeOut = setTimeout( () => 
    {
          
        console.log("Hello");   

    }, 5000)



// b) Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.

function delayedGreeting(Greetings, delayTime)
{
    
    setTimeout( () =>{
           
        console.log(Greetings);
    }, delayTime );
    
    
}
delayedGreeting('Good Morning !!', 3000) 