import {FETCH_PERSONS, NEW_PERSON, REMOVE_PERSON} from "../actions/types";

const initialState = {
    items: [],
    item: {}
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
                item: action.payload
            };
        case REMOVE_PERSON:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}