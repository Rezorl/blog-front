import {Action} from '@ngrx/store';
import {Post} from '../models';

export enum PostActionType {
  LOAD_POSTS = '[Posts] Load Posts',
  LOAD_POSTS_SUCCESS = '[Posts] Load Posts Success',
  LOAD_POSTS_FAIL = '[Posts] Load Posts Fail',
  REMOVE_POST = '[Posts] Remove Post',
  REMOVE_POST_SUCCESS = '[Posts] Remove Post Success',
  REMOVE_POST_FAIL = '[Posts] Remove Post Fail',
  ADD_POST = '[Posts] Add Post',
  ADD_POST_SUCCESS = '[Posts] ADD Post Success',
  ADD_POST_FAIL = '[Posts] ADD Post Fail',
}

export class LoadPostAction implements Action {
  readonly type = PostActionType.LOAD_POSTS;
}

interface LoadPostsSuccessPayload {
  posts: Array<Post>;
}

export class LoadPostsSuccessAction implements Action {
  readonly type = PostActionType.LOAD_POSTS_SUCCESS;

  constructor(private _payload: LoadPostsSuccessPayload) {}

  get payload(): LoadPostsSuccessPayload {
    return this._payload;
  }
}

interface LoadPostsFailPayload {
  error: Error;
}

export class LoadPostsFailAction implements Action {
  readonly type = PostActionType.LOAD_POSTS_FAIL;

  constructor(private _payload: LoadPostsFailPayload) {}

  get payload(): LoadPostsFailPayload {
    return this._payload;
  }
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

interface RemovePostSuccessPayload {
  postId: number;
}

export class RemovePostSuccessAction implements Action {
  readonly type = PostActionType.REMOVE_POST_SUCCESS;

  constructor(private _payload: RemovePostSuccessPayload) {}

  get payload(): RemovePostSuccessPayload {
    return this._payload;
  }
}

interface RemovePostFailPayload {
  error: Error;
}

export class RemovePostFailAction implements Action {
  readonly type = PostActionType.REMOVE_POST_FAIL;

  constructor(private _payload: RemovePostFailPayload) {}

  get payload(): RemovePostFailPayload {
    return this._payload;
  }
}

interface AddPostPayload {
  title: string;
  description: string;
}

export class AddPostAction implements Action {
  readonly type = PostActionType.ADD_POST;

  constructor(private _payload: AddPostPayload) {}

  get payload(): AddPostPayload {
    return this._payload;
  }
}

interface AddPostSuccessPayload {
  post: Post;
}

export class AddPostSuccessAction implements Action {
  readonly type = PostActionType.ADD_POST_SUCCESS;

  constructor(private _payload: AddPostSuccessPayload) {}

  get payload(): AddPostSuccessPayload {
    return this._payload;
  }
}

interface AddPostFailPayload {
  error: Error;
}

export class AddPostFailAction implements Action {
  readonly type = PostActionType.ADD_POST_FAIL;

  constructor(private _payload: AddPostFailPayload) {}

  get payload(): AddPostFailPayload {
    return this._payload;
  }
}

export type PostAction =
  | LoadPostAction
  | LoadPostsSuccessAction
  | LoadPostsFailAction
  | RemovePostAction
  | RemovePostSuccessAction
  | RemovePostFailAction
  | AddPostAction
  | AddPostSuccessAction
  | AddPostFailAction;
