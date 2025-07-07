/*Crie um programa em JavaScript que simule um sistema de login com senha secreta.
*O usuário terá até 3 tentativas para digitar a senha correta.
*A cada tentativa, o programa deve:
*Pedir que o usuário digite a senha.
*Verificar se a senha está correta.
*Se estiver correta, mostrar uma mensagem de sucesso e encerrar o programa.
*Se estiver incorreta, incrementar o número de tentativas e repetir o processo.
*Se o usuário errar 3 vezes, exibir uma mensagem informando que ele foi bloqueado.*/
let senhaSecreta =  'isack123';
let senhaInserida;
let tentativas = 0;

console.log(senhaSecreta);

while(senhaInserida != senhaSecreta && tentativas < 3){
    senhaInserida = prompt("Digite a senha correta");
    tentativas++;
    
    if (senhaInserida == senhaSecreta){
            alert(`Login efetuado com sucesso com ${tentativas} tentativas`);
        }else if (tentativas < 3 ){
            alert("Tente novamente.");
        } 
}
if (senhaInserida !== senhaSecreta) {
    alert("Acesso bloqueado. Número de tentativas excedido.");
}