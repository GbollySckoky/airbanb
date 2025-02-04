

interface BookingProps{
    title: string
    onClick: () => void
    text: string
    selectDate: string
    checkOut: string
    select: string

}
const Booking = ({title, onClick, text,selectDate,checkOut,select}: BookingProps) => {
  return (
    <div>
        <p className="font-medium text-[14px] text-white mb-5">
            {title}
        </p>
        <div className="flex justify-between mb-5 text-center">
            <div 
                className="bg-white rounded-lg pb-2 cursor-pointer"
                onClick={onClick}>
                <p className="font-[400] text-[12px] text-Black pb-2 px-7 py-2">{text}</p>
                <p className="font-[400] text-[10px] text-Gray200">{selectDate}</p>
            </div>
            <div>
                p
            </div>
            <div className="bg-white rounded-lg pb-2">
                <p className="font-[400] text-[12px] text-Black pb-2 px-7 py-2">{checkOut}</p>
                <p className="font-[400] text-[10px] text-Gray200">{select}</p>
            </div>
        </div>
        {/* <div className="pb-[60px]">
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
        <p className="font-normal text-[10px] text-center pt-2 text-white">You will not be charged yet</p> */}
    </div>
  )
}

export default Booking