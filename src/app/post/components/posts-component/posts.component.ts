import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromPosts from '../../store';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {

  readonly posts$ = this.store.select(fromPosts.getPosts);

  constructor(private readonly store: Store<fromPosts.PostState>) { }

  removePost(id: number) {}
}
