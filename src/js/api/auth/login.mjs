import { API_BASE_URL } from '../constants/apiBase.mjs';
import { headers } from "../constants/headers.mjs";
import { save } from "../localStorage/save.mjs";

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
        headers: headers ("application/json")
      });

      if (response.ok) {
        const profile = await response.json()
        save("token", profile.accessToken)
        delete profile.accessToken
        save("profile", profile)
       
        const credit = profile.credit;
        const avatar = profile.avatar;
        const username = profile.name;

        const container = document.createElement('div');
        container.setAttribute('id', 'Container');
        
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
