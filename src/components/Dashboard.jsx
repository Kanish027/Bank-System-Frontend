import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AllTransactions, Deposit, Withdraw } from "../actions/account";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  const { transactions, isWithLoading, isDepoLoading } = useSelector(
    (state) => state.account
  );

  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");

  const dispatch = useDispatch();

  const handleDeposit = async (e) => {
    e.preventDefault();
    await dispatch(Deposit(deposit));
    await dispatch(AllTransactions());
    setDeposit("");
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    await dispatch(Withdraw(withdraw));
    await dispatch(AllTransactions());
    setWithdraw("");
  };

  useEffect(() => {
    dispatch(AllTransactions());
  }, [dispatch]);

  return (
    <main className="flex-1 p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-9">Dashboard</h2>

        {/* Account Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaUser className="text-4xl text-blue-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Role</h3>
              <p className="text-2xl font-bold text-gray-900">
                {user && user.role}
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaUser className="text-4xl text-green-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                Username
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                {user && user.username}
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaMoneyBillWave className="text-4xl text-yellow-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                Total Balance
              </h3>
              <p className="text-2xl font-bold text-gray-900">
                ₹{transactions && transactions.balance}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <FaArrowUp className="text-green-600 mr-2" /> Deposit
            </h3>
            <form onSubmit={handleDeposit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="depositAmount"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="depositAmount"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                  onChange={(e) => setDeposit(e.target.value)}
                  value={deposit}
                />
              </div>
              <button
                disabled={isDepoLoading}
                className={`w-full text-white ${
                  isDepoLoading ? "bg-green-700" : "bg-green-600"
                } hover:bg-green-700 font-bold rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out`}
              >
                Deposit
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <FaArrowDown className="text-red-600 mr-2" /> Withdraw
            </h3>
            <form onSubmit={handleWithdraw}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="withdrawAmount"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="withdrawAmount"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                  onChange={(e) => setWithdraw(e.target.value)}
                  value={withdraw}
                />
              </div>
              <button
                disabled={isWithLoading}
                className={`w-full text-white ${
                  isWithLoading ? "bg-red-700" : "bg-red-600"
                } hover:bg-red-700 font-bold rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out`}
              >
                Withdraw
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
