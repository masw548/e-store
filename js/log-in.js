// 
let correctPassword = false
let correctEmail = false
// show and hide password................................................................................
let passwordInput = document.getElementById('password')
let passIcon = document.querySelector('.visibility')
passIcon.addEventListener('click',()=>{
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text'
        passIcon.textContent = 'visibility'
    }else{
        passwordInput.type = 'password'
        passIcon.textContent = 'visibility_off'
    }
})
// chicking the email with localstorage value.......................................................................................
let emailIcon = document.getElementById('email-icon')
let emailInput = document.getElementById('email')
emailInput.addEventListener("input", () => {
    let localEmail = localStorage.getItem('email')
    if(localEmail){       
        if (localEmail == emailInput.value){
            correctEmail = true
        }else{
            correctEmail =false
        }
    }else{
        emailInput.setCustomValidity('mmm looks like you dont have an account please press SIGN UP button')    
    }
    emailInput.reportValidity();  
});

// chicking the password with local storage value.........................................................................................
let localPass = localStorage.getItem('password')
let passLockIcon = document.querySelector('.lock')
passwordInput.addEventListener('input',()=>{
    if(localPass){
        if(localPass == passwordInput.value){
            correctPassword = true;
            passwordInput.style.color = '#f05d2b';
        }else{
            correctPassword = false;
            passwordInput.style.color = '#fff';
        }
    }else{
        passwordInput.setCustomValidity('looks like you dont have an account please press SIGN UP button')    
    }
    passwordInput.reportValidity()
})
// correct account  .........................................................................................
let loginBtn = document.getElementById('login')
loginBtn.addEventListener('click',()=>{    
    if(correctEmail){
        if(correctPassword){
            loginBtn.setCustomValidity('')
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 100);
        }else{
            loginBtn.setCustomValidity('please enter a valid password')
        }
    }else{
        loginBtn.setCustomValidity('please enter a valid email adress')
    }
    loginBtn.reportValidity()
});
// ..........forget password..............
function forgetPassword() {
    (localPass)? alert('your password is: '+localPass):alert('you dont have an account')    
}