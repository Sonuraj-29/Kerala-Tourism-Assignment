
function emailLog(){
  var logemail = document.getElementById('logemail').value;

  if(logemail.trim().length!=0){
    if(!logemail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
    logerror.innerHTML = 'Invalid email format';
    logerror.style.color = 'Red';
    return false;
    }
    else{
    logerror.innerHTML = '';
    return true;
    }
    }
  else{
    logerror.innerHTML = '';
  }
}

function emailCheck(){

  var email = document.getElementById('signEmail').value;
  var emailHelpBlock = document.getElementById('emailHelpBlock');

  if(email.trim().length!=0){
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
      emailHelpBlock.innerHTML = 'Invalid email format!';
      emailHelpBlock.style.color = 'Red';
      return false;
    }
      emailHelpBlock.innerHTML = '';
      return true;
    }
    emailHelpBlock.innerHTML = '';
  }


function mobCheck(){

  var mob = document.getElementById('mob').value;
  var mobError = document.getElementById('mobHelpBlock');

  if(mob.trim().length!=0){
    if(mob.match(/^(\d{3})[-. ]*(\d{3})[-. ]*(\d{4})$/)){
      mobError.innerText = '';
      return true;
    }
    else{
      mobError.style.color = 'Red';
      mobError.innerText = 'Invalid mobile number!';
      return false;
    }
    }
    mobError.innerText = '';
  }

function show() {
    document.getElementById("message").style.display = "block";
}
  
function hide() {
    document.getElementById("message").style.display = "none";
}
  
  function pswdCheck() {

    var myInput = document.getElementById("signPswd");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(myInput.value.trim().length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }


function valid(){
  if(!emailCheck() || !mobCheck() || !pswdCheck() == false){
    return false;

  }
  else{
    return true;
  }
}




    let timeout;

    let password = document.getElementById('signPswd')
    let strengthBadge = document.getElementById('StrengthDisp')

    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    
    function StrengthChecker(PasswordParameter){

        if(strongPassword.test(PasswordParameter)) {
            strengthBadge.style.backgroundColor = "green"
            strengthBadge.textContent = 'Strong'
        } else if(mediumPassword.test(PasswordParameter)){
            strengthBadge.style.backgroundColor = 'blue'
            strengthBadge.textContent = 'Medium'
        } else{
            strengthBadge.style.backgroundColor = 'red'
            strengthBadge.textContent = 'Weak'
        }
    }

    password.addEventListener("input", () => {

        strengthBadge.style.display= 'block'
        clearTimeout(timeout);

        timeout = setTimeout(() => StrengthChecker(password.value), 50);

        if(password.value.length !== 0){
            strengthBadge.style.display != 'block'
        } else{
            strengthBadge.style.display = 'none'
        }
    });