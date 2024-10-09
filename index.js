const users = [];
const userListTag = document.getElementById("userlist");
const randomNameTag = document.getElementById("randomName");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const createUser = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  users.push(name);
  userListTag.innerHTML += `<li>${name}</li>`;
};

const random = () => {
  if (users.length === 0) return;

  const index = getRandomInt(users.length);
  randomNameTag.textContent = users[index];
};

const gerarNomeRandomico = () => {
  let letras = "ABCDEFGHIJKLMNOPQRSTUVXZW";
  letras = letras.toLowerCase();
  let senhaFinal = "";

  for (let i = 0; i < 8; i++) {
    const number = getRandomInt(letras.length);
    senhaFinal += letras[number];
  }
  return senhaFinal;
};

const inputNameTag = document.getElementById("name");
const buttonCreateTag = document.getElementById("createuser");
const buttonRandomTag = document.getElementById("buttonrandom");
// buttonrandom
const createMock = () => {
  // for (let i = 0; i < 10; i++) {
  //   const mockName = gerarNomeRandomico();
  //   users.push(mockName);
  //   userListTag.innerHTML += `<li>${mockName}</li>`;
  // }
};

const teste = () => {
  for (let i = 0; i < 10; i++) {
    const mockName = gerarNomeRandomico();
    inputNameTag.value = mockName;
    buttonCreateTag.click();
  }
  buttonRandomTag.click();

  if (users.find((item) => item === randomNameTag.textContent)) {
    console.log("✅ - Teste de sorteio com nomes válidos");
  } else {
    console.log("❌ - Teste de sorteio com nomes válidos");
  }
};
