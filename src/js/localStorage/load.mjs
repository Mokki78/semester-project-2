export default (key)> {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch {
        return null
    }
 }