import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  loading: false
}



export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default productsSlice.reducer