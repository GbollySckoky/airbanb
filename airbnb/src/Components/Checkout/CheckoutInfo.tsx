import Choose from '../Utils/Reusable/Choose';

interface CheckoutInfoProps{
    images: string[];
    title: string;
    space: string[];
    productName: string;
}
const CheckoutInfo = ({images,title,space,productName}: CheckoutInfoProps) => {
  return (
    <div className='bg-red-900 w-full self-start  ml-7  p-4'>
       <div className='flex items-center'>
        {images &&  images.map((image, index) => (
            <div key={index}>
                <img src={image} alt={`image ${index + 1}`} />
            </div>
        ))}
       </div>
       <div className="flex items-center justify-between">
            <h1>{title}</h1>
            <h1 className='font-semibold text-[12px]'>
                {productName}
            </h1>
       </div>
       <div className="flex">
            {space?.map((pace) => (
                <p key={pace}>{pace}</p>
            ))}
       </div>
       <div  className="bg-white shadow-md rounded-lg p-4 mt-6 mb-4 border">
            <h1 className='font-semibold text-[14px] my-3'>
                Price Detail
            </h1>
            <div>
                <Choose 
                    text='Nights'
                    value='Jan 7 – 12, 2025'
                    btnText='Edit'
                />
            </div>
        </div>
    </div>
  )
}

export default CheckoutInfo