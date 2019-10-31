var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela de IMC";			

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if(!pesoValido){
        tdImc.textContent = "Peso Inválido";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaValida){
        tdImc.textContent = "Altura Inválida";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoValido && alturaValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >=0 && peso <=400){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    imc = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}