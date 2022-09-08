//Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
const num = Number(prompt("digite um numero divisivel por 2 e 3"));
//Faça isso:
//1. Utilizando ifs aninhados
if (num % 2 === 0) {
  if (num % 3 === 0) {
    console.log(`Numero ${num} é divisivel por 2 e 3`);
  } else {
    console.log(`Numero ${num} é divisivel por 2`);
  }
} else if (num % 3 === 0) {
  console.log(`Numero ${num} é divisivel por 3`);
} else {
  console.log(`Numero ${num} não é divisivel por 2 e 3`);
}
//2. Utilizando um operador lógico para unir duas operações relacionais
//com &&
if (num % 2 === 0 && num % 3 === 0) {
  console.log(`Numero ${num} é divisivel por 2 e 3`);
} else {
  console.log(`Numero ${num} não é divisivel por 2 ou 3 ou por nenhum dos dois`);
}
//com ||
if (num % 2 === 0 || num % 3 === 0) {
  console.log(`Numero ${num} é divisivel por 2 ou 3 ou por ambos`);
} else {
  console.log(`Numero ${num} não é divisivel por 2 e 3`);
}
