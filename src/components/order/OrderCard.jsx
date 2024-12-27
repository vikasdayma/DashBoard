import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg sm:flex p-4 w-full max-w-3xl mb-4">
    {/* Product Image */}
    <img
      src={order.productImage}
      alt={order.productName}
      className="w-32 h-32 object-cover rounded-md"
    />

    {/* Details Section */}
    <div className="flex flex-col justify-between sm:ml-4  flex-1">
      {/* Customer Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {order.customerName}
        </h3>
        <p className="text-sm text-gray-500">{order.customerEmail}</p>
      </div>

      {/* Product Details */}
      <div>
        <h4 className="text-md font-medium text-gray-800">
          {order.productName}
        </h4>
        <p className="text-sm text-gray-500">Order ID: {order.orderId}</p>
        <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
        <p className="text-sm text-gray-500">Price: ${order.price.toFixed(2)}</p>
      </div>
    </div>

    {/* Actions Section */}
    <div className="flex flex-col justify-between sm:items-end">
      {/* Order Summary */}
      <div>
        <p className="text-sm text-gray-500">
          Order Date: {order.orderDate}
        </p>
        <p className="text-sm text-gray-500">
          Status:{" "}
          <span
            className={`font-medium ${
              order.status === "Confirmed"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {order.status}
          </span>
        </p>
      </div>

      {/* Fulfill Button */}
      <button
        className="bg-blue-600 mt-4 sm:mt-0 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition duration-200"
        onClick={() => alert(`Fulfilling Order ID: ${order.orderId}`)}
      >
        Fulfill Item
      </button>
    </div>
  </div>
  );
};

export default OrderCard