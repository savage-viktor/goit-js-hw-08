import throttle from "lodash.throttle";
const formRef = document.querySelector(".feedback-form")

const toSave = { email: "", message: "" };

if (localStorage.getItem('feedback-form-state')) {

    const objectFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'))

    toSave.email = objectFromStorage.email
    toSave.message = objectFromStorage.message
}

formRef.email.value = toSave.email
formRef.message.value = toSave.message

function inputEmail(eve) {
    if (eve.target.name === "email") {
        toSave.email = eve.target.value
    }
    if (eve.target.name === "message") {
        toSave.message = eve.target.value
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(toSave))
}

function submitFn(eve) {
    eve.preventDefault()
    eve.currentTarget.reset();
    localStorage.clear()
    console.log(toSave)
    toSave.email = "";
    toSave.message = "";
}

formRef.addEventListener("input", throttle(inputEmail, 500))
formRef.addEventListener("submit", submitFn)
