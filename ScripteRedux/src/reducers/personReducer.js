import {FETCH_PERSONS, NEW_PERSON, REMOVE_PERSON, FILTER_PERSONS,USER_SIGN_UP_REQUEST} from "../actions/types";

const initialState = {
    items: [],
    query:""
};

export default function (state = initialState, action) {
    switch(action.type){
        case FETCH_PERSONS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_PERSON:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_PERSON:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case FILTER_PERSONS:
            return{
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
}