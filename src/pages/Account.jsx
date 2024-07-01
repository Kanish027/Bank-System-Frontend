import React, { useState } from "react";
import {
  FaChartLine,
  FaExchangeAlt,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LogoutUser } from "../actions/user";
import Accounts from "../components/Accounts";
import Dashboard from "../components/Dashboard";
import Transactions from "../components/Transactions";

const Account = () => {
  const [tab, setTab] = useState("dashboard");
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogoutUser());
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-blue-900 text-white flex flex-col fixed h-screen">
        <div className="p-6 bg-blue-800">
          <h1 className="text-2xl font-bold truncate">Bank System</h1>
        </div>
        <nav className="flex-grow mt-6 px-4 overflow-y-auto">
          <SidebarItem
            icon={FaChartLine}
            label="Dashboard"
            isActive={tab === "dashboard"}
            onClick={() => setTab("dashboard")}
          />
          <SidebarItem
            icon={FaExchangeAlt}
            label="Transactions"
            isActive={tab === "transactions"}
            onClick={() => setTab("transactions")}
          />
          <SidebarItem
            icon={FaUsers}
            label="Accounts"
            isActive={tab === "accounts"}
            onClick={() => setTab("accounts")}
          />
        </nav>
        <div className="p-4 mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
          >
            <FaSignOutAlt className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-grow ml-64">
        <div className="h-screen overflow-y-auto">
          {tab === "dashboard" && <Dashboard />}
          {tab === "transactions" && <Transactions />}
          {tab === "accounts" && <Accounts />}
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center py-3 px-4 mb-2 cursor-pointer rounded-lg transition duration-200 ${
      isActive
        ? "bg-blue-700 text-white"
        : "text-blue-100 hover:bg-blue-800 hover:text-white"
    }`}
  >
    <Icon className="mr-3 flex-shrink-0" />
    <span className="truncate">{label}</span>
  </div>
);

export default Account;
