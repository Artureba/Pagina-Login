var message = document.getElementById("message")
var form = document.getElementById("form")

function formulario(evento) {
    if(evento.preventDefault)evento.preventDefault();
    console.log(evento);
    var email = evento.target[0].value;
    var senha = evento.target[1].value;
    var selecao = evento.target[2].value;
    if((email === 'prof@gmail.com' && senha === 'prof123' && selecao === "valor2")
    || (email === 'aluno@gmail.com' && senha === 'aluno123' && selecao === "valor3")){
        gravarUsuario(email);
        location.replace("HomePage.html")
    }else{
        message.innerHTML = "<strong>Login Inválido!</strong>"
   }
}
 
form.addEventListener("submit",formulario);


function gravarUsuario(emailUsuario){
    localStorage.setItem("email", emailUsuario);
}

function lerUsuario(){
    return localStorage.getItem("email");
}

/*
window.onload = () => {
    entrar.onclick = () => {
    let salvar = confirm('Você deseja salvar seus dados de login?');
    if(salvar)
    alert('Seus dados foram salvos!');
    else
    alert('Seus dados nao foram salvos!');
    }
}
*/
