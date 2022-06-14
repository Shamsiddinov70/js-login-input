const elForm = document.querySelector('.js-form');
const elEmail = document.querySelector('.js-email');
const elPassword = document.querySelector('.js-password');

const handleLogin = (evt) => {
  evt.preventDefault();

  const data = {
    email: elEmail.value.trim(),
    password: elPassword.value.trim(),
  };

  fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert('Ukam boshqa linyaga tushding');
      }
    })
    .then((data) => {
      if (data) {
        localStorage.setItem('token', JSON.stringify(data))
        window.location.pathname = 'index.html';
      }
      else {
        console.error('error token');

        elEmail.classList.add("is-invalid");
        elPassword.classList.add("is-invalid");
      }
    })
    .catch((err) => console.log(err));
};

elForm.addEventListener('submit', handleLogin);

/*
1. Loginda xato bo'lsa localStorrage ga ma'lumot saqlamasin
2. Token xato bo'lsa login.html ga o'tkazsin
3. Inputlarda xato holatni ko'rish mumkin bo'lsin
 */