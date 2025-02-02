import { datas } from './CheckoutInputData'
import Input from '../../Components/Utils/Reusable/Input'
import { useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import CheckoutInfo from './CheckoutInfo';
import Choose from '../Utils/Reusable/Choose';

const Checkout = () => {
    const {firstName,lastName,email,phoneNumber} = datas
    const [inputValue, setInputValue] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:''
    })
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }
   return (
    <div className='pt-[120px] w-[85%] mx-auto'>
        <div className='flex mb-5'>
            <span className='cursor-pointer' 
                // onClick={() => navigate(`/`)}
            >
                <MdKeyboardArrowLeft size={23} />
            </span>
            <p className='font-[400] text-[14px] ml-2'>Booking Reservation</p>
        </div>
        <h1 className='font-semibold text-[20px]'>Begin your booking</h1>
        <div className="flex">
            <div>
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
            <CheckoutInfo />
        </div>
    </div>
  )
}

export default Checkout