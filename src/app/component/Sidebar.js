import React from 'react';
import { Home, CreditCard, Wallet, Users, FileText, BarChart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-200 p-4">
      <h1 className="font-bold text-xl mb-8">FinBank</h1>
      <ul className="grid gap-6">
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-300 p-2 rounded-lg ">
          <Home className="w-5 h-5" />
          <span>Profile</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-300 p-2 rounded-lg">
          <CreditCard className="w-5 h-5" />
          <span>Attendence</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-300 p-2 rounded-lg">
          <Wallet className="w-5 h-5" />
          <span>Card Center</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-300 p-2 rounded-lg">
          <Users className="w-5 h-5" />
          <span>Announcement</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-300 p-2 rounded-lg">
          <Wallet className="w-5 h-5" />
          <span>transactions</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-300 p-2 rounded-lg">
          <BarChart className="w-5 h-5" />
          <span>Reports</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
