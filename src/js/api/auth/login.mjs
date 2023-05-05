import { API_BASE_URL } from '../constants/apiBase.mjs';

const form = document.querySelector('#logInForm');



form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = form.loginEmail.value;
  const password = form.loginPassword.value;

  async function loginUser() {

    try {
      const response = await fetch(`${API_BASE_URL}/auction/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      const credit = data.credit;
      const avatar = data.avatar;

      if (response.ok) {
        const username = data.name;

        const container = document.createElement('div');
        container.setAttribute('id', 'myContainer');
        
        const userEl = document.createElement('h1');
        userEl.textContent = `${username}`;
        container.appendChild(userEl);
        
        const creditEl = document.createElement('p');
        creditEl.textContent = `Your current credit is: ${credit}`;
        container.appendChild(creditEl);
        
        const avatarEl = document.createElement('img');
        avatarEl.setAttribute('src', avatar);
        container.appendChild(avatarEl);
        
        document.body.appendChild(container);

        window.location.href = "/profile.html";
      }
    } catch (error) {
      console.error(error);
    }
  }

  await loginUser();
});
