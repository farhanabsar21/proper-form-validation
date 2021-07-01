const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordRpt = document.getElementById("passwordRpt");

//show success 
const showSuccess = input => {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

//show error 
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector("small")
    small.innerText = message
}

// check email is valid
const isValidateEmail = input => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return emailRex.test(String(email).toLowerCase());
    if(emailRex.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, "Email is not valid")
    }
}

// check require function
const checkRequire = inputArr =>  {
    inputArr.forEach(input => {
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

// check input length 
const checkLength = (input, min, max) => {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less that ${max} characters`)
    }else{
        showSuccess(input)
    }
} 

// check password is same 
const checkPassMatch = (passOne, passTwo) => {
    if(passOne.value !== passTwo.value){
        showError(passTwo, "Password do not match")
    }
}

//get field name
const getFieldName = input => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// adding submit event 
form.addEventListener("submit", e => {
    e.preventDefault()
    checkRequire([username, email, password, passwordRpt])
    checkLength(username, 3, 15)
    checkLength(password, 6, 20)
    isValidateEmail(email)
    checkPassMatch(password, passwordRpt)
})


// non professional system

// if(username.value === ""){
//     showError(username, "Username is required")
// }else{
//     showSuccess(username)
// }

// if(email.value === ""){
//     showError(email, "Email is required")
// }else if(!isValidateEmail(email.value)) {
//     showError(email, "Email is not valid")
// }
// else{
//     showSuccess(email)
// }

// if(password.value === ""){
//     showError(password, "Password is required")
// }else{
//     showSuccess(password)
// }

// if(passwordRpt.value === ""){
//     showError(passwordRpt, "Password repeat is required")
// }else{
//     showSuccess(passwordRpt)
// }