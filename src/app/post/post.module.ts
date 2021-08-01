import {NgModule} from '@angular/core';
import {PostRoutingModule} from './post-routing.module';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import * as fromPosts from './store';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    fromComponents.components
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    TranslateModule.forChild(),
    RouterModule,
    StoreModule.forFeature('posts', fromPosts.reducer)
  ]
})
export class PostModule {}
