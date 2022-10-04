export const actionTypes = {
    FETCH_USERS_START: 'FETCH_USERS_START',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAIL: 'FETCH_USERS_FAIL',

    FETCH_SINGLE_USER_START: 'FETCH_SINGLE_USER_START',
    FETCH_SINGLE_USER_SUCCESS: 'FETCH_SINGLE_USER_SUCCESS',
    FETCH_SINGLE_USER_FAIL: 'FETCH_SINGLE_USER_FAIL',
}

export const fetchUsersStart = () => ({ type: actionTypes.FETCH_USERS_START });

export const fetchUsersSuccess = (users) => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersFail = (error) => ({
    type: actionTypes.FETCH_USERS_FAIL,
    payload: error
});

export const fetchSingleUserStart = (userId) => ({ 
    type: actionTypes.FETCH_SINGLE_USER_START,
    payload: userId
});

export const fetchSingleUserSuccess = (user) => ({
    type: actionTypes.FETCH_SINGLE_USER_SUCCESS,
    payload: user
});

export const fetchSingleUserFail = (error) => ({
    type: actionTypes.FETCH_SINGLE_USER_FAIL,
    payload: error
});