var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fade-out");
    
    setTimeout(function(){
    event.target.parentNode.remove();
    }, 500);
    
});
