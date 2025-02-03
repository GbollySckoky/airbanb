import { datas } from './CheckoutInputData'
import Input from '../../Components/Utils/Reusable/Input'
import { useEffect, useState} from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import CheckoutInfo from './CheckoutInfo';
import Choose from '../Utils/Reusable/Choose';
import { useParams,  useNavigate } from 'react-router-dom';
import { products } from '../data/ProductDatas';
import { Products } from '../types/types';
const Checkout = () => {
    const {firstName,lastName,email,phoneNumber} = datas
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState<unknown>(null)
    const [inputValue, setInputValue] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:''
    })
    const {id} = useParams()
    const navigate = useNavigate()
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const findData = products.find((product: Products) => product.id === Number(id));
    useEffect(() => {
      try{
        if(findData){;
          setIsLoading(false);
        }else{
          throw new Error("couldn't find product check your internet connection")
        }
      }catch(error){
        setIsError(error)
        setIsLoading(false)
      }
    }, [ id ]);
    const LoadingSpinner = () => (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-8 h-8 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
        );
    if(isLoading){
        return( 
            LoadingSpinner()
        )
    }
    if(isError){
        return(
            <div className='flex items-center justify-center min-h-screen'>
                <p>Kindly check your network server</p>
            </div>
        )
    }

   return (
    <div className='py-[120px]'>
        <div className='flex mb-8 w-[90%] mx-auto'>
            <span className='cursor-pointer' 
                onClick={() => navigate(`/product_details/${id}`)}
            >
                <MdKeyboardArrowLeft size={23} />
            </span>
            <p className='font-[400] text-[14px] ml-2'>Booking Reservation</p>
        </div>
        <div className='w-[80%] mx-auto mt-8'>
            <h1 className='font-semibold text-[16px] my-5'>Begin your booking</h1>
            <div className="flex">
                <div className='w-full'>
                    <div className="bg-white shadow-md border rounded-lg p-4">
                        <h1 className='font-semibold text-[14px] my-3'>
                            Enter contact information
                        </h1>
                        <div className="grid grid-cols-2 gap-3 pb-5">
                            <Input
                            {...firstName}
                            name='firstName'
                            value={inputValue.firstName}
                            onChange={handleChange}/>
                            <Input
                            {...lastName}
                            name='lastName'
                            value={inputValue.lastName}
                            onChange={handleChange}/>
                            <Input
                            {...email}
                            name='email'
                            value={inputValue.email}
                            onChange={handleChange}/>
                            <Input
                            {...phoneNumber}
                            name='phoneNumber'
                            value={inputValue.phoneNumber}
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div  className="bg-white shadow-md rounded-lg p-4 mt-6 mb-4 border">
                        <h1 className='font-semibold text-[14px] my-3'>
                            Choose how to pay
                        </h1>
                        <div>
                            <Choose 
                                text='Dates'
                                value='Jan 7 – 12, 2025'
                                btnText='Edit'
                            />
                            <Choose 
                                text='Guest'
                                value='Jan 7 – 12, 2025'
                                btnText='Edit'
                            />
                        </div>
                    </div>
                    <button 
                        className='bg-Blue px-5 rounded-lg py-2 text-white text-center w-full text-[12px] font-medium my-2'>
                        Agree and Request booking
                    </button>
                    <p
                    className='font-normal text-[10px] text-center'>
                        By clicking 'Agree & continue' you are agreeing to our Terms and Conditions, 
                        Privacy Policy, and to
                        receive booking-related texts. Standard messaging rates may apply.
                    </p>
                </div>
                <CheckoutInfo
                images={findData?.images || []}
                space={findData?.space || []}
                productName={findData?.productName || ''}
                title={findData?.title || ''} 
                isLoading={isLoading}/>
            </div>
        </div>
    </div>
  )
}

export default Checkout