
interface ChooseProps{
    value: string
    text: string
    btnText: string
}
const Choose = ({value,text,btnText}: ChooseProps) => {
  return (
    <div>
        <div className="flex items-center justify-between">
            <div className='mb-3'>
                <h1 className='font-semibold text-[12px]'>{text}</h1>
                <p className='font-normal text-[10px] mt-2'>{value}</p>
            </div>
            <button className='border px-5 rounded-lg font-medium text-[12px] py-1'>
                {btnText}
            </button>
        </div>
        {/* <div className="flex items-center justify-between">
            <div className='mb-3'>
                <h1 className='font-semibold text-[12px]'>Guest</h1>
                <p className='font-normal text-[10px] mt-2'>Jan 7 – 12, 2025</p>
            </div>
            <button className='border px-5 rounded-lg font-medium text-[12px] py-1'>
                Edit
            </button>
        </div> */}
    </div>
  )
}

export default Choose