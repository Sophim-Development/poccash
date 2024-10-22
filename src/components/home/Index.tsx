interface BalanceCardProps {
    title: string;
    amount: number;
    change: number;
  }
  
  const BalanceCard: React.FC<BalanceCardProps> = ({ title, amount, change }) => {
    return (
      <div className="bg-white p-6 rounded-md shadow">
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-3xl font-bold">${amount.toFixed(2)}</p>
        <p className="text-sm text-green-500">+{change}% from last month</p>
      </div>
    );
  };
  
  export default BalanceCard;
  