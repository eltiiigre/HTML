document.getElementById('button1').addEventListener('click', SignIn);
let username = document.getElementById('username').value;

let signIn ={
    'userSpace':null,
    'passSpace':null,
    'userEmail':null,
    'passDigits':null,
}

function SignIn(e){
    e.preventDefault();
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    let spaceUser = (username.split(" ").length - 1);
    signIn['userSpace'] = spaceUser;
    let spacePass = (password.split(" ").length - 1);
    signIn['passSpace'] = spacePass;

    if(signIn['userSpace'] === 0 && signIn['passSpace'] === 0 ){
        
        let search = username.search("@gmail.com");
        if(search => 0){
            signIn['userEmail'] = search
        }else{
            signIn['userEmail'] = -1;
        }

        let passLength = password.length;

        if(passLength => 6){
            signIn['passDigits'] = passLength;
        }
    }else{
        document.querySelector('#results').textContent = 'Email and Password Incorrect'
        document.querySelector('#results').style.color = 'red'
        document.querySelector('#results').style.fontSize = '15px';
       
    }

    if(signIn['userSpace'] === 0 && signIn['passSpace'] === 0 && signIn['userEmail'] >= 0 && signIn['passDigits'] >= 6 ){

        document.querySelector('#results').textContent = 'Email and Password correct'
        document.querySelector('#results').style.color = 'green'
        document.querySelector('#results').style.fontSize = '15px';

        
    }else{
        document.querySelector('#results').textContent = 'Email and Password Incorrect'
        document.querySelector('#results').style.color = 'red'
        document.querySelector('#results').style.fontSize = '15px';
    }

}