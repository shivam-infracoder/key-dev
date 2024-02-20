import { combineReducers, applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { productListReducers, productDetailsReducers, fProductListReducers } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { Container } from 'react-bootstrap'

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    fProductList: fProductListReducers,

})

// console.log('from store ', localStorage.getItem('cartItems'))
const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        (JSON.parse(localStorage.getItem('cartItems'))) : []

console.log(cartItemsFromStorage)




const initialState = {

cart: {cartItems: cartItemsFromStorage}

}

const middleware = [thunk]
 
const store = configureStore({
    reducer:reducer,
    middleware: ()=> [...middleware],
    preloadedState: initialState,
})

    // reducer:reducer, initialState,
    // composeWithDevTools(applyMiddleware(...middleware))
    // )

export default store
