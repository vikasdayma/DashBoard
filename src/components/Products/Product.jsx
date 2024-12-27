import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { CircularProgress } from '@mui/material';
import {productData} from '../constant'
const Product = () => {
const [product,setProduct]=useState(productData);
// useEffect(()=>{
//     fetch('https://fakestoreapi.com/products/')
//             .then(res=>res.json())
//             .then(json=>setProduct(json));
// })


const [loader,setLoader]=useState(true);
setTimeout(() => {
  setLoader(false);
}, 1000);

  return (
  <>
  {loader ? <div className='flex justify-center items-center h-screen'> <CircularProgress  /></div> :
  <div className='grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center'>
  {
    

    product.map((item,index)=>{
    return <ProductCard item={item} key={item.id}/>

  
    })
  
  
  }
</div>
}
  </>
  )
}

export default Product
