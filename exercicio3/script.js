const nome = prompt("digite seu nome.").toLowerCase();
const idade = Number(prompt("digite sua idade."));
//código a ser reescrito
// parte 1
if (nome === "jose") {
  console.log("Oi, Zé!");
} else {
  console.log("Olá, " + nome);
}
// parte 2
if (idade >= 18) {
  console.log("pode tirar carteira de motorista!");
} else {
  console.log("Ainda não pode tirar carteira de motorista");
}

//Reescreva os códigos do arquivo script.js utilizando o if ternário.
console.log(nome === "jose" ? "oi, Zé!" : `Olá, ${nome}`);

console.log(
  idade >= 18
    ? "pode tirar carteira de motorista!"
    : "Ainda não pode tirar carteira de motorista"
);



//SALA 4