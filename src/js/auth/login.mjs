import { save } from '../localStorage/save.mjs';
import { API_BASE_URL } from '../api/apiBase.mjs';
import { registerProfile } from './register.mjs';

registerProfile()


export async function login(email, password) {
    const response = await fetch(`${API_BASE_URL}/auction/auth/login`, header ,{
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const profile = await response.json();
        save("token", profile.accessToken);
        delete profile.accessToken;
        save("profile", profile);
        return profile;
       
    } if(profile.ok) {
        window.location.href = 'path/to/profile.html'
    }

    throw new Error(response.statusText);
}