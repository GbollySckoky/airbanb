import React from 'react';
import { useFormContext } from '../../Context/Context';

const datas = [
  { title: 'Property Features', id: '1', content: 'Details about property features.' },
  { title: 'Amenities', id: '2', content: 'Information about amenities provided.' },
  { title: 'The neighbourhood', id: '3', content: 'Details about the surrounding neighbourhood.' },
  { title: 'Booking policies', id: '4', content: 'Booking rules and cancellation policies.' },
];

const ProductVarities = () => {
  const { state, dispatch } = useFormContext();

  const handleClick = ( title: string) => {
    dispatch({
      type: 'MOVEMENT',
      payload: title, // Store the `id` of the active item in global state
    });
  };

  return (
    <div className="mt-9">
      {/* Title Buttons */}
      <div className="flex items-center space-x-6 bg-Gray300 p-6 mb-5 text-Gray200 rounded-lg">
        {datas.map(({ title, id }) => (
          <div
            key={id}
            className={`cursor-pointer ${
              state.movement === title ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => handleClick( title)}
          >
            <h1 className="text-[12px] font-semibold">{title}</h1>
          </div>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {datas.map(({ title,  id, content }) =>
          state.movement === title ? (
            <p key={id} className="text-sm text-gray-700">
              {content}
            </p>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProductVarities;
