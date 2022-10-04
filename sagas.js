import { all, put, call, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { 
    actionTypes, 
    fetchSingleUserFail, 
    fetchSingleUserSuccess, 
    fetchUsersFail, 
    fetchUsersSuccess 
} from './actions';


// handlers
function* fetchUsersStartAsync() {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/users');
        const users = yield response.json();
        console.log(users);
        yield put(fetchUsersSuccess(users));
    } catch(error) {
        yield put(fetchUsersFail(error));
    }
}

function* fetchSingleUserStartAsync(action) {
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${action.payload}`);
        const user = yield response.json();
        yield put(fetchSingleUserSuccess(user));
    } catch(error) {
        yield put(fetchSingleUserFail(error));
    }
}

// sagas
function* getUsersSaga() {
    yield takeLatest(actionTypes.FETCH_USERS_START, fetchUsersStartAsync);
}

function* getSingleUserSaga() {
    yield takeLatest(actionTypes.FETCH_SINGLE_USER_START, fetchSingleUserStartAsync);
}

function* rootSaga() {
    yield all([
        call(getUsersSaga),
        call(getSingleUserSaga),
    ]);
}

export default rootSaga;