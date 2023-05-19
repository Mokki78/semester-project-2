


import { API_BASE_URL } from "../api/constants/apiBase.mjs";
import { headers } from "../api/constants/headers.mjs";

export async function profileData() {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_BASE_URL}/auction/profiles`, {
      headers: {
        ...headers(),
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      
      const currentUser = await response.json();

      const { name, credits, avatar } = currentUser;
      const profileContainer = document.getElementById('myContainer');
      profileContainer.innerHTML = `
        <div class="auction-card"><h1>${currentUser.name}</h1>
        <p>Your current credit is: ${currentUser._count.credits}</p>
        <img src="${currentUser.avatar}" alt="Avatar"></div>
      `;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  profileData();
});