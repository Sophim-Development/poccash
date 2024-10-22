import React from 'react';
import BalanceCard from '../components/home/Index';
import AnalyticsChart from '../components/home/analyticsChat';
import TransactionTable from '../components/home/transactionList';
import ExpenditureSummary from '../components/home/expenditureSummary';
import ProgressBarExample from '../components/home/budgetProgress';
import BudgetAchievement from '../components/home/budgetAchievement';
const Home = () => {
  return (
    <div className="">
        <header className='flex justify-between items-center p-4'>
          <h2 className="lg:text-2xl text-xl font-bold">My Dashboard</h2>
          <div className='flex space-x-4'>
            <div>
            <input type="text" placeholder='Search for transactions'
            className='border border-gray-300 rounded-md p-2 w-full' />
            </div>
            <div className='border border-gray-300 rounded-md p-2'>Date</div>
            <div>
              <button className='bg-green-500 text-white px-4 py-2 rounded-md'>This Month</button>
            </div>
          </div>
        </header>
        <div className='grid grid-cols-4 gap-6'>
          <div className='col-span-3 space-y-6'>
            {/* Card balance */}
            <div className="grid grid-cols-4 gap-6">
              <BalanceCard title="Total Balance" amount={5000.00} change={12.2} />
              <BalanceCard title="Income" amount={3500.00} change={5.4} />
              <BalanceCard title="Expend" amount={1800.00} change={2.1} />
              <BalanceCard title="Budget Saving" amount={1200.00} change={3.5} />
            </div>
            {/* Analytics Report */}
            <div>
              <AnalyticsChart />
            </div>
            {/* Recent Transactions */}
            <div className=''>
              <TransactionTable  />
            </div>
            {/* Sidebar right */}
          </div>
          <div className='space-y-6'>
            <div>
              <ExpenditureSummary />
            </div>
            <div>
              <ProgressBarExample />         
            </div>
            {/* Bar Chart */}
            <div>
              <BudgetAchievement/>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Home;