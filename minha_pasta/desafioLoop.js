//1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.*/
console.log("Execução do programa 1...");

alert("seja bem vindo ao nosso programa.");
let contador = 0; 

while (contador < 10){
    contador ++;
    console.log(contador);
}
    console.log("Fim.");

console.log("\n\nExecução do programa 2...");
//2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

alert("\n\nSeja bem vindo ao nosso programa 2");
let contador2= 10;  
while(contador2 >= 0){
    console.log(contador2);
    contador2-= 1;
}
console.log("Fim.");

console.log("\n\nExecução do programa 3...")
//3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numeroEscolhido = prompt("\n\nSeja bem vindo ao nosso programa 3.\nDigite um número de sua escolha");
while (numeroEscolhido >= 0){
    console.log(numeroEscolhido);
    numeroEscolhido -= 1;
    
}
console.log("Fim.")

console.log("\n\nExecução do programa 4...")
//4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroEscolhido2 = prompt("\n\nSeja bem vindo ao nosso programa 4\nDigite um número de sua escolha");
let contador4 = 0;
while(contador4 <= numeroEscolhido2 ){
      console.log(contador4);
      contador4++;
  
}
