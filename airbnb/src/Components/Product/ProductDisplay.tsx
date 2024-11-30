import React from 'react';
import { MdOutlineStar } from "react-icons/md";

type products = {
  category: string;
    id: number;
    images: string[];
    img: string;
    price: number;
    productDetails: string;
    productName: string;
    rate: string;
}

interface ProductDisplayProps {
  products: products[];
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({products}:any) => {
  return (
    <div>
      <div className='grid grid-cols-4 mt-9 gap-4'>
        {products && products.map((product:any, index:any) => (
          <div key={index} >
            <img 
              src={product?.img} 
              className='rounded-lg h-[300px] w-full'
              alt={product?.productName} 
            />
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
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
