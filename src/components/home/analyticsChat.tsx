// Add this at the top
"use client";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useRef } from 'react';


// Register the necessary components for chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AnalyticsChart: React.FC = () => {
  const chartRef = useRef(null); // Example of using useRef

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: '',
            data: [10,15, 40, 60, 20, 10, 25, 80, 80, 45, 30, 120], // Example data
            fill: true,
            borderColor: '#4ADE80',
            backgroundColor: '#4ADE80',
            tension: 0.4, // Smooth line
        },
    ],
};

const options = {
    responsive: true,
    label : false,
    plugins: {
        legend: {
            display: false,
            position: 'top' as const,
        },
        tooltip: {
            enabled : false,
        },
        datalabels:{
          display : false
        }
    },
    scales: {
        x: {
            grid:{
              display : false
            }
        },
        y: {
            beginAtZero: true,
            max : 140,
            grid :{
              display : false
            },
            ticks: {
                callback: function (value, index, ticks) {
                    return  value + "K";
                }
            }
        },
    },
};

return(
  <div className='bg-white p-6 rounded-md shadow'>
      <div className='flex justify-end space-x-6'>
        <div className="w-full max-w-[200px]">
            <select
                id="options"
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
                <option value="">Total Earning</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M5.4 7l4.6 4.6L15.6 7l-1.4-1.4L10 10.6 6.8 5.6 5.4 7z" />
                </svg>
            </div>
        </div>
        <div className="w-full max-w-[140px]">
            <select
                id="options"
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
                <option value="">Monthly</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M5.4 7l4.6 4.6L15.6 7l-1.4-1.4L10 10.6 6.8 5.6 5.4 7z" />
                </svg>
            </div>
        </div>
      </div>
      <Line data={data} options={options} />
  </div>
) 

};

export default AnalyticsChart;
