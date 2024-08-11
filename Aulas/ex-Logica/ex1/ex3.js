//Escreva uma função que recebe um número e retorn o seguinte:
/*Número é divisivel por 3 = Fizz
 Número é divisivel por 5 = Buzz
 Número é divisivel por 3 e 5= FizzBuzz
 Número NÃO é divisível por 3 e 5 = Retorn o próprio npumero
 Checar se o número é realmente um número
 Use a função com número de 0 a 100
*/

const divisible = (number) => {
    if (typeof number !== 'number') return number;
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
}

for (let i = 0; i < 100; i++) {
    console.log(i, divisible(i));
}

