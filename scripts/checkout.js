let form = document.getElementsByTagName('form')[0];
let button = document.getElementById('btn');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let address = document.getElementById('address');
let zipCode = document.getElementById('zipCode');
let city = document.getElementById('city');
let error = document.querySelectorAll('[id="error"]');
let inputs = document.getElementsByTagName('input');


// the form

// looping through the error messages
function myfunction() {
    for (var i = 0; i < error.length; i++) {
        error[0].innerHTML = 'hej';
        error[1].innerHTML = 'då';
        error[2].innerHTML = 'lilla';
        error[4].innerHTML = 'du';
        error[5].innerHTML = 'skriv din adress';

    }
}

window.addEventListener('load', function() {
    let test = inputs.value === 0;
    inputs.className = test ? 'valid' : 'invalid';
});

fname.addEventListener('input', function() {
    let test = inputs.value === 0;
    if (test) {
        inputs.className = 'valid';
        error.innerHTML = '';
        error.className = 'error';
    } else {
        inputs.className = 'invalid';
    }
});

form.addEventListener('submit', function() {
    let test = inputs.value === 0;
    if (!test) {
        inputs.className = 'invalid';
        error[0].innerHTML = 'skriv ditt jävla namn';
        error[0].className = 'error active';
        error[1].innerHTML = 'ditt efternamn';
        error[1].className = 'error active';
        error[2].innerHTML = 'glöm inte din mail';
        error[2].className = 'error active';
        error[4].innerHTML = 'var bor du';
        error[4].className = 'error active';
        error[5].innerHTML = 'postnr';
        error[5].className = 'error active';
        error[6].innerHTML = 'vilken stad';
        error[6].className = 'error active';
        return false;
    } 
    else {
        inputs.className = 'valid';
        error.innerHTML = '';
        error.className = 'error';
    }
});





