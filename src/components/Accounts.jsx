import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetAllAccounts from "../actions/AllAccounts";
import {
  FaSearch,
  FaUserCircle,
  FaRupeeSign,
  FaIdCard,
  FaUserTag,
} from "react-icons/fa";

const Accounts = () => {
  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.accounts);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(GetAllAccounts());
  }, [dispatch]);

  const filteredAccounts =
    accounts &&
    accounts.filter(
      (account) =>
        account.userId.username
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        account.userId.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          Customer Accounts
        </h2>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search accounts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAccounts &&
          filteredAccounts.map((account) => (
            <AccountCard key={account._id} account={account} />
          ))}
      </div>
    </div>
  );
};

const AccountCard = ({ account }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 rounded-full p-3 mr-4">
          <FaUserCircle className="text-4xl text-blue-500" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {account.userId.username}
          </h3>
          <p className="text-sm text-gray-500">{account.userId.email}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center text-gray-700">
          <FaIdCard className="mr-2 text-blue-500" />
          <p className="text-sm">
            Account ID: <span className="font-medium">{account._id}</span>
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaUserTag className="mr-2 text-blue-500" />
          <p className="text-sm">
            Role:{" "}
            <span className="font-medium capitalize">
              {account.userId.role}
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaRupeeSign className="mr-2 text-green-500" />
          <p className="text-lg font-bold">
            Balance: ₹ {account.balance.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
