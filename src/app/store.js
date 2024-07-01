import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import accountReducer from "../features/account/accountSlice";
import accountsReducer from "../features/accounts/accountsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
    accounts: accountsReducer,
  },
});

export default store;
