import React, { createContext, ReactNode, useContext, useReducer } from 'react'
import { Action, countData } from '../types/types'
import { Reducer } from '../Reducer/Reducer'
const initialCountData: countData = {
    movement: ''
}

export interface Count{
    state: countData
    dispatch: React.Dispatch<Action>
}

// Creating the context
export const countContext = createContext<Count>(
    {} as Count
)
export const useFormContext = () => {
    const context = useContext(countContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};

interface childrenProps {
    children: ReactNode
}

// Form provider component
export const Context = ({ children }: childrenProps) => {
    const [state, dispatch] = useReducer(Reducer, initialCountData);

    return (
        <countContext.Provider value={{ state, dispatch }}>
            {children}
        </countContext.Provider>
    );
};

export default Context