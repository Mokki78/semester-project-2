const leave = document.querySelector('#logout');

leave.addEventListener('click', () => {
  alert('Your logged out');
  localStorage.removeItem('accessToken'),
    (window.location.href = '/login.html');
});
