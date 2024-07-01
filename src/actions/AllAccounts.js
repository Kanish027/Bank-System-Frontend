import axios from "axios";
import {
  accountsFailure,
  accountsRequest,
  accountsSuccess,
} from "../features/accounts/accountsSlice";

const GetAllAccounts = () => async (dispatch) => {
  try {
    dispatch(accountsRequest());
    const { data } = await axios.get("/api/api/v1/banker", {
      withCredentials: true,
    });
    dispatch(accountsSuccess(data.accounts));
  } catch (error) {
    dispatch(accountsFailure(error.response.data.message));
  }
};

export default GetAllAccounts;
