let nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase();
if (nacionalidade === "brasileira") {
  console.log("Brasileira");
} else if (nacionalidade === "argentina") {
  console.log("Argentina");
} else if (nacionalidade === "uruguaia") {
  console.log("Uruguaia");
} else if (nacionalidade === "chilena") {
  console.log("Chilena");
} else if (nacionalidade === "colombiana") {
  console.log("Colombiana");
} else {
  console.log(`nacionalidade ${nacionalidade} não encontrada`);
}
//Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!
switch (nacionalidade) {
  case "brasileira":
    console.log("Brasileira");
    break;
  case "argentina":
    console.log("Argentina");
    break;
  case "uruguaia":
    console.log("Uruguaia");
    break;
  case "chilena":
    console.log("Chilena");
    break;
  case "colombiana":
    console.log("Colombiana");
    break;
  default:
    console.log(`nacionalidade ${nacionalidade} não encontrada`);
}
