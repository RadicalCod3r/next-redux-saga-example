import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes } from './actions';


const userListReducer = (state = { users: null, error: null }, action) => {
    switch(action.type) {
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            };

        case actionTypes.FETCH_USERS_FAIL:
            return {
                ...state,
                error: action.payload
            };
            
        default:
            return state;
    }
}

const userDetailsReducer = (state = { user: null, error: null }, action) => {
    switch(action.type) {
        case actionTypes.FETCH_SINGLE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            };

        case actionTypes.FETCH_SINGLE_USER_FAIL:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}

const combinedReducer = combineReducers({
    userList: userListReducer,
    userDetails: userDetailsReducer
});

const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
}

export default rootReducer;
