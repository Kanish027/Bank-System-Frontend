import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    RegisterUserRequest: (state) => {
      state.isLoading = true;
    },

    RegisterUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    RegisterUserFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    LoginUserRequest: (state) => {
      state.isLoading = true;
    },
    LoginUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LoginUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    UserProfileRequest: (state) => {
      state.isLoading = true;
    },
    UserProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    UserProfileFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    LogoutUserRequest: (state, action) => {
      state.isLoading = true;
    },
    LogoutUserSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
    },
    LogoutUserFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },
  },
});

export const {
  RegisterUserRequest,
  RegisterUserSuccess,
  RegisterUserFailure,
  LoginUserRequest,
  LoginUserSuccess,
  LoginUserFailure,
  LogoutUserRequest,
  LogoutUserSuccess,
  LogoutUserFailure,
  UserProfileRequest,
  UserProfileSuccess,
  UserProfileFailure,
} = userSlice.actions;

export default userSlice.reducer;
