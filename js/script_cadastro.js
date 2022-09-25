$(document).ready(function () {
  $("#date").mask("00/00/0000");
  $("#cpf").mask("000.000.000-00");
  $("#phone").mask("(+55) 00-00000-0000");
  $("#tel").mask("(+55) 00-0000-0000");
  $("#senha").mask("SSSSSSSS");
  $("#csenha").mask("SSSSSSSS");
  $("#login").mask("SSSSSS");

});

var nome;
var login;
var senha;
var csenha;
var namematerno;
var date;
var cpf;
var tel;
var phone;
var endereco;


function validacao() {
  nome = $("#name").val();
  login = $("#login").val();
  senha = $("#senha").val();
  csenha = $("#csenha").val();
  namematerno = $("#namematerno").val();
  date = $("#date").val();
  cpf = $("#cpf").val();
  tel = $("#tel").val();
  phone = $("#phone").val();
  endereco = $("#endereco").val();

  if (
    !nome ||
    !nome.trim() ||
    nome.trim().length < 15 ||
    nome.trim().length > 60
  ) {
    error("Preencha o campo nome, entre 15 e 60 caracteres!");
    return false;
  }

  if(!date || !date.trim() || date.trim().length < 10){

    error("Preencha o campo data!");
    return false;
  }


  if (!namematerno || !namematerno.trim() || namematerno.trim().length < 15 || namematerno.trim().length > 60) 
  {
    error("Preencha o nome materno, entre 15 e 60 caracteres!");
    return false;
  }

  if(!cpf || !cpf.trim() || cpf.trim().length < 14){

    error("Preencha o campo CPF!");
    return false;
  }

  if(!tel || !tel.trim() || tel.trim().length < 17){

    error("Preencha o campo telefone fixo!");
    return false;
  }

  if (!endereco || !endereco.trim() || endereco.trim().length < 5 ) 
  {
    error("Preencha o campo endereço, minimo 5 caracteres!");
    return false;
  }

  if(!phone || !phone.trim() || phone.trim().length < 18){

    error("Preencha o campo celular!");
    return false;
  }

  if (!login || !login.trim() || login.trim().length != 6) {
    error("preencha o login corretamente!");
    return false;
  }
  

  if (senha.length == 8) {
    if (
      !senha ||
      !senha.trim() ||
      !csenha ||
      !csenha.trim() ||
      senha.trim() != csenha.trim()
    ) {
      error("As senhas não são iguais!");
      return false;
    }
  }
  else{
    error("A senha deve conter 8 caracteres!");
    return false;
  }

  return true;

 
}

function enviarformulario(form) {
  if (validacao()) {
    sucesso("Cadastro realizado com sucesso!");
    localStorage.setItem("login", login);
    localStorage.setItem("senha", senha);
    form.submit()
   
  }
}

function error(msg) {
  Swal.fire({
    title: "Error!",
    text: msg,
    icon: "error",
    confirmButtonText: "Ok",
  });
}

function sucesso(msg) {
  Swal.fire({
    title: "Sucesso!",
    text: msg,
    icon: "success",
    confirmButtonText: "Ok",
  });
}





