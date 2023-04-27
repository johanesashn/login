const rightForm = document.querySelector(".right-form")
const leftForm = document.querySelector(".left-form")
const signUpContent = document.querySelector(".sign-up-content")
const loginContent = document.querySelector(".login-content")
const signUpForm = document.querySelector(".sign-up-form")
const signInForm = document.querySelector(".sign-in-form")
const input = document.querySelectorAll(".input")

function slide(){
    rightForm.classList.add("slide")
    leftForm.classList.add("slide")
    signUpContent.classList.add("slide")
    signUpForm.classList.add("back")
    loginContent.classList.add("back")
    signInForm.classList.add("slide")
    
    rightForm.classList.remove("back")
    leftForm.classList.remove("back")
    loginContent.classList.remove("slide")
    signUpContent.classList.remove("back")
    signUpForm.classList.remove("slide")
    signInForm.classList.remove("back")
}

function slideBack(){
    rightForm.classList.add("back")
    leftForm.classList.add("back")
    loginContent.classList.add("slide")
    signUpContent.classList.add("back")
    signUpForm.classList.add("slide")
    signInForm.classList.add("back")
    
    rightForm.classList.remove("slide")
    leftForm.classList.remove("slide") 
    loginContent.classList.remove("back")
    signUpContent.classList.remove("slide")
    signInForm.classList.remove("slide")
    signUpForm.classList.remove("back")

}