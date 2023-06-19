import {POPULAR} from "./popular.constants";

const initialState = {
    selectedLanguage: 'All',
    loading: false,
    repos: [],
    error: null,
}

 export const popularReducer = (state = initialState, action) => {
    switch(action.type) {
        case POPULAR.SET_SELECTED_LANGUAGE:
            return {
                ...state ,
                selectedLanguage: action.payload
            }
        case POPULAR.GET_REPOS_LOADING:
            return {
                ...state ,
                error: null,
                loading: true
            }
        case POPULAR.GET_REPOS_SUCCESS:
            return {
                ...state ,
                loading: false,
                repos: action.payload
            }
        case POPULAR.GET_REPOS_FAILURE:
            return {
                ...state ,
                loading:false,
                error: action.payload
            }

        default:
            return state;
    }
}
//export default popularReducer;