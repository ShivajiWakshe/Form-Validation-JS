const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

/* TOGGLE */
loginBtn.onclick = () => {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
};

registerBtn.onclick = () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
};

/* REGISTER */
function register(){
  const email = regEmail.value;
  const pass = regPass.value;

  if(pass.length < 6){
    regMsg.innerText = "Password must be at least 6 characters ❌";
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("password", pass);

  regMsg.innerText = "Registered Successfully ✅";
}

/* LOGIN */
function login(){
  const savedEmail = localStorage.getItem("email");
  const savedPass = localStorage.getItem("password");

  if(loginEmail.value === savedEmail && loginPass.value === savedPass){
    loginMsg.innerText = "Login Successful ✅";
  }else{
    loginMsg.innerText = "Incorrect Email or Password ❌";
  }
}

/* SHOW / HIDE PASSWORD */
function togglePassword(id){
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}
