import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers : {
        addProducts : (state,action) => {
                state.push({
                    productPrice : action.payload.price,
                    productName : action.payload.name,  
                    productId : action.payload.id  
                
                })
        },

        removeProducts : (state,action) => {
            const index = state.findIndex(obj => obj.id === action.payload.id)

            state.splice(index,1)
        }
    }
})

export const {addProducts, removeProducts} = ProductsSlice.actions
export default ProductsSlice.reducer  