import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Customer from '../Customer';
import Product from '../Products/Product';
import Transaction from '../Transaction';
import OverView from '../overview/OverView';
import Order from '../order/Order';
import CompletedOrders from '../order/CompletedOrders';
import Profile from '../Profile';
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  const [isVisible,setVisible]=useState(false);
  return (
    <div className="flex relative ">
    
      <Sidebar className=" hidden md:flex sticky  h-screen  overflow-y-scroll top-0 w-64 bg-gray-800 text-white" visible={setVisible}/>
      <GiHamburgerMenu  className='absolute flex md:hidden text-2xl  ml-2 mt-8'  onClick={()=>setVisible(!isVisible)} />
    
      {
        isVisible &&
        <Sidebar className=" flex md:hidden absolute  h-screen  overflow-y-scroll top-0 w-64 bg-gray-800 text-white" visible={setVisible} />
      }
      <div className="flex-1 p-6 overflow-auto">
        
        {/* <Profile/> */}
        <br />
        <br />
        <Routes>
         <Route path="/" element={<Order />} />
         <Route path="completed-orders" element={<CompletedOrders/>} />
          <Route path="customer" element={<Customer />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="products" element={<Product />} />
          <Route path="overview" element={<OverView />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
