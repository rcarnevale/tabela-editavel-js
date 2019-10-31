var campoBusca = document.querySelector("#filtrar-tabela");

campoBusca.addEventListener("input", function(){
    this.value;
    var pacientes = document.querySelectorAll(".paciente");
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var expressao = new RegExp(this.value, "i");
        var nomePaciente = tdNome.textContent;
        
        if(expressao.test(nomePaciente) || this.value == 0){
            paciente.classList.remove("esconde");
        }else{
            paciente.classList.add("esconde");
        }

    }
})