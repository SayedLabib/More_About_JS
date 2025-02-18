


// A closure gives you the access to the outer function scope
function first()
{
    let c = 0;
    
    return function second()
    {
        c++;
        return c;
    }
}

const result = first();

console.log(result());

