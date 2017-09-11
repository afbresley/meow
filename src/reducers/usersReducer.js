import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function userReducer(state = initialState.users, action) {
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
     return { 
        ...state,
        users: action.users
      };
    default: 
      return state;
  }
}