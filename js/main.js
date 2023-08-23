$(document).ready(function(){
    let nomecompletoCampo = $('#nome-campo')
    nomecompletoCampo.validate();

    let emailCampo = $('#emailcampo');
    emailCampo.mask('teste@teste.com',{
        placeholder: 'seuemail@dominio.com'
    });

    let telefoneCampo = $('#telefonecampo')
    telefoneCampo.mask('(00) 00000-0000',{
        placeholder: '(51) 98765-4321'
    });

    let cpfCampo = $("#cpfcampo");
    cpfCampo.mask('000000000-00',{
        placeholder: '000000000-00'
    }
    );
    $("#cepcampo").mask('00000-000',{
        placeholder: '00000-000'
    });

    let enderecoCampo = $("#enderecoCampo");
    

    $('.form-campo').validate({
        rules:{
            nome: {
                required: true,
                maxlength: 150,
                minlength: 5
            },
            email:{
                required: true,
                email: true
            },
            telefone: {
                required: true,
                digits: true
            },
            cepcampo: {
                required: true,
                digits: true,
                maxlength: 9,
                minlength: 9
            },
            cpfcampo: {
                required: true,
                digits: true,
                maxlength: 12,
                minlength: 11
            }
        },
        messages:{
            email: 'Por favor, digite o seu email.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existe ${camposIncorretos} campos incorretos.`)
            }
        }
    })
});