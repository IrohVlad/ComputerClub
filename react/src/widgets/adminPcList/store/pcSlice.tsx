import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import adminPc from './IPc'

export interface pcState {
  loaded: boolean;
  pcs: Array<adminPc>;
  errors: Object; 
}

const initialState: pcState = {
  loaded: false,
  pcs: [],
  errors: {}
}

interface PcInfoTitlePayload{
  productIndex: number;
  infoIndex: number;
  value: string;
}
interface PcInfoValuePayload{
  productIndex: number;
  infoIndex: number;
  value: string;
}
export const pcSlice = createSlice({
  name: 'pcs',
  initialState,
  reducers: {
    getPcs: (state, action: PayloadAction<Array<adminPc>>) => {
        state.loaded = true;
        state.pcs = action.payload;
        state.errors = {};
    },
    setPcInfoTitle: (state, action: PayloadAction<PcInfoTitlePayload>) =>{
      state.pcs[action.payload.productIndex].pc_info[action.payload.infoIndex].title = action.payload.value;
    },
    setPcInfoValue: (state, action: PayloadAction<PcInfoValuePayload>) =>{
      state.pcs[action.payload.productIndex].pc_info[action.payload.infoIndex].value = action.payload.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getPcs, setPcInfoTitle, setPcInfoValue } = pcSlice.actions

export default pcSlice.reducer