import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Booking from "../../Utils/Reusable/Booking"


interface contextProps{
    productDetails: string
    space: string[] | undefined
    productName: string
    rate: string
    id?: number | undefined | string
}

const ProductDetailsContext = ({ productDetails, space, productName, rate, id}: contextProps) => {
    const navigate = useNavigate()
    const [active, setActive] = useState(false)

    const handleDateIn = () => {
        setActive((prev) => !prev);
    };
    
  return (
    <div className="flex justify-between mt-[55px] ">
        <div className="w-full">
            <div className="flex items-center mb-2 justify-between">
                <h1 className='font-semibold text-[20px]'>{productName}</h1>
                <p>{rate}</p>
            </div>
            <div className="flex space-x-3 text-Gray200">
                {space && space.map((pace) => (
                    <p key={pace} className='font-normal text-[14px]'>
                        {pace}
                    </p>
                ))}
            </div>
            <p className='font-normal text-[14px] mt-2 text-Gray200'>
                {productDetails}
            </p>
        </div>
        {/* INFO */}
        <div className="bg-Blue w-full self-start p-4 rounded-lg ml-6">
            <Booking
            title='Check availability' 
            onClick={handleDateIn} 
            text='Check-In'
            selectDate='Select Date'
            checkOut='Check-Out'
            select='Select Date' />
            <div className="pb-[60px]">
                <input 
                    type="text" 
                    placeholder="Add a guest"
                    className="w-full p-2 rounded-lg font-normal outline-none" />
            </div>
            <button 
                onClick={() => navigate(`/checkout/${id}`)}
                className="bg-white block w-full text-center p-1 font-normal text-[14px] text-Black rounded-lg mt-10">
                Book Now
            </button>
            <p className="font-normal text-[10px] text-center pt-2 text-white">You will not be charged yet</p>
        </div>
       
        {/* {active && 1} */}
    </div>
  )
}

export default ProductDetailsContext