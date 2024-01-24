alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 9;
let chute = prompt('Escolha um número entre 1 e 10');
//Se o chute for igual ao número secreto
if (chute == numeroSecreto) {
         alert(`Isso aí! você descobriu o número secreto ${numeroSecreto}`);
//Se não for igual 
}   else{
         alert("Você errou!!!")
 }
