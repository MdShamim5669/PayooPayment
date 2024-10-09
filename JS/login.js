// document.getElementById('login-btn').addEventListener('click',function(event){
//     event.preventDefault();

//     const PhoneNUmber = document.getElementById('PhoneNumber').value;
//     const Password = document.getElementById('Password').value;

//     if(PhoneNUmber == '5' & Password == '1234'){
//         console.log('You are Logged in');
//     }
//     else{
//         alert('Wrong Phone NUmber or Pin');
//     }

// })


// Add Event Listener
document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const PhoneNumber = document.getElementById('PhoneNumber').value;
        const PinNumber = document.getElementById('Password').value;

        if (PhoneNumber == '01743597989' && PinNumber == '1234') {
            window.location.href = '/home.html';
        }
        else {
            alert('Wrong Phone number and Pin Number.')
        }
    })