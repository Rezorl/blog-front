import {Post} from '../models';
import * as fromPosts from '../actions';
import {PostActionType} from '../actions';

export interface PostState {
  data: Post[];
  loading: boolean;
  loaded: boolean;
  error?: Error;
}

const initialState: PostState = {
  data: [],
  loading: false,
  loaded: false
}

export function reducer(state: PostState = initialState, action: fromPosts.PostAction): PostState {
  switch (action.type) {
    case fromPosts.PostActionType.LOAD_POSTS:
      return {
        ...state,
        loading: true,
        error: undefined
      }
    case fromPosts.PostActionType.LOAD_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case fromPosts.PostActionType.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: undefined,
        data: action.payload.posts
      }
    case PostActionType.REMOVE_POST_SUCCESS:
      return {
        ...state,
        data: state.data.filter(({id}) => id !== action.payload.postId)
      }
    case fromPosts.PostActionType.REMOVE_POST_FAIL:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export const getPosts = (state: PostState) => state.data;
export const getLoading = (state: PostState) => state.loading;
