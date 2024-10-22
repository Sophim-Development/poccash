// components/BarChart.tsx
"use client"; // Add this line to indicate that this is a client component

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// Register the components used in Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const BarChart = () => {
  const amount = '1,800';
  const achievements = 5;
  const years =[2022,2023,2024]
  const data = {
    labels: [2022,2023,2024],
    datasets: [
      {
        label: 'Sales',
        data: [80, 120, 65],
        backgroundColor: [
          'rgba(109,179,63,1)', // Color for 2022
          'rgba(138, 194, 101, 1)', // Color for 2023
          'rgba(167, 209, 140, 1)', // Color for 2024
      ],
      borderWidth: 1,
      },
    ],
  };

const options = {
    indexAxis: 'y' as const, // Set to 'y' for horizontal bar chart
    scales: {
        x: {
            beginAtZero: true,
            max: 120, // Adjust based on your data 
            grid: {
                display: false
            }
        },
        y: {
            display: false, // Hide y-axis labels
        },
    },
    plugins: {
        legend: {
            display: false, // Hide the legend
        },
        title: {
            display: false, // Hide the title
        },
        datalabels: {
            color : 'white' as const,
            align : 'start' as const,
            formatter: (value,context) => {
              const label = context.chart.data.labels[context.dataIndex];
              return `${label}`;
              
            }
        }
    },
};

  return(
    <div className="bg-white p-6 rounded-md shadow space-y-6">
      <div className='space-y-2'>
      <div className='display flex justify-between items-center'>
        <div className='font-semibold text-xl'>Budget Achievement</div>
        <div className='text-sm text-gray-500'>This Week</div>
      </div>
      <div className='text-4xl font-bold text-green-400'>
        ${amount}.<span className='text-gray-200 font-bold'>00</span>
      </div>
      <div className='text-xl text-gray-500'>{achievements} achievements</div>
      </div>
      <Bar data={data} options={options} />
      <div className='flex space-x-6'>
        <div className='flex justify-between items-center space-x-2'>
          <div className='w-2 h-2 bg-green-600 rounded-full '></div>
          <div>2022</div>
        </div>
        <div className='flex justify-between items-center space-x-2'>
          <div className='w-2 h-2 bg-green-600 rounded-full '></div>
          <div>2023</div>
        </div>
        <div className='flex justify-between items-center space-x-2'>
          <div className='w-2 h-2 bg-green-600 rounded-full '></div>
          <div>2024</div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
