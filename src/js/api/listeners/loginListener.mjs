import{ login } from "../auth/index.mjs";
import { LoggedInUser} from "../listeners/loggedInUser.mjs";

export async function loginListener(event) {
    event.preventdefault()
    const form = event.target
    const data = new FormData(form)
    const email = data.get("email")
    const password = data.get("password")

    try{
        const { name } = await login(email, password)
        LoggedInUser()
        location.href = `./?virew=profile&name=${name}`
    } catch(error) {
        return alert("There is no such username or password")
    }

}


