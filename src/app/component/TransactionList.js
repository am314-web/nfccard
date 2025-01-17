// src/components/TransactionList.js
import React from 'react';

const TransactionList = () => {
  const transactions = [
    { id: 1, type: 'Top up', amount: '+$100.00', time: 'Today 1:53 PM', status: 'Deposit' },
    { id: 2, type: 'Transfer', amount: '-$500.00', time: 'Today 2:33 PM', status: 'Send' },
    { id: 3, type: 'Received', amount: '+$50.00', time: 'Today 3:32 PM', status: 'Deposit' },
    { id: 4, type: 'Top up', amount: '+$20.00', time: 'Jan 15, 5:15 AM', status: 'Deposit' },
  ];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Attendence</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="bg-white p-4 rounded-lg shadow mb-2">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{transaction.type}</p>
                <p className="text-sm text-gray-600">{transaction.time}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{transaction.amount}</p>
                <p className="text-sm text-gray-600">{transaction.status}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
