alert("Esta área é restrita aos administradores da empresa, Digite o nome de usuário e a senha:");

let usuário = 'isack';
let senha = 'adm2025#isack'

console.log(usuário, senha);

let usuarioInserido;
let senhaInserida;

while (usuário != usuarioInserido ){
    usuarioInserido=prompt(`Insira seu nome de usuário`);
    senhaInserida=prompt(`Insira sua senha`);
    if (usuarioInseridoInserido == usuario && senhaInserida == senha){
        alert("Login bem sucedido!");
    } else {
        usuarioInserido = prompt("Usuário ou senha incorreto")
    }
}

