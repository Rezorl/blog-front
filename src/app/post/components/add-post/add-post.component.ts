import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromPosts from '../../store';

const FORM_PARAMS = {
  title: 'title',
  description: 'description'
};

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPostComponent {

  readonly adding$ = this.store.select(fromPosts.getAdding);

  readonly postForm = this.formBuilder.group({
      [FORM_PARAMS.title]: [null, Validators.required],
      [FORM_PARAMS.description]: [null, Validators.required],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<fromPosts.PostState>
  ) { }

  addPost() {
    this.store.dispatch(new fromPosts.AddPostAction(this.postForm.getRawValue()));
  }
}
