// import axios from 'axios';

const initialState = {
    user: []
}
const GET_USER = 'GET_USER';

export function getUser(user) {
    return {
        type:GET_USER,
        payload: user
    }
}

export default function cookieReducer(state = initialState, action){
const {type, payload} = action;
switch(type){
    case GET_USER:
        return {...state, user: payload}
    default:
        return state
    }
}