import {Action} from '@ngrx/store';
import {Post} from '../models';

export enum PostActionType {
  LOAD_POSTS = '[Posts] Load Posts',
  LOAD_POSTS_SUCCESS = '[Posts] Load Posts Success',
  LOAD_POSTS_FAIL = '[Posts] Load Posts Fail',
  REMOVE_POST = '[Posts] Remove Post'
}

export class LoadPostAction implements Action {
  readonly type = PostActionType.LOAD_POSTS;
}

interface LoadPostSuccessPayload {
  posts: Array<Post>;
}

export class LoadPostSuccessAction implements Action {
  readonly type = PostActionType.LOAD_POSTS_SUCCESS;

  constructor(private _payload: LoadPostSuccessPayload) {}

  get payload(): LoadPostSuccessPayload {
    return this._payload;
  }
}

export class LoadPostFailAction implements Action {
  readonly type = PostActionType.LOAD_POSTS_FAIL;
}

interface RemovePostPayload {
  postId: number;
}

export class RemovePostAction implements Action {
  readonly type = PostActionType.REMOVE_POST;

  constructor(private _payload: RemovePostPayload) {}

  get payload(): RemovePostPayload {
    return this._payload;
  }
}

export type PostAction = LoadPostAction | LoadPostSuccessAction | LoadPostFailAction | RemovePostAction;
