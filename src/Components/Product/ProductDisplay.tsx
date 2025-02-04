import React, { useEffect, useState } from 'react';
import { MdOutlineStar } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { ProductDisplayProps } from '../types/types';
import Skeleton from '@mui/material/Skeleton';

const ProductDisplay: React.FC<ProductDisplayProps> = ({products}:any) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<unknown>(null)

  useEffect(() => {
    try{
      if( products){
        setIsLoading(false);
      }else{
        throw new Error("couldn't find product check your internet connection")
      }
    }catch(error){
      setIsError(error)
      setIsLoading(false)
  }
},[products]);

if (isLoading) {
  return (
    <div className=' w-[85%] mx-auto'>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <Skeleton 
            key={index} 
            variant="rectangular" 
            width="100%" 
            height={300} 
          />
        ))}
      </div>
    </div>
  );
}

if(isError){
    return(
        <div className='flex items-center justify-center min-h-screen'>
            <p>Kindly check your network server</p>
        </div>
    )
}

  return (
    <div>
      <div className='grid grid-cols-4 mt-9 gap-4'>
        {products && products.map((product:any, index:any) => (
          <div key={index} >
            <img 
              src={product?.img} 
              className='rounded-lg h-[300px] w-full'
              alt={`product ${index + 1}`} 
            />
            <div 
              onClick={() => navigate(`/product_details/${product?.id}`)}
              className='cursor-pointer'>
              <div className="flex items-center justify-between mt-7">
                <p className='font-semibold text-[14px]'>{product?.productName}</p>
                <div className='flex items-center'>
                  <span className='pr-1 text-Gold'>
                    <MdOutlineStar />
                  </span>
                  <p className='font-nnormal text-[12px] '>{product?.rate}</p>
                </div>
              </div>
              <p className='font-nnormal text-[12px] text-Gray100 mt-5'>{product?.productDetails}</p>
              <p className='font-semibold text-[14px] mt-4'>&#x20A6;{product?.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
