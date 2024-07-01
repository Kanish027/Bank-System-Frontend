import axios from "axios";
import {
  depositFailure,
  depositRequest,
  depositSuccess,
  transactionFailure,
  transactionRequest,
  transactionSuccess,
  withdrawFailure,
  withdrawRequest,
  withdrawSuccess,
} from "../features/account/accountSlice";
import { toast } from "react-hot-toast";

const AllTransactions = () => async (dispatch) => {
  try {
    dispatch(transactionRequest());

    const { data } = await axios.get("/api/api/v1/user/transactions", {
      withCredentials: true,
    });

    dispatch(transactionSuccess(data.transactions));
  } catch (error) {
    dispatch(transactionFailure());
  }
};

const Deposit = (deposit) => async (dispatch) => {
  try {
    dispatch(depositRequest());

    const { data } = await axios.post(
      "/api/api/v1/user/deposit",
      {
        amount: parseInt(deposit),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    toast.success(data.message);
    dispatch(depositSuccess());
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(depositFailure());
  }
};

const Withdraw = (withdraw) => async (dispatch) => {
  try {
    dispatch(withdrawRequest());

    const { data } = await axios.post(
      "/api/api/v1/user/withdraw",
      {
        amount: parseInt(withdraw),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    toast.success(data.message);
    dispatch(withdrawSuccess());
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(withdrawFailure());
  }
};

export { AllTransactions, Deposit, Withdraw };
