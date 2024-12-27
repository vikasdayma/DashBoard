import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
const Profile = () => {
  const [isOpen,setOpen]=useState(false);
  return (
    <div className="relative hidden md:flex justify-end items-center  " >
    <button
    //   onClick={() => setIsOpen(!isOpen)}
      className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold hover:bg-indigo-700 transition-colors"
    >
      {/* {getInitials(user.name)} */}
      VD
    </button>
    <div className='ml-3'>
    <h1 className='text-sm font-bold'>Vikas</h1>
    <h1 className='text-xs font-medium text-green-700'>Pharmacist </h1>
    </div>
 { !isOpen ?
<FaAngleDown className='ml-3' onClick={()=>setOpen(!isOpen)}/>
:
<FaAngleRight className='ml-3' onClick={()=>setOpen(!isOpen)}/>
}

{
    isOpen && 
    <div className='absolute bg-white -bottom-10 h-8 w-28 text-center flex justify-center items-center'>
    <IoIosLogOut className='font-medium'/>
    <button className='ml-2'>Logout</button>
    </div>
}
  </div>
  )
}

export default Profile
