import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromPosts from '../../store';
import {Router} from '@angular/router';
import {ROUTE} from '../../../app-routing.module';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {

  readonly posts$ = this.store.select(fromPosts.getPosts);
  readonly loading$ = this.store.select(fromPosts.getLoading);

  constructor(
    private readonly store: Store<fromPosts.PostState>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new fromPosts.LoadPostAction());
  }

  removePost(postId: number) {
    this.store.dispatch(new fromPosts.RemovePostAction({postId}))
  }

  onAddClick() {
    this.router.navigate([ROUTE.ADD_POST]);
  }
}
