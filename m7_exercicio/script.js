const formulario = document.getElementById('form-calculo')
const campoA = document.getElementById('inp-num');
const campoB = document.getElementById('inp-num2');
let formEValido = false;

function validaForm(valor1,valor2){
    if (valor2 > valor1){
        console.log("true");
        return true;
        
    }else{
        console.log("false");
        return false;
        
    }
}

validaForm(1,2)

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    calculoCorreto = `Está correto! O número ${campoB.value} é maior que ${campoA.value}`;
    calculoIncorreto = `Está incorreto! O número ${campoB.value} NÃO é maior que ${campoA.value}`;

    formEValido = validaForm(campoA.value,campoB.value);
    if (formEValido){
        document.querySelector('.success').style.display = 'block';
        document.querySelector('.success').innerHTML = calculoCorreto;
        
    }else{
        document.querySelector('.fail').style.display = 'block';
        document.querySelector('.fail').innerHTML = calculoIncorreto;
        
    }

})