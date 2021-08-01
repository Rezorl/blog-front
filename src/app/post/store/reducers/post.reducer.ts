import {Post} from '../models';
import * as fromPosts from '../actions';

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: boolean;
  loaded: boolean;
}

const initialState: PostState = {
  posts: [
    {
      id: 1,
      description: 'description',
      title: 'title'
    }
  ],
  error: false,
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
        error: true
      }
    case fromPosts.PostActionType.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        loaded: true,
        posts: action.payload.posts
      }
    default:
      return state;
  }
}

export const getPosts = (state: PostState) => state.posts;
