import React from "react";
import { jsPDF } from "jspdf";

const CompletedData = [
  {
    customerName: "John Doe",
    name: "Stellar Watch",
    description: "This is a short description of Product 1.",
    price: 100.0,
    quantity: 2,
    totalPrice: 200.0,
    date: "2024-12-26",
    category: "Electronics",
    sku: "SKU123456",
    orderId: "ORD20241226",
    shippingAddress: {
      street: "123 Main St",
      city: "Indore",
      state: "Madhya Pradesh",
      postalCode: "452001",
      country: "India",
    },
    paymentStatus: "Paid",
    deliveryStatus: "Shipped",
  },
  {
    customerName: "Jane Smith",
    name: "Tscap Shirt",
    description: "This is a short description of Product 2.",
    price: 150.0,
    quantity: 1,
    totalPrice: 150.0,
    date: "2024-12-25",
    category: "Clothing",
    sku: "SKU789101",
    orderId: "ORD20241225",
    shippingAddress: {
      street: "456 Elm St",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
    },
    paymentStatus: "Paid",
    deliveryStatus: "Pending",
  },
  {
    customerName: "Robert Brown",
    name: "Air Jordan Shoes",
    description: "This is a short description of Product 3.",
    price: 200.0,
    quantity: 3,
    totalPrice: 600.0,
    date: "2024-12-24",
    category: "Home Appliances",
    sku: "SKU112233",
    orderId: "ORD20241224",
    shippingAddress: {
      street: "789 Oak St",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560001",
      country: "India",
    },
    paymentStatus: "Unpaid",
    deliveryStatus: "Shipped",
  },

];

const CompletedOrders = () => {
  const generateInvoice = (product) => {
    const {
      customerName,
      name,
      description,
      price,
      quantity,
      totalPrice,
      date,
      category,
      sku,
      orderId,
      shippingAddress,
      paymentStatus,
      deliveryStatus,
    } = product;

    const doc = new jsPDF();

    doc.text(`Invoice for ${name}`, 10, 10);
    doc.text(`Customer Name: ${customerName}`, 10, 20);
    doc.text(`Product Name: ${name}`, 10, 30);
    doc.text(`Description: ${description}`, 10, 40);
    doc.text(`Category: ${category}`, 10, 50);
    doc.text(`SKU: ${sku}`, 10, 60);
    doc.text(`Order ID: ${orderId}`, 10, 70);
    doc.text(`Price: $${price}`, 10, 80);
    doc.text(`Quantity: ${quantity}`, 10, 90);
    doc.text(`Total Price: $${totalPrice}`, 10, 100);
    doc.text(`Date: ${date}`, 10, 110);
    doc.text(`Shipping Address:`, 10, 120);
    doc.text(`${shippingAddress.street}, ${shippingAddress.city}`, 10, 130);
    doc.text(`${shippingAddress.state}, ${shippingAddress.postalCode}`, 10, 140);
    doc.text(`${shippingAddress.country}`, 10, 150);
    doc.text(`Payment Status: ${paymentStatus}`, 10, 160);
    doc.text(`Delivery Status: ${deliveryStatus}`, 10, 170);

    doc.save(`${name}_invoice.pdf`);
  };

  return (
    <div className="space-y-4 flex flex-col items-center sm:flex-none ">
      {CompletedData.map((product, index) => (
        <div key={index} className=" border p-4 rounded-lg shadow-md mb-4 bg-white  flex flex-col sm:flex-row sm:items-center w-80 sm:w-full">
          <div className="flex-none w-full sm:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
            {/* Product image */}
            <img src="https://via.placeholder.com/150" alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 sm:pl-4 mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm ">{product.description}</p>
            <div className="mt-2 text-sm ">Customer: {product.customerName}</div>
            <div className="mt-4 flex items-center">
              <div className="text-lg font-semibold">Price: ${product.price}</div>
              <div className="ml-6 text-lg font-semibold">Quantity: {product.quantity}</div>
            </div>
            
          </div>
          <div className="sm:ml-4 sm:self-center mt-7 sm:mt-0">
            <button
              onClick={() => generateInvoice(product)}
              className="px-4 py-2 bg-blue-500  text-white rounded hover:bg-blue-600 w-full sm:w-auto "
            >
              Download Invoice
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedOrders;
