const buttonLogin = document.querySelector('#button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const input = document.querySelector('.input');

function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', validation);
