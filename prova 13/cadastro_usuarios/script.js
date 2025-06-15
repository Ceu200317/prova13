function cadastro() {
    event.preventDefault()

    let nome = document.getElementByiD('nome').value
    let usuario = document.getElementByid('usuario').value
    let senha = document.getElementByid('senha').value
    let email = document.getElementByid('email').value
    let idade = document.getElementByid('idade').value

    document.getElementById('mensagem').innerText = ""

    try {
        if (nome == "") {
            throw "O campo nome está vazio"
        }
        if (usuario == "") {
            throw new Error("Preencha o usuario")
        }
        if (senha.length < 6) {
            throw "A senha precisa ter 6 caracteres pelo menos"
        }
        if (email.includes("@") == false) {
            throw "Email invalido"
        }
        if (idade < 18) {
            throw "Você precisa ser maior de idade"
        }

        alert("Cadastro realizado com sucesso")
        document.getElementByid('formulario').reset()

    } catch(erro) {
        document.getElementById('mensagem').innerHTML = "Erro no cadastro: " + erro
    }
}