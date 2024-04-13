var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})

function validaAcesso(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
  
    if(validaDados(email, senha)){
      window.location.href = 'produtos.html';
    }
};

function validaDados(email, senha){
  if(email == "" || senha == ""){
    return false;
  }
  return true;
}