import React, { useState } from "react";
import { FaHome, FaChartBar, FaBox, FaClipboardList,  } from "react-icons/fa"; // Import icons
import { RiAdminLine } from "react-icons/ri";
import { MdPeopleAlt,MdProductionQuantityLimits } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";
const Sidebar = ({className,visible}) => {
  const [activeItem, setActiveItem] = useState(""); // State to track the active item

  const menuItems = [
    {
      heading: "Order",
      items: [
       
        { name: "Pending Orders", icon: <MdProductionQuantityLimits /> ,to:'/'},
        { name: "Completed", icon: <MdPeopleAlt /> ,to:'completed-orders' },
       
       
      ],
    },
    {
      heading: "Client",
      items: [
       
        { name: "Products", icon: <MdProductionQuantityLimits /> ,to:'products'},
        { name: "Customers", icon: <MdPeopleAlt /> ,to:'customer' },
        { name: "Transactions", icon: <MdPeopleAlt /> ,to:'transaction' },
       
      ],
    },
    {
        heading: "Sales",
        items: [
            { name: "Overview", icon: <FaHome /> ,to:'overview'},
           { name: "Daily", icon: <FaClipboardList /> ,to:'daily' },
         
        ],
      },
    {
        heading: "Management",
        items: [
         
          { name: "Admin", icon: <RiAdminLine />,to:'admin' },
          { name: "Perforamances", icon: <GoGraph />,to:'performance' },
        
        ],
      },
  ];

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={`" ${className} h-screen w-60 bg-gray-800 text-white"`}>
    
      <div className="p-4">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-200" >E-Commerce</h1>
        <FaCircleArrowLeft className="flex md:hidden ml-14 text-2xl" onClick={()=>visible(false)}/>
        </div>
    
        <br />
      
       <br />
       
        {menuItems.map((menu, index) => (
          
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium text-gray-300 mb-2">
              {menu.heading}
            </h3>
            <ul>
              {menu.items.map((item, idx) => (
                <Link to={item.to}   key={idx}>
                <li
                
                  className={`flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer transition-all ${
                    activeItem === item.name
                      ? "bg-yellow-600 text-white"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() =>{ 
                    handleClick(item.name)  
                    visible(false)}}
               
                >
                  <span className="text-xl">{item.icon}</span>  
                  <span> { item.name }</span>
               
                </li>
                </Link>
              ))}
            </ul>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
