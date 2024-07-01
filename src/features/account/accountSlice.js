import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const accountSlice = createSlice({
  initialState,
  name: "account",
  reducers: {
    transactionRequest: (state) => {
      state.isLoading = true;
    },
    transactionSuccess: (state, action) => {
      state.isLoading = false;
      state.transactions = action.payload;
    },
    transactionFailure: (state, action) => {
      state.error = action.payload;
    },

    depositRequest: (state) => {
      state.isDepoLoading = true;
    },
    depositSuccess: (state, action) => {
      state.isDepoLoading = false;
      state.message = action.payload;
    },
    depositFailure: (state, action) => {
      state.isDepoLoading = false;
      state.error = action.payload;
    },

    withdrawRequest: (state) => {
      state.isWithLoading = true;
    },
    withdrawSuccess: (state, action) => {
      state.isWithLoading = false;
      state.message = action.payload;
    },
    withdrawFailure: (state, action) => {
      state.isWithLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  transactionRequest,
  transactionSuccess,
  transactionFailure,
  withdrawRequest,
  withdrawSuccess,
  withdrawFailure,
  depositFailure,
  depositSuccess,
  depositRequest,
} = accountSlice.actions;

export default accountSlice.reducer;
