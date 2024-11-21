import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {

  apiGetProduct,
  apiAddProduct,
  apiGetOneProduct,
  apiEditProduct,
  apiDeleteProduct,
} from "@/services/product";
// Async thunks for API calls
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await apiGetProduct();
  return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (payload) => {
  const response = await apiAddProduct(payload);
  return response.data;
});

export const editProduct = createAsyncThunk('products/editProduct', async ({ id, payload }) => {
  const response = await apiEditProduct(id, payload);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productID) => {
  await apiDeleteProduct(productID);
  return productID;
});

// Product slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((product) => product.id !== action.payload);
      });
  },
});

export default productSlice.reducer;

