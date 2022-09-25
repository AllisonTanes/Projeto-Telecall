$(document).ready(function () {
    
    $("#senha").mask("SSSSSSSS");    
    $("#login").mask("SSSSSS");
  
  });



var valor = true

function autoContraste(){

    if(valor){
        document.body.style.background = "black"
        valor = false  
    }
    else{
        document.body.style.background = "white"
        valor = true  
    }

}

function fonte(value){
    
var normal = document.body.style.fontSize;

    
        
        
        if(value == 1){
            console.log(value);
            document.body.style.fontSize = "14px";
        }
        if(value ==2){
            document.body.style.fontSize = "16px";
        }
        if(value ==3){
            document.body.style.fontSize = "17px";
        }    
    
    



}