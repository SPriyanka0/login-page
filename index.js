// hide sign up or log in forms from which ever is needed
document.addEventListener("DOMContentLoaded" , () =>{
    const logIN = document.querySelector('#log-in');
    const createAcc = document.querySelector('#createAccount');
    //do somthing when create account or log in link is clicked
    document.querySelector('#linkSignUp').addEventListener("click",  e =>{
    e.preventDefault();
        logIN.classList.add('hide');
    createAcc.classList.remove('hide');
    });
    //copy paste from above but switch it up
    document.querySelector('#linkLogIn').addEventListener("click",  e =>{
        e.preventDefault();
        logIN.classList.remove('hide');
        createAcc.classList.add('hide');
        });
    } );
    //store input
    function getInputFromTextBox() {
        var input = document.getElementsByClassName("#userInput");
        console.log(input);
    }