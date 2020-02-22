const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault(); // To prevent page from reloading
  // forEach loop won't work since the input elements doesn't convert to an array
  for (let i = 0; i < e.target.elements.length - 1; i++) {
    const input = e.target.elements[i];
    input.value.length < 1 ? setFormError(input) : setFormSuccess(input);
  }
});

/**
 * Utility to show the error on the input type
 */
setFormError = input => {
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');
  formControl.className = 'form-control error';
  span.innerText = setErrorText(input);
};

/**
 * Utility to show Success block on Input if it is valid
 */

setFormSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

const setErrorText = input => {
  const errorTexts = {
    username: 'User Name must be required',
    email: 'Email must be required',
    password: 'Password must be required',
    confirmPassword: 'confirmPassword must match to password',
  };
  return errorTexts[input.id];
};
