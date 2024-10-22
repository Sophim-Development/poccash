import React from 'react';

const transactions = [
  {
    transaction: 'Payment from Bonnie Green',
    date: 'Apr 23, 2021',
    amount: '$2300',
    status: 'Completed',
    statusClass: 'text-green-700 bg-green-100',
  },
  {
    transaction: 'Payment refund to #00910',
    date: 'Apr 23, 2021',
    amount: '-$670',
    status: 'Completed',
    statusClass: 'text-green-700 bg-green-100',
  },
  {
    transaction: 'Payment failed from #087651',
    date: 'Apr 18, 2021',
    amount: '$234',
    status: 'Cancelled',
    statusClass: 'text-red-700 bg-red-100',
  },
  {
    transaction: 'Payment from Lana Byrd',
    date: 'Apr 15, 2021',
    amount: '$5000',
    status: 'In progress',
    statusClass: 'text-purple-700 bg-purple-100',
  },
  {
    transaction: 'Payment from Jese Leos',
    date: 'Apr 15, 2021',
    amount: '$2300',
    status: 'Completed',
    statusClass: 'text-green-700 bg-green-100',
  },
  {
    transaction: 'Payment from THEMSBERG LLC',
    date: 'Apr 11, 2021',
    amount: '$560',
    status: 'Completed',
    statusClass: 'text-green-700 bg-green-100',
  },
];

const TransactionTable: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="">
        <h2 className="text-xl font-semibold">Recent Transaction</h2>
        <div className="flex justify-between mt-6">
          <button className="text-sm px-3 py-1 border rounded-lg">
            Last 30 days
          </button>
          <input
            type="search"
            placeholder="Search"
            className="border px-3 py-1 rounded-lg"
          />
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className='p-4 text-left'><input type="checkbox" /></th>
              <th className="p-4 text-left">Transaction</th>
              <th className="p-4 text-left">Date & Time</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className='p-4'><input type="checkbox" /></td>
                <td className="p-4">{item.transaction}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4">{item.amount}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${item.statusClass}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm">Showing 1-10 of 1000</p>
        <div className="flex space-x-1">
          <button className="px-2 py-1 border rounded">1</button>
          <button className="px-2 py-1 border rounded bg-blue-100">2</button>
          <button className="px-2 py-1 border rounded">3</button>
          <button className="px-2 py-1 border rounded">...</button>
          <button className="px-2 py-1 border rounded">100</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
