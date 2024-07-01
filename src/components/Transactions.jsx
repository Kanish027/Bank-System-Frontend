import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllTransactions } from "../actions/account";

const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(AllTransactions());
  }, [dispatch]);

  return (
    <main className="flex-1 p-6 md:p-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Transactions
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                  Type
                </th>
                <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                [...transactions.transactions].reverse().map((transaction) => (
                  <tr
                    key={transaction._id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                          transaction.type === "deposit"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {transaction.type}
                      </span>
                    </td>
                    <td
                      className={`py-3 px-4 text-right font-medium ${
                        transaction.type === "deposit"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "deposit" ? "+" : "-"}₹
                      {transaction.amount}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Transactions;
