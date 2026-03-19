const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");
const nome = document.getElementById("nome");
const email = document.getElementById("email")
const password = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const idade = document.getElementById("idade");
const cpf = document.getElementById("cpf");
const msgNome = document.getElementsByClassName("msgErrorNome")[0]
const msgEmail = document.getElementsByClassName("msgErrorEmail")[0]
const msgSenha = document.getElementsByClassName("msgErrorSenha")[0]
const msgConfirmarSenha = document.getElementsByClassName("msgErrorConfirmarSenha")[0]
const msgIdade = document.getElementsByClassName("msgErrorIdade")[0]
const msgCPF = document.getElementsByClassName("msgErrorCpf")[0]


registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

nome.addEventListener("input", (event) => {
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

    console.log(regex.test(event.target.value))

    if(event.target.value.length < 3) {
        console.log("O nome precisa ser maior que 3 caracteres")
    }

    if(!regex.test(event.target.value)) {
        console.log("Nome inválido")
        msgNome.textContent = "Nome inválido"
    }
    setTimeout(() => {
        msgNome.textContent = ""
    }, 5000)
})

email.addEventListener("input", (event) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(regexEmail.test(event.target.value))

    if(!regexEmail.test(event.target.value)) {
        console.log("E-mail inválido")
        msgEmail.textContent = "Email inválido"
    }
    setTimeout(() => {
        msgEmail.textContent = ""
    }, 5000)
})

password.addEventListener("input", (event) => {
    const senha = event.target.value;
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{10,}$/

    if (regex.test(senha)) {
        console.log("Senha válida")
    } else{
        console.log("Senha inválida")
        msgSenha.textContent = "Senha inválido"
    }
    setTimeout(() => {
        msgSenha.textContent = ""
    }, 5000)
})


confirmarSenha.addEventListener("input", () => {
    if (password.value === confirmarSenha.value) {
        return true
    } else{
        console.log("inválido")
        msgConfirmarSenha.textContent = "Senha errada"
    }
    setTimeout(() => {
        msgConfirmarSenha.textContent = ""
    }, 5000)
})

idade.addEventListener("input", (event) => {
    let idade = event.target.value.replace(/\D/g, "")
    console.log(idade)
    
    if(idade >= 18) {
        console.log("Idade válida!")
    } else {
        console.log("Idade inválida!")
        msgIdade.textContent = "Menor de idade, inválido"
    }
    setTimeout(() => {
        msgIdade.textContent = ""
    }, 5000)
})

cpf.addEventListener("input", (event) => {
  let valorCPF = event.target.value

  valorCPF = valorCPF.replace(/\D/g, "")

  valorCPF = valorCPF.slice(0, 11)

  valorCPF = valorCPF.replace(/(\d{3})(\d)/, "$1.$2")
  valorCPF = valorCPF.replace(/(\d{3})(\d)/, "$1.$2")
  valorCPF = valorCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

  event.target.value = valorCPF

  if(valorCPF.length >= 14) {
        msgCPF.textContent = "válido"
    } else {
        console.log("Cpf inválida!")
        msgCPF.textContent = "Cpf inválido"
    }
    setTimeout(() => {
        msgCPF.textContent = ""
    }, 5000)
})


