import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowLeft, MdOutlineFavorite } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { products } from "../../data/ProductDatas";
import { ProductsDetails } from '../../types/types';
import ProductDetailsContext from './ProductDetailsContext';
import ProductVarities from './ProductVarities';

const ProductDetailsHero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<unknown>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  const [data, setData] = useState<ProductsDetails>({
    category: '',
    id: 0,
    images: [],
    imagess: [],
    img: '',
    price: 0,
    productDetails: '',
    productName: '',
    title: '',
    rate: '',
    available: '',
    space: [],
    description: ''
  });

  const handleLikeToggle = () => {
    setLike((prevLike) => !prevLike);
  };

  useEffect(() => {
    const product = products.find((product) => product.id === Number(id));
    try {
      if (product) {
        setData(product);
        setIsLoading(false);
      } else {
        throw new Error("Couldn't find product. Please check your connection.");
      }
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className='container mx-auto px-4 pt-24'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(5)].map((_, index) => (
            <Skeleton 
              key={index} 
              variant="rectangular" 
              width="100%" 
              height={300} 
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-red-500'>Unable to load product. Please check your network connection.</p>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 pt-24'>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => navigate('/products')} 
            className="hover:bg-gray-100 rounded-full p-2 transition-colors"
          >
            <MdKeyboardArrowLeft size={28} />
          </button>
          <h1 className='font-semibold text-xl'>
            {data?.title}
          </h1>
        </div>
        <div 
          className="flex items-center space-x-2 border rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-50"
          onClick={handleLikeToggle}
        >
          {like ? (
            <MdOutlineFavorite size={24} />
          ) : (
            <CiHeart size={24} />
          )}
          <p className="text-sm">Add to Wishlist</p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data?.images?.slice(0, 5).map((image, index) => (
          <div key={image} className="relative group">
            <img 
              src={image} 
              alt={data?.title} 
              loading="lazy"
              className='rounded-lg h-[300px] w-full object-cover transition-transform group-hover:scale-105'
            />
            {index === 4 && (
              <button 
                className='absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity'
                onClick={() => navigate(`/product_details/${id}/all_image`)}
              >
                View all images
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Product Details */}
      <ProductDetailsContext
        productDetails={data?.productDetails}
        space={data?.space}
        productName={data?.productName}
        rate={data?.rate}
        id={id}
      />
      
      <ProductVarities />
    </div>
  );
};

export default ProductDetailsHero;