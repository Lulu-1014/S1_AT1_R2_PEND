const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const idade = document.getElementById("idade");
const valorCPF = document.getElementById("cpf");
const msgNome = document.getElementsByClassName("msgErrorNome")[0];
const msgEmail = document.getElementsByClassName("msgErrorEmail")[0];
const msgSenha = document.getElementsByClassName("msgErrorSenha")[0];
const msgConfirmarSenha = document.getElementsByClassName(
  "msgErrorConfirmarSenha",
)[0];
const msgIdade = document.getElementsByClassName("msgErrorIdade")[0];
const msgCPF = document.getElementsByClassName("msgErrorCpf")[0];
const formulario = document.getElementById("formulario");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

nome.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});

senha.addEventListener("input", (event) => {
  const senha = event.target.value;

  if (!/[A-Z]/.test(senha)) {
    msgSenha.textContent = "Senha precisa de uma letra maiúscula";
  } else if (!/\d/.test(senha)) {
    msgSenha.textContent = "Senha precisa conter um número";
  } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)) {
    msgSenha.textContent = "Senha precisa conter um caractér especial";
  } else if (senha.length < 10) {
    msgSenha.textContent = "Senha precisa ter 10 caracteres";
  } else {
    msgSenha.textContent = "Senha válida";
  }
});

cpf.addEventListener("input", (event) => {
  let valorCPF = event.target.value;

  valorCPF = valorCPF.replace(/\D/g, "");

  valorCPF = valorCPF.slice(0, 11);

  valorCPF = valorCPF.replace(/(\d{3})(\d)/, "$1.$2");
  valorCPF = valorCPF.replace(/(\d{3})(\d)/, "$1.$2");
  valorCPF = valorCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  event.target.value = valorCPF;

  if (valorCPF.length >= 14) {
    return true;
  } else {
    return false;
  }
});

const checarSenha = () => {
  if (
    /[A-Z]/.test(senha.value) &&
    /\d/.test(senha.value) &&
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha.value) &&
    senha.value.length >= 10
  ) {
    console.log("AQUI ESTOU 1111111111!");
    return true;
  }
  console.log("AQUI ESTOU 22222222!");

  return false;
};

const checarNome = () => {
  const nomeRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

  return nomeRegex.test(nome.value) && nome.value.length > 3;
};

const checarEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email.value);
};

const checarIdade = () => {
  const idadeValor = parseInt(idade.value); // Converte o texto para número
  const apenasNumeros = /^\d+$/.test(idade.value); // Garante que só existam dígitos

  // Verifica se são apenas números E se o valor numérico é >= 18
  return apenasNumeros && idadeValor >= 18;
};

const checarConfirmarSenha = () => {
  if (senha.value === confirmarSenha.value) {
    return true;
  }
  return false;
};

const checarCpf = () => {
  if (valorCPF.value.length >= 14) { // ADICIONADO .value AQUI
    return true;
  }
  return false;
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!checarNome()) {
    msgNome.textContent = "Nome inválido";
    setTimeout(() => {
      msgNome.textContent = "";
    }, 2000);
    return;
  }

  if (!checarSenha()) {
    msgSenha.textContent = "Senha inválida";
    setTimeout(() => {
      msgSenha.textContent = "";
    }, 2000);
    return;
  }

  if (!checarEmail()) {
    msgEmail.textContent = "Email inválido";
    setTimeout(() => {
      msgEmail.textContent = "";
    }, 2000);
    return;
  }

  if (!checarIdade()) {
    msgIdade.textContent = "Idade inválida";
    setTimeout(() => {
      msgIdade.textContent = "";
    }, 2000);
    return;
  }

  if (!checarConfirmarSenha()) {
    msgConfirmarSenha.textContent = "Senha inválida";
    setTimeout(() => {
      msgConfirmarSenha.textContent = "";
    }, 2000);
    return;
  }

  if (!checarCpf()) {
    msgCPF.textContent = "CPF inválido";
    setTimeout(() => {
      msgCPF.textContent = "";
    }, 2000);
    return;
  }

  console.log("Formulário enviado com sucesso");
  // formulario.submit()
});
