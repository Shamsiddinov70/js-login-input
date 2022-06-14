const localData = localStorage.getItem('token');

if (!localData) {
  window.location.pathname = 'login.html';
}
