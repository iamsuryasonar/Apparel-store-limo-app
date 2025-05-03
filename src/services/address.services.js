import axios from "axios";
import { API_URL } from '../utils/constants'
import { getAuthHeaders } from '../utils/utility'

const getAllAddresses = async () => {
    const response = await axios
        .get(API_URL + 'address/', { headers: await getAuthHeaders() })
    return response.data.results
}

const addAddress = async (data) => {
    const response = await axios
        .post(API_URL + 'address/', data, { headers: await getAuthHeaders() })
    return response.data.results
}

const updateAddress = async (data) => {
    const response = await axios
        .put(API_URL + 'address/' + data._id, data, { headers: await getAuthHeaders() })
    return response.data.results
}

const removeAddress = async (data) => {
    const response = await axios
        .delete(API_URL + 'address/' + data.id, { headers: await getAuthHeaders() })
    return response.data.results
}

const AddressServices = {
    getAllAddresses,
    addAddress,
    updateAddress,
    removeAddress
}

export default AddressServices;