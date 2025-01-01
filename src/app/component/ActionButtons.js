// src/components/ActionButtons.js
import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex justify-between mt-4">
      <button className="flex-1 bg-gray-200 p-4 rounded-lg text-center mr-2">
        <span className="block">Send</span>
      </button>
      <button className="flex-1 bg-gray-200 p-4 rounded-lg text-center mr-2">
        <span className="block">Receive</span>
      </button>
      <button className="flex-1 bg-gray-200 p-4 rounded-lg text-center">
        <span className="block">Withdraw</span>
      </button>
    </div>
  );
};

export default ActionButtons;
