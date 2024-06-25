const isValidEmail = (email) => {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
}
const validateForm = (form)=>{
    const inputEmail = form.querySelector('.email-input');
    let invalid = form.querySelector('.invalid');
    if(!isValidEmail(inputEmail.value)){
        invalid.classList.add("error");
        return false;
    }
    invalid.classList.remove("error");
    return true;
}
const message = (email, show=true) => {
    const msg = document.querySelector('.messagebox');
    const main = document.querySelector('.main');
    const emailElement = document.getElementById('entered-email');
    emailElement.innerText=email;
    if(show){
        main.classList.add('hidden');
        msg.classList.remove('hidden');
    }
    else{
        msg.classList.add('hidden');
        main.classList.remove('hidden');  
    }
}
const form = document.querySelector('.form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(validateForm(form)){
        const email = form.querySelector('.email-input');
        message(email.value);
        email.value='';
    }
});

const btn = document.querySelector('.msg-btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    message('',false);
});