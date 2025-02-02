import { products } from '../../data/ProductDatas';
import { useParams, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";

const AllImages = () => {
    // Changed type to ProductsDetails[] since products is an array of ProductsDetails
    const {id} = useParams()
    const findIdProduct = products.find((product) => product?.id === Number(id))
    console.log(findIdProduct);
    const navigate = useNavigate()
    return (
        <div className="py-[120px] w-[85%] mx-auto">
            <div className="flex items-center pb-5">
                <span className='cursor-pointer w-full' onClick={() => navigate(`/product_details/${id}`)}>
                    <MdKeyboardArrowLeft size={28} />
                </span>
                <h1 className=' w-full text-2xl font-medium'>View all images</h1>
            </div>
            <div className='grid grid-cols-3 gap-4 '>
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
        </div>
    )
};

export default AllImages;