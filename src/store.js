import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { allUserReducer, profileReducer, userDetailsReducer, userReducer } from './component/reducer/userReducer';
import { newProductReducer, productDetailsReducer, productReducer, updateProductReducer } from './component/reducer/productReducer';
import { cartReducer } from './component/reducer/cartReducer';
import { postReducer } from './component/reducer/postReducer';
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from './component/reducer/orderReducer';

const reducer = combineReducers({
    user: userReducer,
    allUsers: allUserReducer,
    // all product reducer 
    products: productReducer,
    // get product details 
    productDetails: productDetailsReducer,
    // add item in cart
    cart: cartReducer,
    // post 
    posts: postReducer,
    // update and delete
    product: updateProductReducer,
    newProduct: newProductReducer,
    userDetails: userDetailsReducer,
    profile: profileReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrder: allOrdersReducer,
    order: orderReducer,
});


let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ?
            JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
};


const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


