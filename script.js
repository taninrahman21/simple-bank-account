const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function(){
  const email = document.getElementById("email-field").value;
  const password = document.getElementById("password-field").value;
  if(email.endsWith("@gmail.com") === true && password.length >= 6){
    window.location.href = "bank.html";
  } else {
    alert("Please Enter a valid Account!")
  }
})
