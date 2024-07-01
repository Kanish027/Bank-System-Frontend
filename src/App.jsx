import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { UserProfile } from "./actions/user";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserProfile());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<Register />} />
        <Route path="/" element={<Account />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
