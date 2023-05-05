import { load } from "../localStorage/load.mjs";

export function loggedInUser() {
    const token = load("token");
    document.body.classList[token ? "add" :  "remove"] ("logged-in");
}