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
      return families[index].value;
    }
  }
}

function selectedSubject() {
  const subjects = document.querySelectorAll('.subject');
  let subjectString = ""; 
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      if (subjectString === "") {
        subjectString = ` ${subjects[index].value}`;
      } else {
        subjectString += `, ${subjects[index].value}`;
      }
    }
  }
  return subjectString;
}

function selectedGrade() {
  const grade = document.querySelectorAll('.grade');
  for (let index = 0; index < grade.length; index += 1) {
    if (grade[index].checked) {
      return grade[index].value;
    }
  }
}

function onClickShowResume(event) {
  event.preventDefault();
  
  let name = document.querySelector('#input-name').value;
  name += ' ' + document.querySelector('#input-lastname').value;
  const email = document.querySelector("#input-email").value;
  const house = selectedHouse();
  const family = selectedFamily();
  const subjects = selectedSubject();
  const evaluation = selectedGrade();
  const obsertations = document.querySelector('#textarea').value;

  document.querySelector('#resume-name').innerText += ` ${name}`;
  document.querySelector('#resume-email').innerText += ` ${email}`;
  document.querySelector('#resume-casa').innerText += ` ${house}`;
  document.querySelector('#resume-familia').innerText += ` ${family}`;
  document.querySelector('#resume-materias').innerText += ` ${subjects}`;
  document.querySelector('#resume-avaliacao').innerText += ` ${evaluation}`;
  document.querySelector('#resume-observacoes').innerText += ` ${obsertations}`;

  document.querySelector('#resume-container').style.display = 'flex';
  document.querySelector('#evaluation-form').style.display = 'none';
}

submitBtn.addEventListener('click', onClickShowResume);
loginBtn.addEventListener('click', onClickLogin);
textarea.addEventListener('keyup', onKeyCalculateCharacters);
textarea.addEventListener('keydown', onKeyCalculateCharacters);
agreement.addEventListener('click', onClickVerifyAgreement);
