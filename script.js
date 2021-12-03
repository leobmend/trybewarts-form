const loginBtn = document.getElementById('login-btn');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const textareaCounter = document.getElementById('counter');

function onClickLogin() {
  const inputEmail = document.querySelector('[name=email]');
  const inputPassword = document.querySelector('[name=password]');

  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function onClickVerifyAgreement(event) {
  const { checked } = event.target;

  if (checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function onKeyCalculateCharacters(event) {
  const charactersCount = event.target.value.length;

  const remainingCharacters = 500 - charactersCount;
  textareaCounter.innerText = remainingCharacters;
}

function selectedHouse() {
  const houses = document.querySelectorAll('#house option');
  for (let index = 0; index < houses.length; index += 1) {
    if (houses[index].selected) {
      return houses[index].innerText;
    }
  }
}

function selectedFamily() {
  const families = document.querySelectorAll('input[name="family"]');
  for (let index = 0; index < families.length; index += 1) {
    if (families[index].checked) {
      return families[index].innerText;
    }
  }
}

function onClickShowResune() {
  let name = document.querySelector('#input-name').value;
  name += ' ' + document.querySelector('#input-lastname').value;
  const email = document.querySelector("#input-email").value;
  const house = selectedHouse();
  const family = selectedFamily();
}

submitBtn.addEventListener('click', onClickShowResune);
loginBtn.addEventListener('click', onClickLogin);
textarea.addEventListener('keyup', onKeyCalculateCharacters);
textarea.addEventListener('keydown', onKeyCalculateCharacters);
agreement.addEventListener('click', onClickVerifyAgreement);
