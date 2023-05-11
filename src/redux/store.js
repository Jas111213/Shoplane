import{ createStore}from 'redux';
import {cartReducer} from'./Reducers/cart-reducers';


const store=createStore(cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

export default store;