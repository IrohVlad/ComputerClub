import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import adminRate from './IRate'

interface rateState {
  loaded: boolean;
  rates: Array<adminRate>;
  errors: Object; 
}

const initialState: rateState = {
  loaded: false,
  rates: [],
  errors: {}
}

interface RateTitlePayload{
  productIndex: number;
  value: string;
}
interface RatePricePayload{
  productIndex: number;
  value: number;
}
interface RateDatePayload{
  productIndex: number;
  infoIndex: number;
  value: string;
}
export const productSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    getRates: (state, action: PayloadAction<Array<adminRate>>) => {
        state.loaded = true;
        state.rates = action.payload;
        state.errors = {};
    },
    setRateTitle: (state, action: PayloadAction<RateTitlePayload>) =>{
      state.rates[action.payload.productIndex].title = action.payload.value;
    },
    setRatePrice: (state, action: PayloadAction<RatePricePayload>) =>{
      state.rates[action.payload.productIndex].price = action.payload.value;
    },
    setRateDate: (state, action: PayloadAction<RateDatePayload>) =>{
      state.rates[action.payload.productIndex].rates[action.payload.infoIndex].date = action.payload.value;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getRates, setRateTitle, setRatePrice, setRateDate} = productSlice.actions

export default productSlice.reducer