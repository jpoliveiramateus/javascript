// Operadores lógicos

// A próxima ferramenta de trabalho que vamos aprender são os operadores lógicos.
// Na linguagem JavaScript, há três principais operadores lógicos: &&, || e !. Podemos nos referir a eles como “AND“, “OR“ e “NOT“, respectivamente.


// Operador AND
// O operador “AND“ (ou &&, no JavaScript) é binário. Isso significa que ele precisa de dois elementos para funcionar corretamente.

// Em JavaScript, esse pedido pode ser interpretado da seguinte maneira:

const food = 'x-tudo';
const drink = 'leite';

if (drink === 'café' || food === 'pão') {
  console.log('Obrigado!');
} else {
  console.log('Erraram meu pedido.');
}

// Diferença entre == e ===

// const num1 = '10'; // string
// const num2 = 10; // number

// console.log(num1 == num2);
// console.log(num1 === num2);

// Precedência de operadores

// Outro ponto importante é compreender a precedência de operadores. No caso, ela determina como os operadores são analisados entre si.
// Operadores com maior precedência tornam-se operandos de operadores com menor precedência, ou seja,
// o operador de menor precedência trabalhará com o resultado do operador de maior precedência. Observe o código a seguir:

console.log(10 + 5 * 5);

// Nesse código, primeiro é realizada a multiplicação 5 * 5, cujo resultado é 25. Depois, é realizada a soma do resultado dessa multiplicação com 10, ou seja, 25 + 10.

// Assim como na matemática, primeiro realiza-se a multiplicação e, depois, a soma. Portanto, o retorno desse código é 35.


// Operador OR
// A gente já viu que um operador em que as duas condições devem ser verdadeiras para que o resultado final seja verdadeiro.

// Com o operador OR (ou ||, no JavaScript), é necessário que apenas uma das condições seja verdadeira: isso OU aquilo.

// Imagine novamente que você está em uma padaria e pede um café. Dessa vez, se não tiver café,
// você indica para a pessoa atendente que pode ser um suco de laranja. Como escreveríamos isso em JavaScript?

const principalDrink = 'café';
const alternativeDrink = 'suco de laranja';

if (principalDrink === 'café' || alternativeDrink === 'suco de laranja') {
  console.log("Agradeço por me atender :D");
} else {
  console.log("Ei, não foi isso que eu pedi!");
}


// Operador NOT
// Vamos ver um exemplo do que o operador NOT (ou !, no JavaScript) faz. Você consegue prever o que esse código vai imprimir?

console.log(!(2 + 2) === 4);
