import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromPosts from '../../store';
import {mergeMap, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {

  readonly posts$ = this.store.select(fromPosts.getPostsState)
    .pipe(
      take(1),
      tap(postsState => {
        if(!postsState.loaded) {
          this.store.dispatch(new fromPosts.LoadPostAction());
        }
      }),
      mergeMap(() => this.store.select(fromPosts.getPosts))
    );

  readonly loading$ = this.store.select(fromPosts.getLoading);

  constructor(private readonly store: Store<fromPosts.PostState>) {}

  removePost(postId: number) {
    this.store.dispatch(new fromPosts.RemovePostAction({postId}))
  }
}
