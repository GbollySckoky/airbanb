
interface contextProps{
    productDetails: string
    space: string[] | undefined
    productName: string
    rate: string
}

const ProductDetailsContext = ({ productDetails, space, productName, rate}: contextProps) => {
  return (
    <div className="flex justify-between mt-[55px] ">
        <div className="w-full">
            <div className="flex items-center mb-2 justify-between">
                <h1 className='font-semibold text-[20px]'>{productName}</h1>
                <p>{rate}</p>
            </div>
            <div className="flex space-x-3 text-[#575757]">
                {space && space.map((pace) => (
                    <p key={pace} className='font-normal text-[14px]'>
                        {pace}
                    </p>
                ))}
            </div>
            <p className='font-normal text-[14px] mt-2 text-[#575757]'>
                {productDetails}
            </p>
        </div>
        {/* INFO */}
        <div className="bg-Blue w-full self-start p-4 rounded-lg ml-6">
            <p className="font-medium text-[14px] text-white mb-5">
                Check availability
            </p>
            <div className="flex justify-between mb-5 text-center">
                <div className="bg-white rounded-lg pb-2">
                    <p className="font-[400] text-[12px] text-Black pb-2 px-7 py-2">Check-In</p>
                    <p className="font-[400] text-[10px] text-[#575757]">Select Date</p>
                </div>
                <div>
                    p
                </div>
                <div className="bg-white rounded-lg pb-2">
                    <p className="font-[400] text-[12px] text-Black pb-2 px-7 py-2">Check-Out</p>
                    <p className="font-[400] text-[10px] text-[#575757]">Select Date</p>
                </div>
            </div>
            <div className="pb-[60px]">
                <select
                    className="block w-full p-2 rounded-lg font-normal text-[12px] pl-7 ">
                    <option 
                        value="Add guest">
                        Add guest
                    </option>
                </select>
            </div>
            <button 
                className="bg-white block w-full text-center p-1 font-normal text-[14px] text-Black rounded-lg mt-10">
                Book Now
            </button>
        </div>
    </div>
  )
}

export default ProductDetailsContext