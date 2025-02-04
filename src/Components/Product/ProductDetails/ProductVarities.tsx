import { useFormContext } from '../../Context/Context';
import { datas } from '../../data/ProductInfoData'; 
import Amenities from "./Amenities";
import Location from '../Location/Location';

const ProductVarities = () => {
  const { state, dispatch } = useFormContext();

  const handleClick = ( title: string) => {
    dispatch({
      type: 'MOVEMENT',
      payload: title, // Store the Data of the active item in global state
    });
  };

  return (
    <div className="mt-9">
      {/* Title Buttons */}
      <div className="flex items-center space-x-6 bg-Gray300 p-6 mb-5 text-Gray200 rounded-lg overflow-x-auto">
        {datas.map(({ title, id }) => (
          <div
            key={id}
            className={`cursor-pointer ${
              state.movement === title ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => handleClick( title)}
          >
            <h1 className="text-[12px] font-semibold truncate w-full">{title}</h1>
          </div>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-5">
        {datas.map(({ title, content }) =>
          state.movement === title ? (
            <div>
                <h1 className='font-semibold  text-[20px] mb-5'>{title}</h1>
                <div className="text-sm text-gray-700">
                  {Array.isArray(content) ? (
                    content.map(({ titles, sub }, id) => (
                      <div key={id} className="my-6">
                        <h1 className="text-black font-semibold text-[14px] pb-3">{titles}</h1>
                        <p className="font-[400] text-[14px] max-w-[500px]">{sub}</p>
                      </div>
                    ))
                  ) : (
                    title === 'Amenities' ? <Amenities /> : 
                    title === 'The neighbourhood' ? <Location /> : null
                  )}
                </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProductVarities;
