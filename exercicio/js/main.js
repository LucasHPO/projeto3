$(document).ready(function() {
    $('#carousel-imgs').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000');
})

$('form').validate({
    rules:{
        nome:{
            required: true
        },
        telefone:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        veiculoInteresse:{
            required: false
        },
        mensagem:{
            required: true
        }
    },
    messages: {
        nome: 'Por favor, inserir o seu nome.',
        telefone: 'Por favor, inserir o seu telefone.',
        email: 'Por favor, inserir o seu email.',
        veiculoInteresse: 'Por favor, inserir o veiculo de interesse.',
        mensagem: 'Por favor, deixe a sua mensagem.',
    },
})

$('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    })
