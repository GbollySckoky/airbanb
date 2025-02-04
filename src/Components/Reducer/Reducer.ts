import { Action, countData } from "../types/types";

export const Reducer = (state: countData, action: Action) => {
    switch(action.type){
        case 'MOVEMENT':
            return {
                ...state,
                movement: action.payload
            };
        case 'ADDRESS':
            return {
                ...state,
               address: action.payload
            };
        case 'COUNTRY':
            return {
                ...state,
                country: action.payload
            };
        case 'CITY':
            return {
                ...state,
                city: action.payload
            };
        case 'STATE':
            return {
                ...state,
                state: action.payload
            };
        case 'PROVINCE':
            return {
                ...state,
                province: action.payload
            };
        case 'APTITUDE':
            return {
                ...state,
                aptitude: action.payload
            };
    }
}