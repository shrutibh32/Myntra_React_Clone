import { createSlice } from '@reduxjs/toolkit'

export const BagSlice = createSlice({
  name: 'Bags',
  initialState:[],
  reducers: {
      addToBag:(state,action)=>{
          state.push(action.payload);
      },
            removeFromBag:(state,action)=>{
          return state.filter(itemId=>itemId!==action.payload);
      }
  },
});

// Action creators are generated for each case reducer function
export const BagActions = BagSlice.actions


