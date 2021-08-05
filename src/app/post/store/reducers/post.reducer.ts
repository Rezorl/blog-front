import {Post} from '../models';
import * as fromPosts from '../actions';
import {PostActionType} from '../actions';

export interface PostState {
  data: Post[];
  loading: boolean;
  loaded: boolean;
}

const initialState: PostState = {
  data: [
    {
      id: 1,
      description: 'description 1',
      title: 'title 1'
    }
  ],
  loading: false,
  loaded: false
}

export function reducer(state: PostState = initialState, action: fromPosts.PostAction): PostState {
  switch (action.type) {
    case fromPosts.PostActionType.LOAD_POSTS:
      return {
       ...state,
       loading: true
      }
    case fromPosts.PostActionType.LOAD_POSTS_FAIL:
      return {
        ...state,
        loading: false,
      }
    case fromPosts.PostActionType.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.posts
      }
    case PostActionType.REMOVE_POST:
      return {
        ...state,
        data: state.data.filter(({id}) => id !== action.payload.postId)
      }
    default:
      return state;
  }
}

export const getPosts = (state: PostState) => state.data;
