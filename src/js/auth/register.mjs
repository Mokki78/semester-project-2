

import { API_BASE_URL } from "../api/apiBase.mjs";


export async function registerProfile() {
  try {
    await fetch(`${API_BASE_URL}/auction/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'my_username',
        email: 'first.last@stud.noroff.no',
        password: 'password123',
        avatar: 'https://img.service.com/avatar.jpg'
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      window.location.href = '/path/to/ModalToggle2/index.html';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } catch (error) {
    console.error(error);
  }
}

