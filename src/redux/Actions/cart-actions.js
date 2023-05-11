import { ActionTypes } from "../Constants/action-types"

export const addToCart=(products)=>{
    return{
        type: ActionTypes.ADD_TO_CART,
        payload: products
}
}