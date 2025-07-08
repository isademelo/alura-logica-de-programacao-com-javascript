# alura-logica-de-programacao-com-javascript
Repositório com códigos desenvolvidos durante uma aula de lógica de programação utilizando JavaScript. Contém exemplos práticos de estruturas de decisão, laços de repetição, manipulação de variáveis, funções e lógica condicional.


Desafios - Lógica de programação com javascript

1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
```ruby
console.log("Seja bem vindo ao nosso programa");
```

2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!"
   
```ruby
let nome = "isack";
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);
```
3. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

```ruby
let linguagem = prompt("Qual linguagem de programação que você mais gosta?");
console.log(`Linguagem escolhida: ${linguagem}`);
```

4. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
   
```ruby
let valor1 = Number(prompt("valor 1"));
let valor2 = Number(prompt("valor 2"));

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a: ${resultado}`);
```

5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

```ruby
let valor1 = Number(prompt("Digite o valor 1"));
let valor2 = Number(prompt("Digite o valor 2"));

let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é: ${resultado}`);
```
6. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

```ruby
let idade = prompt("Seja bem vindo ao nosso programa. Digite sua idade.");

if (idade >= 18){
    console.log("Maior de idade!");
} else {
    console.log("Menor de idade!")
}
```

8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
   
```ruby
let numero = Number(prompt("Digite um valor"));

if (numero > 0){
    console.log("número positivo");
} else if (numero < 0){
    console.log("número negativo")
} else {
    console.log("o número é 0");
}
```
9. Use um loop while para imprimir os números de 1 a 10 no console.

```ruby
let numero = 0;

while (numero < 10){
    numero++;
    console.log(numero);
}
```

10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

```ruby
let nota = Number(prompt("Digite uma nota"));

while (nota > 10 || nota < 0){ 
    nota = Number(prompt("Digite novamente"));
}

if (nota >= 7 ){
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!");
}
```

10. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

```ruby 
let numeroAleatorio = Math.random() 
console.log(numeroAleatorio)
```

11. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
    
```ruby
let numeroAleatorio = parseInt(Math.random() * 10 + 1);

console.log(numeroAleatorio);
```

12. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

```ruby
let numeroAleatorio = Math.floor(Math.random() * 1000 + 1);
console.log(numeroAleatorio);
```
