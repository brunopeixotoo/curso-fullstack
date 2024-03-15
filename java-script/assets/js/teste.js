
var altura;
var peso;
var imc;
var resultado = document.getElementById('resultado');

function calcular(event) {
    
    /*Depois que ele finaliza a função, vai aplicar um reset automático */
    /*Para remover esse reset se usa o método .event.proventDefault() */
    event.preventDefault();

    /*Puxando o dado digitado no input do HTML */
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso/(altura*altura);

    /*Para controlar as casa decimais que serão exibidas */
    /*é preciso usar o método variavel.toFixed(qntd) */

    imc = imc.toFixed(2);

    if (imc < 17) {
        resultado.innerHTML = "<br> Seu IMC é "+ imc +" e está abaixo do ideal.";
    } else if(imc >= 18 && imc <= 24) {
        resultado.innerHTML = "<br> Seu IMC é "+ imc + " e está normal.";
    } else if (imc > 25 && imc < 29){
        resultado.innerHTML = "<br> Seu IMC é "+ imc + " e está acima do peso."
    }

    /*Limpando o campo de preenchimento após as condições serem excutadas */
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}