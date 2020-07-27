import axios from 'axios';

const initialState = {
    user: [],
    items: [],
    loading: false
}
const GET_USER = 'GET_USER';
const GET_ITEMS = 'GET_ITEMS';

export function getUser(user) {
    return {
        type:GET_USER,
        payload: user
    }
}
export function getItems(){
    const items = axios.get('/menuItems')
    console.log(items);
return {
    type:GET_ITEMS,
    payload: items
    }
}

export default function cookieReducer(state = initialState, action){
const {type, payload} = action;
switch(type){
    case GET_USER:
        return {...state, user: payload}
    case GET_ITEMS + '_PENDING':
        return {...state, loading:true}
    case GET_ITEMS + '_FULFILLED':
        return {...state, loading:false, items: payload.data}
    case GET_ITEMS + '_REJECTED':
        return initialState;
    default:
        return state
    }
}