import axios from "axios";
import { API_URL } from '../utils/constants'
import { getAuthHeaders } from '../utils/utility'

const getAllOrders = async () => {
    const response = await axios
        .get(API_URL + 'order/orders/ordered', { headers: await getAuthHeaders() })
    return response.data.results
}

const OrderServices = {
    getAllOrders,
}

export default OrderServices;