alert("Esta área é restrita aos administradores da empresa, Digite o nome de usuário e a senha:");

let usuario = 'isack';
let senha = 'adm2025#isack'

console.log(`usuário: ${usuario}\nsenha ${senha}`);

let usuarioInserido;
let senhaInserida;

do {
    usuarioInserido=prompt(`Insira seu nome de usuário`);
    senhaInserida=prompt(`Insira sua senha`);
    
    if (senhaInserida !== senha || usuarioInserido !== usuario){
    alert("Usuário ou senha incorretos.");
    }
} while (senhaInserida !== senha || usuarioInserido !== usuario)

alert ("Login bem sucedido!");

