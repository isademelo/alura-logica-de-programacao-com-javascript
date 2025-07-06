/* O console.log é uma função muito importante em linguagens de programação, especialmente quando se trabalha com JavaScript. Sua principal função é imprimir mensagens no console do ambiente de desenvolvimento, o que permite testar informações relevantes durante a execução de um programa.

Sua vez: inclua comandos console.log em diferentes partes do código para verificar o fluxo do programa, os valores das variáveis e outras informações relevantes durante a fase de desenvolvimento.*/

/*Receber dados do usuário*/
let nome = prompt("Seja bem vindo à calculadora de notas do 1º bimestre. Digite seu Nome");
let nota1= Number(prompt("Digite sua 1ª nota"));
let nota2= Number(prompt("Agora digite sua 2ª nota."));

/*Cálculo da média aritmética do 1º bimestre */
let mediaBimestral = (nota1 + nota2)/2;

/*Verificação se as notas são inválidas*/
if (nota1 < 0 || nota1 > 10){
    alert("1ª nota inválida.");
    console.log("1ª nota inválida.");
} 
if (nota2 < 0 || nota2 > 10){
    alert("2ª nota inválida.");
    console.log("2ª nota inválida.");
    
}

/*Printa no console os dados inseridos pelo usuário e a média das notas dele*/
console.log(`Aluno: ${nome}\n1ª nota: ${nota1}\n2ª nota: ${nota2}`);
console.log(`A média do 1º bimestre é ${mediaBimestral}`);

/*Verificação se o aluno foi aprovado ou não*/
if(mediaBimestral >= 7.0 && mediaBimestral <= 10.0 ){
    console.log("Aluno Aprovado");
    alert("Você foi APROVADO!!.");  
} else if (mediaBimestral <=6.9 && mediaBimestral >= 0.0){
    console.log("Aluno Reprovado.");
    alert("Você foi REPROVADO!");
}