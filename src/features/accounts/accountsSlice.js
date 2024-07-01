import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const accountsSlice = createSlice({
  initialState,
  name: "accounts",
  reducers: {
    accountsRequest: (state) => {
      state.isLoading = true;
    },
    accountsSuccess: (state, action) => {
      state.isLoading = false;
      state.accounts = action.payload;
    },
    accountsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { accountsRequest, accountsSuccess, accountsFailure } =
  accountsSlice.actions;

export default accountsSlice.reducer;
