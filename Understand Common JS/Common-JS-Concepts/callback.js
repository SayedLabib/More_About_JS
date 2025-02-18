// CallBack function in Js


function greetings(greet, name)
{
   greet(name);
}

function greetMorning(name)
{
   console.log(`Good Mornings ${name}`);
}

function greetNight(name){
    console.log(`Good Night ${name}`);
    
}

greetings(greetNight, 'JHankar Mahbub');

greetings(greetMorning, 'Al fuad');