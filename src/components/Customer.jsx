import React from "react";

const Customer = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      createdAt: "2024-12-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      createdAt: "2024-12-02",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      phone: "555-123-4567",
      createdAt: "2024-12-03",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emilydavis@example.com",
      phone: "111-222-3333",
      createdAt: "2024-12-04",
    },
    {
      id: 5,
      name: "Chris Wilson",
      email: "chriswilson@example.com",
      phone: "444-555-6666",
      createdAt: "2024-12-05",
    },
    {
      id: 6,
      name: "Sarah Brown",
      email: "sarahbrown@example.com",
      phone: "777-888-9999",
      createdAt: "2024-12-06",
    },
    {
      id: 7,
      name: "David Lee",
      email: "davidlee@example.com",
      phone: "333-444-5555",
      createdAt: "2024-12-07",
    },
    {
      id: 8,
      name: "Sophia Garcia",
      email: "sophiagarcia@example.com",
      phone: "666-777-8888",
      createdAt: "2024-12-08",
    },
    {
      id: 9,
      name: "James Martinez",
      email: "jamesmartinez@example.com",
      phone: "999-000-1111",
      createdAt: "2024-12-09",
    },
    {
      id: 10,
      name: "Olivia Taylor",
      email: "oliviataylor@example.com",
      phone: "222-333-4444",
      createdAt: "2024-12-10",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Table</h1>
      <table className="min-w-full border-collapse border border-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-4 py-2">Customer ID</th>
            <th className="border border-black px-4 py-2">Name</th>
            <th className="border border-black px-4 py-2">Email</th>
            <th className="border border-black px-4 py-2">Phone</th>
            <th className="border border-black px-4 py-2">Created At</th>
            <th className="border border-black px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="border border-black px-4 py-2 text-center">{customer.id}</td>
              <td className="border border-black px-4 py-2">{customer.name}</td>
              <td className="border border-black px-4 py-2">{customer.email}</td>
              <td className="border border-black px-4 py-2">{customer.phone}</td>
              <td className="border border-black px-4 py-2 text-center">{customer.createdAt}</td>
              <td className="border border-black px-4 py-2 text-center">
                <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
                  View 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
