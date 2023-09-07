import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './component/reducer/userReducer';
import { productDetailsReducer, productReducer } from './component/reducer/productReducer';

const reducer = combineReducers({
    user: userReducer,
    // all product reducer 
    products: productReducer,
    // get product details 
    productDetails: productDetailsReducer,
});

let initialState = [];

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


