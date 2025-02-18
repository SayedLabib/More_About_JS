

function checkAge() {
    const inputField = document.getElementById('input-field').value;
    const errorFiled = document.getElementById('error');


    errorFiled.innerHTML = '';

    try {
        const age = parseInt(inputField);

        if (isNaN(age)) {
            throw ('Please enter a valid age');
        }
        else if (age < 18) {
            throw ("you are Underaged not allowed to be Entered");
        }


        else if (age > 30) {
            throw ("You are Over aged do not enter");
        }


        else {
            throw ("You are allowed to enter");
        }

        
    }

    catch (error) {
        console.log('ERROR:', error);
        errorFiled.innerHTML = 'Error:' + error;
    }
}