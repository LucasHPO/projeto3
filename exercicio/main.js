$(document).ready(function() {
    $('#telefone').mask("(00) 00000-0000");
    $('#telefone1').mask("(00) 00000-0000")
})

$("#matricular").validate({
    rules:{
        nome:{
            required:true
        },
        email:{
            required:true,
            email:true
        },
        telefone:{
            required:true
        },
        curso:{
            required:true
        },
    },

    messages:{
        nome:'<h3 class="validate"> Por favor, inserir o seu nome completo.</h3>',
        email:'<h3 class="validate"> Por favor, inserir o seu email.</h3>',
        telefone:'<h3 class="validate"> Por favor, inserir o seu telefone.</h3>',
        curso:'<h3 class="validate"> Por favor, inserir o curso de interesse.</h3>',
    },
})

$("#form-contato").validate({
    rules:{
        nome:{
            required:true
        },
        email:{
            required:true,
            email:true
        },
        mensagem:{
            required:true
        },
    },

    messages:{
        nome:'<h3 class="validate"> Por favor, inserir o seu nome completo.</h3>',
        email:'<h3 class="validate"> Por favor, inserir o seu email.</h3>',
        mensagem:'<h3 class="validate"> Por favor, inserir o curso de interesse.</h3>',
    },
})