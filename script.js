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

loginBtn.addEventListener('click', onClickLogin);
textarea.addEventListener('keyup', onKeyCalculateCharacters);
textarea.addEventListener('keydown', onKeyCalculateCharacters);
agreement.addEventListener('click', onClickVerifyAgreement);
