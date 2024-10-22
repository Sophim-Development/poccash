"use client";


import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ExpenditureSummary: React.FC = () => {
  const percentage = 70;
//   console.log(percentage,'Hello %');
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-[16px] text-gray-700">Your Expenditure Summary</h3>
        <div className="w-full max-w-[140px]">
            <select
                id="options"
                className="block appearance-none w-full border-none text-gray-700 py-2 px-4 rounded  leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
                <option value="">This week</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M5.4 7l4.6 4.6L15.6 7l-1.4-1.4L10 10.6 6.8 5.6 5.4 7z" />
                </svg>
            </div>
        </div>
      </div>
      <div className="text-3xl font-bold text-green-600">$1,800.00</div>
      <p className="text-gray-500">10 transactions</p>
      
      <div className="flex justify-center my-6">
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            value={percentage}
            // text={`${percentage}%`}
            styles={buildStyles({
              textSize: '18px',
              pathColor: `#22c55e`,
              textColor: '#22c55a',
              trailColor: '#d1fae5',
            })}
            />
        </div>
        {/* <div className="w-24 h-24">
          <CircularProgressbar
            value={percentage}
            text={`$1,200`}
            styles={buildStyles({
              textSize: '18px',
              pathColor: `#22c55e`,
              textColor: '#22c55e',
              trailColor: '#d1fae5',
            })}
          />
        </div> */}
      </div>

      <ul className="text-sm space-y-2">
        <li className="flex items-center text-gray-600">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span> Watch: 10%
        </li>
        <li className="flex items-center text-gray-600">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span> Health care: 20%
        </li>
        <li className="flex items-center text-gray-600">
          <span className="w-2 h-2 bg-green-200 rounded-full mr-2"></span> Travelling: 70%
        </li>
      </ul>
    </div>
  );
};



export default ExpenditureSummary; 
