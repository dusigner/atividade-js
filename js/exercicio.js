
$(":radio").click(
    function(){
        if (
            $(this).is(':checked')) {
                $('input:not(:checked)').parents(".alternativa").removeClass("selecionada");
                $(this).parents(".alternativa").toggleClass("selecionada");
        }
        if ($(".alternativa").hasClass( "selecionada" )){
            $(":button").show();
        }
        else {
            $(":button").hide();
        }
});

function questaoCorreta(exercicio){
    $(":button").hide();
    $(":radio").unbind("click");
    if ($('input[type=radio]:checked').attr('id') == "a" + exercicio.gabarito){
        $("#feedbackPositivo").show();
    }else {
        $("#feedbackNegativo").show();
    }
}
function questao(){
    $.getJSON("data/exercicio.json", questaoCorreta);
}