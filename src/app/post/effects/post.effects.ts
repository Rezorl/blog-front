import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromServices from '../services';
import * as fromPosts from '../store'
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PostEffects {

  private readonly loadPosts$ = createEffect(
    () => this.actions$
      .pipe(
        ofType<fromPosts.LoadPostAction>(fromPosts.PostActionType.LOAD_POSTS),
        switchMap(
          () => this.postService.fetchPosts()
            .pipe(
              map(posts => new fromPosts.LoadPostsSuccessAction({posts})),
              catchError(error => of(new fromPosts.LoadPostsFailAction({error})))
            )
        )
      )
  );

  private readonly removePost$ = createEffect(
    () => this.actions$
      .pipe(
        ofType<fromPosts.RemovePostAction>(fromPosts.PostActionType.REMOVE_POST),
        mergeMap(
          ({payload: {postId}}) => this.postService.removePost(postId)
            .pipe(
              map(postId => new fromPosts.RemovePostSuccessAction({postId})),
              catchError(error => of(new fromPosts.RemovePostFailAction({error})))
            )
        )
      )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly postService: fromServices.PostService
  ) {
  }
}