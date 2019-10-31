var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPaciente(form);

    var erro = validaPaciente(paciente);

    console.log(erro);

    if(erro.length > 0){
        exibeMensagemErro(erro);
        return;
    }

    adicionaPacienteTabela(paciente);
   form.reset();

   var ul = document.querySelector(".mensagem-erro");
   ul.innerHTML = "";
   
});

function adicionaPacienteTabela (paciente){
    var pacienteTR = montaTR(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTR);
}

function obtemPaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTR(paciente){
    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc, "info-imc"));

   return pacienteTR;
}

function montaTD(dado,classe){
    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é Inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é Inválida");
    }

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
    return erros;
}

function exibeMensagemErro(erros){
    var ul = document.querySelector(".mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}