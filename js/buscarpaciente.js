var botaoBusca = document.querySelector("#buscar-paciente");
var erroAjax = document.querySelector("#erro-importar");
botaoBusca.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){

        if(xhr.status==200){
        var resposta = xhr.responseText;        

        var pacientes = JSON.parse(resposta);
        
        erroAjax.classList.add("esconde");

        pacientes.forEach(function(paciente) {
            adicionaPacienteTabela(paciente);
            
        });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("esconde");
        }
    });
    xhr.send();
    
});
