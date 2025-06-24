function cadastro(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;
    let idade = parseInt(document.getElementById('idade').value);

    document.getElementById('mensagem').innerText = "";

    try {
        if (nome.trim() === "") {
            throw "O campo nome está vazio";
        }
        if (usuario.trim() === "") {
            throw "Preencha o usuário";
        }
        if (senha.length < 6) {
            throw "A senha precisa ter pelo menos 6 caracteres";
        }
        if (!email.includes("@")) {
            throw "Email inválido";
        }
        if (isNaN(idade) || idade < 18) {
            throw "Você precisa ser maior de idade";
        }

        alert("Cadastro realizado com sucesso!");
        document.getElementById('formulario').reset();

    } catch (erro) {
        document.getElementById('mensagem').innerText = "Erro no cadastro: " + erro;
    }
}
