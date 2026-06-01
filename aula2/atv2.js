const input   = require("readline-sync")

function validadorSenha(senha) {    
    if (senha.length < 8) {
        return "A senha deve conter no mínimo 8 caracteres.";
    }
    if (!/[A-Z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra maiúscula.";
    }
    if (!/[a-z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra minúscula.";
    }
    if (!/[0-9]/.test(senha)) {
        return "A senha deve conter pelo menos um número.";
    }
    if (!/[^A-Za-z0-9]/.test(senha)) {
        return "A senha deve conter pelo menos um caractere especial.";
    }
    return "Senha válida.";
}

let senha = input.question("Digite a senha para a validação: ");

console.log(validadorSenha(senha));