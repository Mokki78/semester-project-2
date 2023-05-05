import { API_BASE_URL } from "../constants/apiBase.mjs";
import { headers } from "../constants/headers.mjs";

export async function registerProfile(name, email, password, avatar) {
  const response = await fetch(`${API_BASE_URL}/auction/auth/register`, {
    method: "POST",
    body: JSON.stringify({ name, email, password, avatar }),
    headers: headers("application/json")
  });

  if (response.ok) {
    alert("You have successfully registered an account with EasyBids")
    const data = await response.json();
    setTimeout(() => {
      window.location.href = "/login.html";
    }, 2000); 
    return data;
    
  } if (!response.ok) {
    alert("This email is already in use. Try login instead or use another email adress")
  }


  throw new Error("Something went wrong");
}


const form = document.querySelector('#registerForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const avatar = document.getElementById('registerAvatar').value;
  

  try {
    await registerProfile(name, email, password, avatar);
  } catch (error) {
    console.error(error);
  }
});