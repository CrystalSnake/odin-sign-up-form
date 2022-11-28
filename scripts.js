const pass = document.getElementById('password');
const confirmPass = document.getElementById('confirm_password');

function check() {
  if (pass.value != confirmPass.value) {
    confirmPass.setCustomValidity('Password do not match!');
  } else {
    confirmPass.setCustomValidity('');
  }
}

confirmPass.addEventListener('input', check);
