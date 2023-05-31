import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import adminProduct from './IProduct'

interface productState {
  loaded: boolean;
  products: Array<adminProduct>;
  errors: Object; 
}

const initialState: productState = {
  loaded: false,
  products: [],
  errors: {}
}

interface ProductTitlePayload{
  productIndex: number;
  value: string;
}
interface ProductPricePayload{
  productIndex: number;
  value: number;
}
interface ProductInfoTitlePayload{
  productIndex: number;
  infoIndex: number;
  value: string;
}
interface ProductInfoValuePayload{
  productIndex: number;
  infoIndex: number;
  value: string;
}
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Array<adminProduct>>) => {
        state.loaded = true;
        state.products = action.payload;
        state.errors = {};
    },
    setProductTitle: (state, action: PayloadAction<ProductTitlePayload>) =>{
      state.products[action.payload.productIndex].name = action.payload.value;
    },
    setProductPrice: (state, action: PayloadAction<ProductPricePayload>) =>{
      state.products[action.payload.productIndex].price = action.payload.value;
    },
    setProductInfoTitle: (state, action: PayloadAction<ProductInfoTitlePayload>) =>{
      state.products[action.payload.productIndex].product_info[action.payload.infoIndex].title = action.payload.value;
    },
    setProductInfoValue: (state, action: PayloadAction<ProductInfoValuePayload>) =>{
      state.products[action.payload.productIndex].product_info[action.payload.infoIndex].value = action.payload.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getProducts, setProductTitle, setProductPrice, setProductInfoTitle, setProductInfoValue } = productSlice.actions

export default productSlice.reducer