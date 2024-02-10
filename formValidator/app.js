const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value ===''){
        username.className = 'form-control is-invalid';
    }
    if(email.value ===''){
        email.className = 'form-control is-invalid';
    }
    if(password.value ===''){
        password.className = 'form-control is-invalid';
    }
    if(repassword.value ===''){
        repassword.className = 'form-control is-invalid';
    }
})
