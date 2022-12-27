import { ADD_SEARCH, REMOVE_SEARCH } from "../actionTypes/actionType";

const initialState = {
    searchList: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SEARCH:
            return {
                ...state,
                searchList: [...state.searchList, action.payload],
            };
        case REMOVE_SEARCH:
            return {
                ...state,
                searchList: state.searchList.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
}