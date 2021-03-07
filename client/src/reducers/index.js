import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

export default combineReducers({
    //any reducers created
    alert,
    auth,
    profile,
    post
});

