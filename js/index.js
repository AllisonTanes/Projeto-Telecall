
var valor = true

function autoContraste(){
    var info = document.querySelector(".detalhe")
    var info1 = document.querySelector(".detalhe1")
   console.log(info);
    if(valor){
        document.body.style.background = "black"
        info.style.color = "white"  
        info1.style.color = "white" 
        valor = false  
    }
    else{
        document.body.style.background = "white"
        info.style.color = "black"  
        info1.style.color = "black" 
        valor = true  
    }

}

function fonte(value){
    
var normal = document.body.style.fontSize;
console.log(normal);
    
        
        
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