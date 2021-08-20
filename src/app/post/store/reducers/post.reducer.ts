import {Post} from '../models';
import * as fromPosts from '../actions';
import {PostActionType} from '../actions';

export interface PostState {
  data: Post[];
  loading: boolean;
  loaded: boolean;
  error?: Error;
  adding: boolean;
}

const initialState: PostState = {
  data: [],
  loading: false,
  loaded: false,
  adding: false
}

export function reducer(state: PostState = initialState, action: fromPosts.PostAction): PostState {
  switch (action.type) {
    case fromPosts.PostActionType.LOAD_POSTS:
      return {
        ...state,
        loading: !state.loaded,
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
    case PostActionType.ADD_POST:
      return {
        ...state,
        adding: true
      }
    case PostActionType.ADD_POST_SUCCESS:
      return {
        ...state,
        adding: false,
        data: [...state.data, action.payload.post]
      };
    case PostActionType.ADD_POST_FAIL:
      return {
        ...state,
        adding: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export const getPosts = ({data}: PostState) => data;
export const getLoading = ({loading}: PostState) => loading;
export const getAdding = ({adding}: PostState) => adding;
export const getLoaded = ({loaded}: PostState) => loaded;
