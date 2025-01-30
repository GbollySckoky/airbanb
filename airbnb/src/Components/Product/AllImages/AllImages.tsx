import React, { useEffect, useState } from 'react';
import { products } from '../../data/ProductDatas';
import { ProductsDetails } from '../../types/types';
import { useParams } from 'react-router-dom';

const AllImages = () => {
    // Changed type to ProductsDetails[] since products is an array of ProductsDetails
    const [images, setImages] = useState<ProductsDetails[]>([]); 
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams()
    useEffect(() => {
        try {
            if (products) {
                setImages(products); // Set the entire products array
            } else {
                console.error('No products found');
            }
        } catch (error) {
            console.error('Error loading products:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const findIdProduct = products.find((product) => product?.id === Number(id))
    console.log(findIdProduct);
    return (
        <div className='grid grid-cols-3 gap-4 relative'>
            {findIdProduct?.imagess && findIdProduct?.imagess.map((image, index) => (
                <img
                    src={image} 
                    alt={`image ${index + 1}`}
                    loading="lazy"
                    className='rounded-lg h-[300px] w-full object-cover'
                    key={index}
                />
            ))}
        </div>
           
    )
};

export default AllImages;