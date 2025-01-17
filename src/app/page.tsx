
// page.tsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-10 text-blue-900">FinBank</h1>
      <ul className="space-y-6">
        <li className="text-lg font-medium text-gray-700 hover:text-blue-700 cursor-pointer">Dashboard</li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-700 cursor-pointer">Transactions</li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-700 cursor-pointer">Card Center</li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-700 cursor-pointer">Contacts</li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-700 cursor-pointer">E-Wallet Center</li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-700 cursor-pointer">Reports</li>
      </ul>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex justify-between space-x-6">
        {/* Debit Card Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Debit Card Account</h2>
          <div className="flex items-center justify-between">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-4 rounded-lg text-white w-full">
              <p className="text-sm">Platinum Debit</p>
              <p className="text-2xl font-bold mt-2 mb-4">**** **** **** 7889</p>
              <p className="text-sm">Valid Thru 02/25</p>
            </div>
            <button className="bg-gray-200 text-gray-700 p-2 rounded-lg ml-4">Add Debit Card</button>
          </div>
        </div>

        {/* Balance Section */}
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Your Total Balance</h2>
          <p className="text-4xl font-bold text-gray-800">$80,201.50</p>
          <p className="text-sm text-gray-500 mt-2">December 21, 2020</p>
          <div className="flex space-x-4 mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Send</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Topup</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">More</button>
          </div>
        </div>
      </div>

      {/* Recent Transactions and Expenses */}
      <div className="flex justify-between space-x-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            <TransactionItem name="Paypal - Received" date="20 December 2020" amount="$8,200.00" />
            <TransactionItem name="Spotify Premium" date="19 December 2020" amount="$19.00" />
            <TransactionItem name="TransferWise - Received" date="17 December 2020" amount="$1,200.00" />
            <TransactionItem name="H&M Payment" date="15 December 2020" amount="$2,209.00" />
          </div>
        </div>

        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Expenses Instead</h2>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-gray-800 mb-2">85.5%</p>
            <p className="text-gray-500">Normal Level</p>
            <p className="text-sm text-gray-500 mt-2">Total Exp: $1,820.80</p>
          </div>
        </div>
      </div>

      {/* Invoice Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Invoice Activity</h2>
        <InvoiceTable />
      </div>
    </div>
  );
};

const TransactionItem = ({ name, date, amount }: { name: string, date: string, amount: string }) => (
  <div className="flex justify-between items-center">
    <div>
      <p className="text-gray-800 font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <p className="text-gray-800 font-semibold">{amount}</p>
  </div>
);

const InvoiceTable = () => (
  <table className="w-full text-left">
    <thead className="bg-gray-100">
      <tr>
        <th className="p-3 font-semibold text-gray-600">Date & Time</th>
        <th className="p-3 font-semibold text-gray-600">Subject Code</th>
        <th className="p-3 font-semibold text-gray-600">Faculty</th>
        <th className="p-3 font-semibold text-gray-600">Status</th>
        <th className="p-3 font-semibold text-gray-600">Cummulative Status</th>
      </tr>
    </thead>
    <tbody className="divide-y">
      <tr>
        <td className="p-3 text-gray-700">20 Dec 2020</td>
        <td className="p-3 text-gray-700">#3150001</td>
        <td className="p-3 text-gray-700">Sharmma Vinayak</td>
        <td className="p-3 text-gray-700">Present</td>
        <td className="p-3 text-gray-700">75P</td>
      </tr>
      {/* Repeat other rows as necessary */}
    </tbody>
  </table>
);

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
