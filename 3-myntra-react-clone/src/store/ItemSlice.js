import { createSlice } from '@reduxjs/toolkit'

export const ItemsSlice = createSlice({
  name: 'Items',
  initialState:[],
  reducers: {
      addInitialItem:(state,action)=>{
        // console.log("reducer",state,action)
            return action.payload;
      }
  },
});

// Action creators are generated for each case reducer function
export const itemsActions = ItemsSlice.actions


