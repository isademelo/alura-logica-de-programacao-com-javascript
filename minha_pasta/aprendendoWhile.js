alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute
 
while (chute != numeroSecreto){
    chute = prompt("digite um número de 0 a 10");
    if(chute == numeroSecreto){
        alert("Você acertou");
    } else {
        if (chute > numeroSecreto){
            chute = prompt(`O número é menor que ${numeroSecreto}`);
        } else {
            chute=prompt(`O número é maior que ${numeroSecreto}`);
        }
    }
}