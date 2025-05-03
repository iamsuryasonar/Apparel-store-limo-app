import axios from "axios";
import { API_URL } from '../utils/constants'
import { getAuthHeaders } from '../utils/utility'

const getAllCartItems = async () => {
    const response = await axios
        .get(API_URL + 'cart/', { headers: await getAuthHeaders() });
    return response.data.results
}

const addToCart = async (data) => {
    const response = await axios
        .post(API_URL + 'cart/', data, { headers: await getAuthHeaders() })
    return response.data.results
}

const updateItemQuantity = async (data) => {
    const response = await axios
        .put(API_URL + 'cart/' + data.itemId,
            { quantity: data.quantity },
            { headers: await getAuthHeaders() })
    return response.data.results
}

const removeItemFromCart = async (data) => {
    const response = await axios
        .delete(API_URL + 'cart/' + data.itemId, { headers: await getAuthHeaders() })
    return response.data.results
}

const CartServices = {
    getAllCartItems,
    addToCart,
    updateItemQuantity,
    removeItemFromCart
}

export default CartServices;