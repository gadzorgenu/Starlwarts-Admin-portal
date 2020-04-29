import axios from 'axios';
import  {FETCH_USER} from './types';
export const fetchUser = ()=> async dispatch =>{
    //dispatching an action after the request has been successfully created 
    //making a get req to the server 
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data}); 
    };

//the purpose of redux_thunk is to inspect every value returned from the action creator
