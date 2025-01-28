import { Action, countData } from "../types/types";

export const Reducer = (state: countData, action: Action) => {
    switch(action.type){
        case 'MOVEMENT':
            return {
                ...state,
                movement: action.payload
            };
    }
}