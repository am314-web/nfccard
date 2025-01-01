import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 flex flex-col space-y-4">
      <div className="flex justify-between">
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
          <h2 className="text-gray-600">Debit Card Account</h2>
          {/* Add Debit Card visuals here */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-1/4">
          <h2 className="text-gray-600">Your Total Balance</h2>
          <p className="text-4xl">$80,201.50</p>
        </div>
      </div>

      {/* Recent Transactions and Expenses */}
      <div className="flex justify-between">
        <div className="bg-white p-4 rounded-lg shadow-md w-2/3">
          <h2 className="text-gray-600">Recent Transactions</h2>
          {/* Add transaction list */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
          <h2 className="text-gray-600">Expenses</h2>
          <p>85.5% Normal Level</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
