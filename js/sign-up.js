
// ......................chicking first and last name....................
let fnameInput = document.getElementById('fname')
let firstName = ''
fnameInput.addEventListener('input', () => {
    firstName=''
    if (/[^a-zA-Z]/.test(fnameInput.value)) {
        fnameInput.style.color = '#fff';
        fnameInput.setCustomValidity('no numbers no special char')
    } else {
        fnameInput.setCustomValidity('')
        fnameInput.style.color = '#f05d2b';
    }
    fnameInput.reportValidity()
});

fnameInput.addEventListener('blur',()=>{
    if (/[^a-zA-Z]/.test(fnameInput.value)) {
        fnameInput.style.color = '#fff';
    } else {
        fnameInput.style.color = '#f05d2b';
        firstName = fnameInput.value
    }
})




let lnameInput = document.getElementById('lname')
let lastName = ''
lnameInput.addEventListener('input', () => {
    lastName =''
    if (/[^a-zA-Z]/.test(lnameInput.value)) {
        lnameInput.style.color = '#fff';
        lnameInput.setCustomValidity('no numbers no special char')
    } else {
        lnameInput.setCustomValidity('')
        lnameInput.style.color = '#f05d2b';
        lastName = lnameInput.value
    }
    lnameInput.reportValidity()
});
lnameInput.addEventListener('blur',()=>{
    if (/[^a-zA-Z]/.test(fnameInput.value)) {
        lnameInput.style.color = '#fff';
    } else {
        lnameInput.style.color = '#f05d2b';
        lastName = lnameInput.value
    }
})
// ..........................chicking E-mail................................

let emailInput = document.getElementById("email");
let icon = document.getElementById('lockEmailIcon')
let email = ''
emailInput.addEventListener("input", () => {
    email =''
    if (!isValidEmail(emailInput.value)) {
        emailInput.setCustomValidity(" البريد الإلكتروني غير صالح!");
        icon.style.color = '#fff'
    } else {
        emailInput.setCustomValidity("");
        icon.style.color = '#f05d2b'
    }
    emailInput.reportValidity();
});
function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
emailInput.addEventListener('blur',()=>{
    if (!isValidEmail(emailInput.value)) {
        icon.style.color = '#fff'
    } else {
        icon.style.color =' #f05d2b'
        // تخزين القيمة المفخوصة لارسالها للوكال ستوريج
        email = emailInput.value
    }
    console.log(email);
})
// ........................................فحص كلمة السر.................
let passwordInput = document.getElementById('password')
// مستمع حدث انبوت
passwordInput.addEventListener('input', () => {
    // جلب ايقونة القفل لاعطاءها لون لاحقا
    let lockIcon = document.getElementById('lock-icon')
    let password = passwordInput.value
    // متغير يعبر عن قوة كلمة السر
    let stringth = 0
    // تجهيز رسالة لوضعها كرسالة تحذيرية
    // let messages = [];
    // فحص الحد الأدنى للطول
    if (password.length < passwordInput.minLength) {
        // messages.push(" 8 محارف على الأقل.");
    } else { stringth++ }
    // فحص وجود حرف كبير
    if (!/[A-Z]/.test(password)) {
        // messages.push("حرف كبير واحد على الأقل.");
    } else { stringth++ }
    // فحص وجود رقم
    if (!/[0-9]/.test(password)) {
        // messages.push("رقم واحد على الأقل.");
    } else { stringth++ }
    // فحص وجود محرف خاص
    if (!/[^A-Za-z0-9]/.test(password)) {
        // messages.push("يجب أن تحتوي على محرف خاص مثل (!@#$%).");
    } else { stringth++ }
    // تحديث الرسالة التحذيرية
    // passwordInput.setCustomValidity(messages.length > 0 ? messages.join('') : '')
    // passwordInput.reportValidity()

    switch (stringth) {
        case 0:
        case 1:
            // تغيير لون ايقونة القفل
            lockIcon.style.color = '#f9c2b0'
            break;
        case 2:
            lockIcon.style.color = '#fba78a'
            break;
        case 3:
            lockIcon.style.color = '#f78e6b'
            break;
        case 4:
            lockIcon.style.color = '#f3764c'
            break;
        default:
            lockIcon.style.color = '#fff'
            break;
    }
})

// .....................chicking confirming password
let password = '';
let confirmInput = document.getElementById('confirm-password')
confirmInput.addEventListener('input', () => {
    let lockIconConfirm = document.getElementById('confirmLock')
    if (passwordInput.value == confirmInput.value) {
        // تغيير لون ايقونة القفل للاخضر
        lockIconConfirm.style.color = '#f3764c'
        password = confirmInput.value
    } else {
        lockIconConfirm.style.color = '#fff'
    }
})

//  عند الضغط على العين بجانب كلمة السر او تاكيد كلمة السر
function togglePassword(icon, id) {
    let inputFaild = document.getElementById(id)
    if (inputFaild.type === 'password') {
        // تغيير نوع الحقل ل تيكست لتظهر كلمة السر
        inputFaild.type = 'text'
        // تغيير الايقونة 
        icon.textContent = 'visibility'
    } else if (inputFaild.type === 'text') {
        inputFaild.type = 'password'
        icon.textContent = 'visibility_off'
    }
}

// عند الضغط على ساين اب
let btn = document.getElementById('sign-up')
btn.addEventListener('click',addToLocal)

function addToLocal() {
    if (!fnameInput.value || !lnameInput.value || !passwordInput.value || !emailInput.value) {
        alert('please fill out all the field')
    } else {
        if (email && lastName && firstName && password) {
            localStorage.setItem('password', password)
            localStorage.setItem('first name', firstName)
            localStorage.setItem('last name', lastName)
            localStorage.setItem('email', email)
            setTimeout(() => {
                window.location.href= 'login.html'
            }, 100);
        } else {
            alert('please enter correct values')
        }
    }
}



