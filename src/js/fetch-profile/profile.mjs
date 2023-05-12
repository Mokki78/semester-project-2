import { API_BASE_URL } from "../api/constants/apiBase.mjs";
import { headers } from "../api/constants/headers.mjs";

async function fetchUserProfiles() {
  try {
   
    const headersObject = headers();
    const response = await fetch(`${API_BASE_URL}/auction/profiles`, { headers: headersObject });

    if (response.ok) {
      const data = await response.json();

      // Assuming data is an array, you can select the first profile
      const profile = data[7];

      // Display the user's profile information on the page
      const { username, credit, avatar, counts, bids, listings } = profile;
      const profileContainer = document.getElementById('profileContainer');
      profileContainer.innerHTML = `
        <h1>${profile.name}</h1>
        <p>Your current credit is: ${profile.credit}</p>
        <img src="${profile.media}" alt="Avatar">
       
      `;

    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}


// Call the fetchUserProfile function when the profile page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchUserProfiles();
});



export async function profileData() {
  try {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const name = params.get("name");
    
    const accessToken = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/auction/profiles/${name}`, {
      headers: {
        ...headers(),
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const profile = await response.json();

      const { name, credit, avatar } = profile;
      const profileContainer = document.getElementById('myContainer');
      profileContainer.innerHTML = `
        <h1>${name}</h1>
        <p>Your current credit is: ${credit}</p>
        <img src="${avatar}" alt="Avatar">
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
