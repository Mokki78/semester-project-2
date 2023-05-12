import { API_BASE_URL } from "../api/constants/apiBase.mjs";
import { headers } from "../api/constants/headers.mjs";

async function fetchUserProfile() {
  try {
    const headersObject = headers();
    const response = await fetch(`${API_BASE_URL}/auction/profiles`, { headers: headersObject });

    if (response.ok) {
      const data = await response.json();

      // Assuming data is an array, you can select the first profile
      const profile = data[0];

      // Display the user's profile information on the page
      const { username, credit, avatar, counts, bids, listings } = profile;
      const profileContainer = document.getElementById('profileContainer');
      profileContainer.innerHTML = `
        <h1>${username}</h1>
        <p>Your current credit is: ${credit}</p>
        <img src="${avatar}" alt="Avatar">
        <p>Counts: ${counts}</p>
        <p>Bids: ${bids}</p>
        <p>Listings: ${listings}</p>
      `;

      return profile;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}

window.onload = function() {
  let name = localStorage.getItem("name");
  if(name != "undefined || name != null") {
    document.getElementById('welcomeMessage').innerHTML = "Hello" + name + "!";
  } else 
  document.getElementById('welcomeMessage').innerHTML = "Hello" + "!";

}

// Call the fetchUserProfile function when the profile page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchUserProfile();
});

export async function profileData() {
  try {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const name = params.get("name");
    const url = `${API_BASE_URL}/auction/profiles/${name}`;
    const token = localStorage.getItem("accessToken");
    const headersObject = headers();

    if (token) {
      headersObject.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url, { headers: headersObject });

    if (response.ok) {
      const data = await response.json();
      const { username, credit, avatar, counts, bids, listings } = data;

      const profileElement = document.createElement("div");
      profileElement.innerHTML = `
        <h1>${username}</h1>
        <p>Credits: ${credit}</p>
        <img src="${avatar}" alt="Avatar">
        <p>Counts: ${counts}</p>
        <p>Bids: ${bids}</p>
        <p>Listings: ${listings}</p>
      `;
      document.body.appendChild(profileElement);
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

profileData();