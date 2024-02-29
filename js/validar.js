const form = document.getElementById("form");
const username = document.getElementById("username");
const birthday = document.getElementById("birthday");
const gender = document.getElementById("gender");
const momname = document.getElementById("momname");
const cpf = document.getElementById("cpf");
const telnumber = document.getElementById("telnumber");
const celnumber = document.getElementById("celnumber");
const address = document.getElementById("address");
const login = document.getElementById("login");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("passwordtwo");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

username.addEventListener("blur", () => {
  checkInputUsername();
});

birthday.addEventListener("blur", () => {
  checkInputBirthday();
});

momname.addEventListener("blur", () => {
  checkInputMomName();
});

cpf.addEventListener("blur", () => {
  checkInputCpf();
});

cpf.addEventListener("input", () => {
  // Remover os caracteres não númericos usando a expressão regular /\D/g e limitar a 11 digitos.
  var clearValue = cpf.value.replace(/\D/g, "").substring(0, 11);

  // Dividir a string em um array de caracteres individuais.
  var arrayNumbers = clearValue.split("");

  // Criar uma varíavel para receber o número formatado.
  var formattedNumber = "";

  // (12) 94567-8910
  // Acessa o IF quando a quantidade de números é maior do que zero.
  if (arrayNumbers.length > 0) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `${arrayNumbers.slice(0, 3).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que três.
  if (arrayNumbers.length > 3) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `.${arrayNumbers.slice(3, 6).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que seis.
  if (arrayNumbers.length > 6) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `.${arrayNumbers.slice(6, 9).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que nove.
  if (arrayNumbers.length > 9) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `-${arrayNumbers.slice(9, 11).join("")}`;
  }

  // Enviar para o campo o número formatado.
  cpf.value = formattedNumber;
});

celnumber.addEventListener("blur", () => {
  checkInputCelNumber();
});

celnumber.addEventListener("input", () => {
  //Remover os caracteres não númericos usando a expressão regular /\D/g e limitar a 11 dígitos.
  var clearValue = celnumber.value.replace(/\D/g, "").substring(0, 11);

  // Dividir a string em um array de caracteres individuais.
  var arrayNumbers = clearValue.split("");

  // Criar uma varíavel para receber o número formatado.
  var formattedNumber = "";

  // (12) 94567-8910
  // Acessa o IF quando a quantidade de números é maior do que zero.
  if (arrayNumbers.length > 0) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `(${arrayNumbers.slice(0, 2).join("")})`;
  }

  // Acessa o IF quando a quantidade de números é maior do que dois.
  if (arrayNumbers.length > 2) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += ` ${arrayNumbers.slice(2, 7).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que sete.
  if (arrayNumbers.length > 7) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `-${arrayNumbers.slice(7, 11).join("")}`;
  }

  // Enviar para o campo o número formatado.
  celnumber.value = formattedNumber;
});

telnumber.addEventListener("blur", () => {
  checkInputTelNumber();
});

telnumber.addEventListener("input", () => {
  // Remover os caracteres não númericos usando a expressão regular /\D/g e limitar a 11 digitos.
  var clearValue = telnumber.value.replace(/\D/g, "").substring(0, 10);

  // Dividir a string em um array de caracteres individuais.
  var arrayNumbers = clearValue.split("");

  // Criar uma varíavel para receber o número formatado.
  var formattedNumber = "";

  // (12) 94567-8910
  // Acessa o IF quando a quantidade de números é maior do que zero.
  if (arrayNumbers.length > 0) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `(${arrayNumbers.slice(0, 2).join("")})`;
  }

  // Acessa o IF quando a quantidade de números é maior do que dois.
  if (arrayNumbers.length > 2) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += ` ${arrayNumbers.slice(2, 6).join("")}`;
  }

  // Acessa o IF quando a quantidade de números é maior do que seis.
  if (arrayNumbers.length > 6) {
    // Formatar o DD e concatenar o valor
    // slice - extraie uma parte do array
    // join - unir os elementos do array em uma única string
    formattedNumber += `-${arrayNumbers.slice(6, 10).join("")}`;
  }

  // Enviar para o campo o número formatado.
  telnumber.value = formattedNumber;
});

address.addEventListener("blur", () => {
  checkInputAddress();
});

password.addEventListener("blur", () => {
  checkInputPassword();
});

passwordtwo.addEventListener("blur", () => {
  checkInputPasswordTwo();
});

login.addEventListener("blur", () => {
  checkInputLogin();
});

function checkInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Nome do usuário é obrigatório.");
  } else if (usernameValue.length < 15) {
    errorInput(
      username,
      "O nome do usuário precisa ter no mínimo 15 caracteres."
    );
  } else if (usernameValue.length > 60) {
    errorInput(
      username,
      "O nome do usuário não pode ultrapassar 60 caracteres."
    );
  } else {
    successInput(username);
  }
}

function checkInputBirthday() {
  const birthdayValue = birthday.value;

  if (birthdayValue === "") {
    errorInput(birthday, "Data de nascimento é obrigatória.");
  } else {
    successInput(birthday);
  }
}

function checkInputGender() {
  const genderValue = gender.value;

  if (genderValue === "") {
    errorInput(gender, "Sexo é obrigatório.");
  } else {
    successInput(gender);
  }
}

function checkInputMomName() {
  const momnameValue = momname.value;

  if (momnameValue === "") {
    errorInput(momname, "Nome materno é obrigatório.");
  } else if (momnameValue.length < 6) {
    errorInput(momname, "O nome materno precisa ter no minimo 6 caracteres.");
  } else {
    successInput(momname);
  }
}

function checkInputCpf() {
  const cpfValue = cpf.value;

  if (cpfValue === "") {
    errorInput(cpf, "CPF é obrigatório.");
  } else {
    successInput(cpf);
  }
}

function checkInputCelNumber() {
  const celnumberValue = celnumber.value;

  if (celnumberValue === "") {
    errorInput(celnumber, "Telefone celular é obrigatório.");
  } else {
    successInput(celnumber);
  }
}

function checkInputTelNumber() {
  const telnumberValue = telnumber.value;

  if (telnumberValue === "") {
    errorInput(telnumber, "Telefone fixo é obrigatório.");
  } else {
    successInput(telnumber);
  }
}

function checkInputAddress() {
  const addressValue = address.value;

  if (addressValue === "") {
    errorInput(address, "Endereço é obrigatório.");
  } else {
    successInput(address);
  }
}

function checkInputLogin() {
  const loginValue = login.value;

  if (loginValue === "") {
    errorInput(login, "Login é obrigatório.");
  } else if (loginValue.length != 6) {
    errorInput(login, "Login precisa ter exatamente 6 caracteres.");
  } else {
    successInput(login);
  }
}

function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "Senha é obrigatório.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    successInput(password);
  }
}

function checkInputPasswordTwo() {
  const passwordtwoValue = passwordtwo.value;
  const passwordValue = password.value;

  if (passwordtwoValue === "") {
    errorInput(passwordtwo, "Confirmar senha é obrigatório.");
  } else if (passwordtwoValue !== passwordValue) {
    errorInput(passwordtwo, "As senhas não são iguais.");
  } else {
    successInput(passwordtwo);
  }
}

function checkForm() {
  checkInputUsername();
  checkInputBirthday();
  checkInputGender();
  checkInputMomName();
  checkInputCpf();
  checkInputCelNumber();
  checkInputTelNumber();
  checkInputAddress();
  checkInputLogin();
  checkInputPassword();
  checkInputPasswordTwo();

  const formItems = form.querySelectorAll(".formulario-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "formulario-content success";
  });

  if (isValid) alert("CADASTRADO COM SUCESSO!");
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("small");

  textMessage.innerText = message;

  formItem.className = "formulario-content error";
}

function successInput(input) {
  const formItem = input.parentElement;

  formItem.className = "formulario-content success";
}

