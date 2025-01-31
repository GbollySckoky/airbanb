import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductsDetails } from '../../types/types';
import { products } from "../../data/ProductDatas"; 
import ProductDetailsContext from './ProductDetailsContext';
import ProductVarities from './ProductVarities';
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ProductDetailsHero = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState<unknown>(null)
    const {id} = useParams<string>()
    const navigate = useNavigate()
    console.log(id)
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
    console.log('0000',data)
    console.log(products)
    useEffect(() => {
        const product = products.find((product) => product.id === Number(id));
        console.log('899', product);
      try{
        if(product){
          setData(product);
          setIsLoading(false);
        }else{
          throw new Error("couldn't find product check your internet connection")
        }
      }catch(error){
        setIsError(error)
        setIsLoading(false)
      }
    }, [ id ]);
    if(isLoading){
        return(
            <div className='pt-[120px]'>
                <p>isLoading....</p>
            </div>
        )
    }
    if(isError){
        return(
            <div className='pt-[120px]'>
                <p>Check your server</p>
            </div>
        )
    }
  return (
    <div className='pt-[120px] w-[85%] mx-auto'>
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <span className='cursor-pointer' onClick={() => navigate(`/`)}>
            <MdKeyboardArrowLeft size={28} />
          </span>
          <h1 className='font-semibold text-[20px] ml-2'>
            {data?.title}
          </h1>
        </div>
        <div className="flex items-center p-2 border rounded-lg ">
            <span className='mr-2 cursor-pointer'>
              <CiHeart size={24}/>
            </span>
            <p>Add to Wishlist</p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 relative'>
        {data?.images && data.images?.slice(0,5)?.map((image, index) => (
          <div key={image} className="relative">
            <img 
              src={image} 
              alt={data?.title} 
              loading="lazy"
              className='rounded-lg h-[300px] w-full object-cover'
            />
            {index === 4 && (
              <button 
                className='absolute bottom-6 right-4 bg-[#EFEFF080] text-white py-2 px-[30px]'
                onClick={() => navigate(`/product_details/${id}/all_image`)}>
                View all images
              </button>
            )}
          </div>
        ))}
      </div>        
      <ProductDetailsContext
        productDetails={data?.productDetails}
        space={data?.space}
        productName={data?.productName}
        rate={data?.rate}
      />
         <ProductVarities />
    </div>
  )
}

export default ProductDetailsHero