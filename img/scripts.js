
// Pega os elementos da página
const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-form");
const botaoSugestao = document.querySelector(".caixa-info-texto button");


// Verifica se os elementos foram encontrados
console.log("Formulário:", formulario);
console.log("Máscara:", mascara);
console.log("Botão:", botaoSugestao);


// ABRIR FORMULÁRIO
botaoSugestao.addEventListener("click", function () {

    formulario.style.left = "50%";
    formulario.style.transform = "translate(-50%, -50%)";

    mascara.style.visibility = "visible";
    mascara.style.opacity = "1";

});


// FECHAR FORMULÁRIO
mascara.addEventListener("click", function () {

    formulario.style.left = "-350px";
    formulario.style.transform = "translateY(-50%)";

    mascara.style.opacity = "0";
    mascara.style.visibility = "hidden";

});
