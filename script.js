const loginBtn = document.getElementById('login-btn');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

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

loginBtn.addEventListener('click', onClickLogin);
agreement.addEventListener('click', onClickVerifyAgreement);
