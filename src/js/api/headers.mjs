import { load } from 

export const headers = (contentType) => {
    const token = storage.load("token");
    const headers= {}

    if (contentType) {
        headers["Content-Type"] = constntType;
    }
    if(token) {
        headers.Authorization = 'Bearer ${token}';
    } 
    
    return headers;
}

