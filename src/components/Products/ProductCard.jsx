import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ item }) => {
  const rating = 4; 

  return (
    <div className=" w-4/5 lg:w-72  overflow-hidden shadow-md hover:shadow-lg transition-all mt-10 bg text-white bg-gray-800 ">
    
      <div className=" py-2 px-4">
        <h4 className="text-sm font-bold  uppercase">{item.category}</h4>
      </div>

      <div className="p-4">
       
        <h3 className="text-sm font-semibold ">{item.title}</h3>

        
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${index < rating ? 'text-yellow-300' : 'text-gray-300'}`}
            />
          ))}
        </div>
         
       
    
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-bold ">${item.price}</span>
        </div>
        <h3 className="text-sm font-semibold ">{item.description}</h3>
   
        <br />
        <button className=" py-1 font-semibold rounded  transition bg-blue-700 px-2 ">
          See More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
