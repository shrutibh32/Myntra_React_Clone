import { configureStore } from '@reduxjs/toolkit'
import { ItemsSlice } from './ItemSlice'
import { fetchStatusSlice } from './fetchstatusSlice'
import { BagSlice } from './bagSlice'
import { QuantitySlice } from './quantitySlice'


export const myntrastore = configureStore({
  reducer: {
    items:ItemsSlice.reducer,
    fetchStatusSlice:fetchStatusSlice.reducer,
    Bags:BagSlice.reducer,
    Quantity:QuantitySlice.reducer
  },
})





