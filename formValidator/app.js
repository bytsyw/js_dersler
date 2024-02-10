const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phone = document.getElementById('phone');

function error(input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
}
function success(input){
    input.className = 'form-control is-valid';
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
  function checkLenght(input, min, max){
    if(input.value.lenght < min){
        error(input`${input.id} en az ${min} karakter girmelisiniz`)
    }
    else if(input.value.lenght > max){
        error(input,`${input.id} en fazla ${max} karakter girmelisiniz`)
    }
    else{
        success(input)
    }
  }
  function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        error(input2, 'Parolalar eşleşmiyor');
    }
  }

  function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){error(input,'telefon 10 karakterli olmalı')}
  }



form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    
    checkLenght(username,7.15)
    checkLenght(password, 7,12);
    checkPassword(password,repassword);
    checkPhone(phone);

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
