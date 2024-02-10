const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


function error(input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
}
function success(input){
    input.className('form-control is-valid')
}

function checkEmail(input){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value)){
    success(input)
  }
  else{
    error(input,'hatalı bir mail adresi');
  }
}

  function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value ===''){
        error(input, `${input.id} is required`);
    }
        else{
        success(input)
    }
    });
    
  }

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,repassword]);
    checkEmail(email);    

    // if(username.value ===''){
    //     error(username, "Username Gerekli");
    // }
    // else{
    //     success(username)
    // }
    // if(email.value ===''){
    //     error(email, "E-mail Gerekli");
    // }
    // else if(!validateEmail(email.value)){
    //     error(email," E-mail adresinizi lütfen kontrol ediniz")
    // }
    // else{
    //    success(email)

    // }
    // if(password.value ===''){
    //     error(password, "password Gerekli");


    // }
    // else{
    //    success(password)

    // }
    // if(repassword.value ===''){
    //     error(repassword, "repassword Gerekli");
    // }
    // else{
    //    success(repassword)

    // }
})
