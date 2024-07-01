import axios from "axios";
import {
  LoginUserFailure,
  LoginUserRequest,
  LoginUserSuccess,
  LogoutUserFailure,
  LogoutUserRequest,
  LogoutUserSuccess,
  RegisterUserFailure,
  RegisterUserRequest,
  RegisterUserSuccess,
  UserProfileFailure,
  UserProfileRequest,
  UserProfileSuccess,
} from "../features/user/userSlice";
import { toast } from "react-hot-toast";

const RegisterUser = (username, email, role, password) => async (dispatch) => {
  try {
    dispatch(RegisterUserRequest());

    const { data } = await axios.post(
      "/api/api/v1/user/new",
      {
        username: username,
        email: email,
        role: role,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    toast.success(data.message);
    dispatch(RegisterUserSuccess(data.result));
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(RegisterUserFailure(error.response.data.message));
  }
};

const LoginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(LoginUserRequest());

    const { data } = await axios.post(
      "/api/api/v1/user/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    toast.success(data.message);
    dispatch(LoginUserSuccess(data.user));
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(LoginUserFailure(error.response.data.message));
  }
};

const UserProfile = () => async (dispatch) => {
  try {
    dispatch(UserProfileRequest());

    const { data } = await axios.get("/api/api/v1/user/profile", {
      withCredentials: true,
    });
    dispatch(UserProfileSuccess(data.user));
  } catch (error) {
    dispatch(UserProfileFailure(error.response.data.message));
  }
};

const LogoutUser = () => async (dispatch) => {
  try {
    dispatch(LogoutUserRequest());

    const { data } = await axios.get("/api/api/v1/user/logout", {
      withCredentials: true,
    });
    toast.success(data.message);
    dispatch(LogoutUserSuccess());
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(LogoutUserFailure(error.response.data.message));
  }
};

export { RegisterUser, LoginUser, LogoutUser, UserProfile };
