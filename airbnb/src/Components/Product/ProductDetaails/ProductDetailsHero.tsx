import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ProductsDetails } from '../../types/types';
import { products } from "../../data/ProductDatas"; 
import ProductDetailsContext from './ProductDetailsContext';

const ProductDetailsHero = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState<unknown>(null)
    const {id} = useParams<string>()
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
  return (
    <div className='pt-[120px] w-[80%] mx-auto'>
        <h1 className='font-semibold text-[20px] mb-4'>{data?.title}</h1>
        <div className='grid grid-cols-3 gap-4'>
            {data?.images && data.images.map((image) => (
                <div key={image} >
                    <img 
                        src={image} 
                        alt={``} 
                        loading="lazy"/>
                </div>
            ))}
        </div>
        <ProductDetailsContext
            productDetails={data?.productDetails}
            space={data?.space}
            productName={data?.productName}
            rate={data?.rate}
         />
    </div>
  )
}

export default ProductDetailsHero