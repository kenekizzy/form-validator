//Declaring the DOM variables
const forms = document.querySelector("#forms")
const password1 = document.querySelector("#password1")
const password2 = document.querySelector("#password2")
const message = document.querySelector(".message")
const statement = document.querySelector("#success-statement")
const submitBtn = document.querySelector("#submit-btn")

//Setting the password match and the isvalid match to false
let isValid = false
let passwordMatch = false

//Processing the form
const processForm = (e) =>{
    e.preventDefault()
    validateForm()
    if(isValid && passwordMatch){
        storeData()
    }
}

//Validating the user Data
const validateForm = () =>{
    isValid = forms.checkValidity()
    if(!isValid){
        errorMessage("Please fill all fields correctly", "red")
        return;
    }
    if(password1.value === password2.value){
        passwordMatch = true
        password1.style.borderColor = "green"
        password2.style.borderColor = "green"
    }else{
        errorMessage("The passwords don't match", "red")
        return;
    }
    if(isValid && passwordMatch){
        errorMessage("Form submitting successful", "green")
    }
    
}

//Displaying an Error Message
const errorMessage = (value, color) => {
    statement.textContent = value
    statement.style.color = color
    message.style.borderColor = color
    password1.style.borderColor = color
    password2.style.borderColor = color
}

//Storing the user data as an  Object
const storeData = () => {
    const user = {
        name: forms.name.value,
        phone: forms.phone.value,
        email: forms.email.value,
        website: forms.website.value,
        password: forms.password.value
    }
    console.log(user)
}

//Adding the Event Listener
forms.addEventListener("submit", processForm)