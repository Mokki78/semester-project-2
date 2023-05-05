import { registerProfile } from "../auth/index.mjs";

registerProfile()

export async function registerListener(event) {
    event.preventDefault()
    const form = event.target;
    const data = new FormData(form)
    const email = data.get("email")
    const name = data.get("name")
    const password = data.get("password")
    const avatar = data.get("avatar")

    try {
        await auth.registerProfile(name, email, password, avatar);
    } catch(error) {
        return alert("Something is wrong, and we could not create you account");
    }

    try {
        await auth.login(email, password)
        location.reload()
    } catch (error) {
        return alert("We did not succeed in login into your new account. Please try again")
    }


}


