import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_PROFILES,
    GET_REPOS,
} from './types';

//Get current user profile

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });


    }
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//get all profiles
export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });

    try {
        const res = await axios.get('/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });


    }
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Get  profile by id
export const getProfileById = (userId) => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//Get  profile by search
// export const getProfileBySearch = (name) => async dispatch => {
//     dispatch({ type: CLEAR_PROFILE });
//     try {
//         const res = await axios.get(`/api/profile/search?name=${name}`);
//         console.log(res.data);
//         dispatch({

//             type: GET_PROFILES,
//             payload: res.data
//         })
//     } catch (err) {
//         dispatch({
//             type: PROFILE_ERROR,
//             payload: { msg: err.response.statusText, status: err.response.status }
//         });
//     }
// };

// Get github repos
export const getGithubRepos = username => async dispatch => {

    try {
        const res = await axios.get(`/api/profile/github/${username}`);

        dispatch({
            type: GET_REPOS,
            payload: res.data
        });


    }
    catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


//creat/update a profile
export const createProfile = (formData, history, edit = false) => async dispatch => {

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

        if (!edit) {
            history.push('/dashboard');
        }
    } catch (err) {

        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// //search profiles
export const searcher = (name) => async dispatch =>{
    dispatch({type: CLEAR_PROFILE});
    try {console.log(name);
        const res = await axios.get(`/api/profile/search?name=${name}`);
        console.log('from actions/profile.js the data is')
        console.log(res)
      
        dispatch({
        type:GET_PROFILES,
        payload: res.data,
        
        });
    } catch (error) {
        console.log(error);
        if(error.response)
        {
            dispatch({
        type: PROFILE_ERROR,
        
        payload: { 
            msg: error.response.statusText,
             status: error.response.status }
      });}

      else{
        {dispatch({
            type: PROFILE_ERROR,
            
           
          })
      }
      
    
  }
    }
}

//delete account
export const deleteAccount = () => async dispatch => {
    if (window.confirm("Are you sure? This can NOT be undone!")) {
        try {
            await axios.delete('/api/profile');
            dispatch({ type: CLEAR_PROFILE });

            dispatch({ type: ACCOUNT_DELETED });
            dispatch(setAlert('Your account has been deleted'));

        } catch (err) {
            dispatch({ type: PROFILE_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
        }
    }
};