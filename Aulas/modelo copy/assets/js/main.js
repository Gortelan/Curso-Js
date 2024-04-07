function ImcCalc() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    function calcularImc(event) {
        event.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const alturaCalc = altura.value / 100;

        const calcularImc = peso.value / (alturaCalc * alturaCalc)

        if (calcularImc < 18.5) {
            result.innerHTML = `<h3 style="color:red">Abaixo do peso</h3>`;
        } else if (calcularImc >= 18.5 && calcularImc < 25) {
            result.innerHTML = '';
            result.innerHTML += `<h3 style="color:black">Peso normal</h3>`;
        } else if (calcularImc >= 25 && calcularImc < 30) {
            result.innerHTML = '';
            result.innerHTML += `<h3 style="color:blue">Sobrepeso</h3>`;
        } else if (calcularImc >= 30 && calcularImc < 35) {
            result.innerHTML = '';
            result.innerHTML += `<h3 style="color:green">Obesidade Grau 1</h3>`;
        } else if (calcularImc >= 35 && calcularImc < 40) {
            result.innerHTML = '';
            result.innerHTML += `<h3 style="color:pink">Obesidade Grau 2</h3>`;
        } else if (calcularImc > 40) {
            result.innerHTML = '';
            result.innerHTML += `<h3 style="color:pink">Obesidade Grau 3</h3>`;
        }

        if (!peso.value) {
            result.innerHTML = `Digite um peso valido`;
        } else if (!altura.value) {
            result.innerHTML = ''
            result.innerHTML = `Digite uma altura válida`;
        }
    }


    form.addEventListener('submit', calcularImc);
}
ImcCalc();