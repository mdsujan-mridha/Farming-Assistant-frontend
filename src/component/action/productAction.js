import axios from "axios";
import {

    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERROR,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS
} from "../constant/ProductConstant"


export const getAllProduct = (price = [0, 200], currentPage = 1, category) => async (dispatch) => {

    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })
        let link = `http://localhost:5000/api/v1/products?price[gte]=${price[0]}&price[lte]=${price[1]}&page=${currentPage}`;
        if (category) {
            link = `http://localhost:5000/api/v1/products?price[gte]=${price[0]}&price[lte]=${price[1]}&page=${currentPage}&category=${category}`;
        }

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

// product details 

export const productDetails = (productId) => async (dispatch) => {


    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${productId}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error?.error.response.data.message
        })
    }


}

// get all products by admin 
export const getAdminProduct = () => async (dispatch) => {

    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/admin/products`)
        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }

}

// update product admin
export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST })
        const { data } = await axios.put(`http://localhost:5000/api/v1/admin/product/${id}`, productData)
        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success,
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

// create new product by admin 
export const createProduct = (productData) => async (dispatch) => {

    try {
        dispatch({ type: NEW_PRODUCT_REQUEST })
        //   const config = {
        //     headers:{
        //         "Content-type":"application/json"
        //     }
        //   }
        const data = await axios.post(`http://localhost:5000/api/v1/product/new`, productData)
        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response?.data.message
        })
    }

}

// clear error 
export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERROR
    })
}