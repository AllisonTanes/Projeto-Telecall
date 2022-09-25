




function fazerLogin(form){
    
    var login = $("#login").val();
    var senha = $("#senha").val();

    var acessoL = localStorage.getItem("login")
    var acessoS = localStorage.getItem("senha")

    if(acessoL == login && acessoS == senha){
        sucesso("bem vindo, " + login)

        setTimeout(() => {
          form.submit()  
        }, 3000);

        
    }
    else{
     error("erro")
    }
    
    
    console.log(localStorage.getItem("login"))
}


function error(msg) {
    Swal.fire({
      title: "Informações de acesso,  invalidas",
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
  
 