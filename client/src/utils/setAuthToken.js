import axios from 'axios';

const setAuthToken = token => {
  console.log("111111111111")
  if(token) {
    console.log("aaaaaaaaaaaaaaa")
    axios.defaults.headers.common['x-auth-token'] = token;
  }
    else{
    delete axios.defaults.headers.common['x-auth-token'];
    console.log("bbbbbbbbbbbbb")
    }
  }
export default setAuthToken