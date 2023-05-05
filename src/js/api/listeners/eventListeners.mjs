import { loginListener } from "./loginListener.mjs";
import { registerListener } from "./registerListener.mjs";


export const modals = () => {
    document.querySelector('form#logInForm').addEventListener('submit', 'loginListener')
    document.querySelector('form#registerForm').addEventListener('submit', 'registerListener')
}