import { getToken } from "./tokenUtility"

export const getNonAuthHeaders = () => {
    const headers = {
        "Accept": "*/*",
        'Content-Type': 'application/json',
    }
    return headers
}

export const getAuthHeaders = async () => {
    let token = await getToken();
    
    const headers = {
        "Accept": "*/*",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return headers
}