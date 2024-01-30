// src/features/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://localhost:7204/api/Product';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const createProduct = createAsyncThunk('product/createProduct', async (product) => {
  const response = await axios.post(apiUrl, product);
  return response.data;
});

export const updateProduct = createAsyncThunk('product/updateProduct', async (product) => {
  const response = await axios.put(`${apiUrl}/${product.id}`, product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
  await axios.delete(`${apiUrl}/${id}`);
  return id;
});

const productSlice = createSlice({
  name: 'product',
  initialState: { products: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p.name === action.payload.name);
        if (index !== -1) {
          state.products[index] = action.payload.name;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
