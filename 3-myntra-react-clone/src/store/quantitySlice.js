import { createSlice } from '@reduxjs/toolkit'

export const QuantitySlice = createSlice({
  name: 'Quantity',
  initialState:{},
  reducers: {
      UpdateQunatity:(state,action)=>{
        // console.log("reducer",state,action)
           
             const { itemId, quantity } = action.payload;
      state[itemId] = quantity;
      }
  },
});

// Action creators are generated for each case reducer function
export const QuantityActions = QuantitySlice.actions
export default QuantitySlice.reducer;

