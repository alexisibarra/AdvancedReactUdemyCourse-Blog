import { FETCH_POSTS, DELETE_POST, FETCH_POST } from '../actions';
import { mapKeys, omit } from 'lodash';

export default (state = {}, action) => {
  switch(action.type){
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      const post = action.payload.data;
      return { ...state, [post.id]: post }  
    case DELETE_POST:
      return omit(state, action.payload)
    default:
      return state
  }
}