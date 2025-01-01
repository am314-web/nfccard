// src/components/BalanceCard.js
import React from 'react';

const BalanceCard = ({ balance }) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg mb-4 relative">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">${balance}</h2>
          <p className="text-sm">+3.50% from last month</p>
          <p className="text-sm">**** 1214 | Exp: 02/15</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-lg">Add money</button>
      </div>
    </div>
  );
};

export default BalanceCard;
