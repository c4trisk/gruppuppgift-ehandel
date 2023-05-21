import { configureStore } from '@reduxjs/toolkit'
import shoppingCartSlice from './features/shoppingCart/shoppingCartSlice'
import productsSlice from './features/products/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    shoppingCart: shoppingCartSlice
  }
})