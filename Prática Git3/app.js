let numero1 = (Number(prompt('Digite um número:')));
let numero2 = (Number(prompt('Digite outro número:')));

function somar() {
    let resultado = numero1 + numero2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
    console.log(resultado);
}