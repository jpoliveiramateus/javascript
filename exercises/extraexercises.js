// Exercício 1
// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica.
// É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados.
// Escreva códigos para:

// Adição (num1 + num2)
// Subtração (num1 - num2)
// Multiplicação (num1 * num2)
// Divisão (num1 / num2)
// Módulo (num1 % num2)

// const num1 = 10;
// const num2 = 12;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código,
// duas variáveis com os valores que serão comparados.

// const num1 = 25;
// const num2 = 20;

// if (num1 > num2) {
//     console.log(`O número ${num1} é maior do que o número ${num2}`);
// } else {
//     console.log(`O número ${num2} é maior do que o número ${num1}`);
// }

// Exercício 3:
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código,
// três variáveis com os valores que serão comparados.

// const num1 = 10;
// const num2 = 12;
// const num3 = 22;

// if (num1 > num2 && num1 > num3) {
//     console.log(`O maior número é o ${num1}`);
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`O maior número é o ${num2}`);
// } else {
//     console.log('O maior número é o: ' + num3);
// }

// Exercício 4:
// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par.
// Caso contrário, o código deve retornar false. Faça esse exercício utilizando somente um if.

const num1 = 2;
const num2 = 3;
const num3 = 7;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}
