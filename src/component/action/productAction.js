import axios from "axios";
import {

    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERROR
} from "../Contact/ProductConstant"


export const getAllProduct = (price = [0, 200], currentPage = 1) => async (dispatch) => {

    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })
        let link = `http://localhost:5000/api/v1/products?price[gte]=${price[0]}&price[lte]=${price[1]}&page=${currentPage}`;

        const { data } = await axios.get(link);
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error?.error?.response.data.message,
        })
    }
}



// clear error 
export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERROR
    })
}