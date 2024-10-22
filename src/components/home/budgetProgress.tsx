"use client";  // Add this directive

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBarExample : React.FC = () => {
  const progressItems = [
    { name: 'Sale Of Goods', percentage: 60, time: '1 month later' },
    { name: 'Property Rental', percentage: 70, time: '3 months later' },
    { name: 'Design Services', percentage: 43, time: '1 month later' },
    { name: 'Service', percentage: 10, time: '4 months later' },
  ];
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Budget Progress</h3>
    <ul className="space-y-4">
      <div className=''> 
      {progressItems.map((item, index) => (
        <li key={index} className="flex items-center space-x-6 border shadow-sm mt-4 rounded-md p-4">
          <div className="w-24">
            <CircularProgressbar
              value={item.percentage}
              text={`${item.percentage}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: `#22c55e`,
                textColor: '#22c55e',
                trailColor: '#d1fae5',
              })}
            />
          </div>
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">{item.time}</p>
          </div>
        </li>
      ))}
      </div>
    </ul>
  </div>
  );
};

export default ProgressBarExample;
