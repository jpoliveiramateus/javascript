// Operadores de comparação

// Em algoritmos e lógica de programação, é útil utilizarmos operadores de comparação para criar nossas soluções.

// Em JavaScript, por exemplo, temos os seguintes operadores:

// Operador de Comparação	Descrição
// ==	                    Igual a (valor)
// ===	                  Estritamente igual a (valor e tipo)
// !=	                    Diferente de
// >	                    Maior que
// >=	                    Maior ou igual que
// <	                    Menor que
// <=	                    Menor ou igual que

const miguelAge = 23;
const bertocoAge = 22;

console.log(miguelAge > bertocoAge); // boolean => true ou false

// Condições if…else

// Show image in browser...

// Exemplo de uso da estrutura if...else:

// Crie uma constante chamada age e atriuba a ela uma idade;
// Caso a idade for igual ou maior a 18 imprima no console a mensagem "Maior de idade!"
// Caso contrário imprima no console a mensagem "Menor de idade!"
const age = 21;

// if (age >= 18) {
//   console.log("Maior de idade!");
// } else {
//   console.log("Menor de idade!");
// }

// Operador ternário

const message = age >= 18 ? "Maior de idade!" : "Menor de idade!";

console.log(message);

// const personAge = 17;
// let canVote; 16 || 'Pode votar!' || 'Não pode votar!'

// Show example...

// Com o operador ternário você consegue fazer toda a lógica em apenas 1 linha. A estrutura do operador é a seguinte:

// Sintaxe básica do operador ternário é:
// 'condição' ? 'retorna se verdadeira' : 'retorna se falsa'
// Show example...


// Show one more example with template literals... temperature (30) and weather

// const temperature = 31;

// console.log(temperature > 30 ? "KONSKA" : "MIGUEL");
