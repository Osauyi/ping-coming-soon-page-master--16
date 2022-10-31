const Email = document.querySelector("input")
const Form = document.querySelector(".Form")
const errorMessage = document.querySelector(".errormsg")
const EmailName = document.getElementsByName("email")[0]

Form.addEventListener("submit", function(e) {
  if (Email.value === "" || Email.value == null){
    Email.style.borderColor = " hsl(354, 100%, 66%)"
    errorMessage.style.display = "block"; 
    EmailName.placeholder = "example@email/com"
  }
  e.preventDefault()
})