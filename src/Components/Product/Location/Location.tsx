import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Input from '../../Utils/Reusable/Input'
import { LocationInput } from './LocationInputInfo';
import { useFormContext } from '../../Context/Context';

const Location = () => {
  const { address, state: stateInput, city, country, apt, zip } = LocationInput;
  const { state, dispatch } = useFormContext();

  const handleAddressEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'ADDRESS',
      payload: event.target.value
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <span>
          <CiLocationOn />
        </span>
        <span className='ml-3'>
          Address Selection
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input 
          {...address}
          name="address"
          value={state.address || ''}
          onChange={handleAddressEvent}
        />
        
        <Input 
          {...stateInput}
          name="state"
          value={state.state || ''}
          onChange={(event) => dispatch({
            type: 'STATE',
            payload: event.target.value
          })}
        />
        
        <Input 
          {...country}
          name="country"
          value={state.country || ''}
          onChange={(event) => dispatch({
            type: 'COUNTRY',
            payload: event.target.value
          })}
        />
        
        <Input 
          {...apt}
          name="apt"
          value={state.province || ''}
          onChange={(event) => dispatch({
            type: 'APTITUDE',
            payload: event.target.value
          })}
        />
        
        <Input 
          {...zip}
          name="zip"
          value={state.province || ''}
          onChange={(event) => dispatch({
            type: 'PROVINCE',
            payload: event.target.value
          })}
        />

         <Input 
          {...city}
          name="zip"
          value={state.city || ''}
          onChange={(event) => dispatch({
            type: 'CITY',
            payload: event.target.value
          })}
        />
      </div>
    </div>
  )
}

export default Location