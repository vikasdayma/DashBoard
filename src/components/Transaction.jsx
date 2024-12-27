import React from "react";

const Transaction = () => {
  const transactions = [
    {
      id: 1,
      date: "2024-12-01",
      amount: "$120.00",
      method: "Credit Card",
      transactionId: "UI23142312",
    },
    {
      id: 2,
      date: "2024-12-02",
      amount: "$250.00",
      method: "PayPal",
      transactionId: "UI23142313",
    },
    {
      id: 3,
      date: "2024-12-03",
      amount: "$75.00",
      method: "Bank Transfer",
      transactionId: "UI23142314",
    },
    {
      id: 4,
      date: "2024-12-04",
      amount: "$500.00",
      method: "UPI",
      transactionId: "UI23142315",
    },
    {
      id: 5,
      date: "2024-12-05",
      amount: "$30.00",
      method: "Cash",
      transactionId: "UI23142316",
    },
    {
      id: 6,
      date: "2024-12-06",
      amount: "$45.00",
      method: "Credit Card",
      transactionId: "UI23142317",
    },
    {
      id: 7,
      date: "2024-12-07",
      amount: "$300.00",
      method: "Debit Card",
      transactionId: "UI23142318",
    },
    {
      id: 8,
      date: "2024-12-08",
      amount: "$99.00",
      method: "PayPal",
      transactionId: "UI23142319",
    },
    {
      id: 9,
      date: "2024-12-09",
      amount: "$220.00",
      method: "Bank Transfer",
      transactionId: "UI23142320",
    },
    {
      id: 10,
      date: "2024-12-10",
      amount: "$400.00",
      method: "Credit Card",
      transactionId: "UI23142321",
    },
    {
      id: 11,
      date: "2024-12-11",
      amount: "$150.00",
      method: "Cash",
      transactionId: "UI23142322",
    },
    {
      id: 12,
      date: "2024-12-12",
      amount: "$180.00",
      method: "UPI",
      transactionId: "UI23142323",
    },
    {
      id: 13,
      date: "2024-12-13",
      amount: "$75.00",
      method: "Credit Card",
      transactionId: "UI23142324",
    },
    {
      id: 14,
      date: "2024-12-14",
      amount: "$500.00",
      method: "PayPal",
      transactionId: "UI23142325",
    },
  ];
  
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Table</h1>
      <table className="min-w-full border-collapse border border-black">
        <thead>
          <tr className="bg-gray-200">
          <th className="border border-black px-4 py-2">S.no</th>
            <th className="border border-black px-4 py-2">Transaction ID</th>
            <th className="border border-black px-4 py-2">Date</th>
            <th className="border border-black px-4 py-2">Amount</th>
            {/* <th className="border border-black px-4 py-2">Payment Method</th> */}
        
            <th className="border border-black px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-200">
               <td className="border border-black px-4 py-2 text-center">{transaction.id}</td>
              <td className="border border-black px-4 py-2 text-center">{transaction.transactionId}</td>
              <td className="border border-black px-4 py-2 text-center">{transaction.date}</td>
              <td className="border border-black px-4 py-2 text-center">{transaction.amount}</td>
              <td className="border border-black px-4 py-2 text-center">{transaction.method}</td>
              
              {/* <td className="border border-black px-4 py-2 text-center">
                <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
                  Details
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;


