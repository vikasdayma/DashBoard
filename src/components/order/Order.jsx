import React from "react";
import OrderCard from "./OrderCard";
const Order = () => {

    const orders = [
        {
          customerName: "John Doe",
          customerEmail: "johndoe@example.com",
          productImage: "https://via.placeholder.com/150",
          productName: "Classic Blue Denim Jacket",
          orderId: "12345",
          quantity: 2,
          price: 120.0,
          orderDate: "25th Dec 2024",
          status: "Paid", // Updated status
        },
        {
          customerName: "Jane Smith",
          customerEmail: "janesmith@example.com",
          productImage: "https://via.placeholder.com/150",
          productName: "Elegant Red Dress",
          orderId: "67890",
          quantity: 1,
          price: 80.0,
          orderDate: "24th Dec 2024",
          status: "Pending", // Updated status
        },
        {
          customerName: "Mark Johnson",
          customerEmail: "markj@example.com",
          productImage: "https://via.placeholder.com/150",
          productName: "Black Leather Jacket",
          orderId: "11111",
          quantity: 1,
          price: 150.0,
          orderDate: "22nd Dec 2024",
          status: "Paid", // Updated status
        },
        {
          customerName: "Alice Brown",
          customerEmail: "aliceb@example.com",
          productImage: "https://via.placeholder.com/150",
          productName: "White Cotton Shirt",
          orderId: "22222",
          quantity: 3,
          price: 60.0,
          orderDate: "21st Dec 2024",
          status: "Paid", // Updated status
        },
        {
          customerName: "Robert White",
          customerEmail: "robertw@example.com",
          productImage: "https://via.placeholder.com/150",
          productName: "Grey Woolen Sweater",
          orderId: "33333",
          quantity: 2,
          price: 95.0,
          orderDate: "20th Dec 2024",
          status: "Pending", // Updated status
        },
        {
          customerName: "Sophia Green",
          customerEmail: "sophiag@example.com",
          productImage: "https://via.placeholder.com/150",
          productName: "Blue Silk Scarf",
          orderId: "44444",
          quantity: 1,
          price: 45.0,
          orderDate: "19th Dec 2024",
          status: "Paid", // Updated status
        },
        {
          customerName: "James Lee",
          customerEmail: "jamesl@example.com",
          productImage: "https://via.placeholder.com/150",
          productName: "Red Floral Dress",
          orderId: "55555",
          quantity: 1,
          price: 100.0,
          orderDate: "18th Dec 2024",
          status: "Pending", // Updated status
        },
        {
          customerName: "Emily Davis",
          customerEmail: "emilyd@example.com",
          productImage: "https://via.placeholder.com/150",
          productName: "Black High Heels",
          orderId: "66666",
          quantity: 2,
          price: 50.0,
          orderDate: "17th Dec 2024",
          status: "Paid", // Updated status
        },
      ];
      
      
      
  
    return (
      <div className="p-4 flex flex-wrap gap-4 flex-col items-center justify-center">
        {orders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))}
      </div>
    );
  };
  
  export default Order;