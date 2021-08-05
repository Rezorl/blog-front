import {NgModule} from '@angular/core';
import {PostRoutingModule} from './post-routing.module';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';

import * as fromServices from './services';
import * as fromPosts from './store';
import * as fromComponents from './components';
import * as fromEffects from './effects';

@NgModule({
  declarations: [
    fromComponents.components
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    TranslateModule.forChild(),
    RouterModule,
    StoreModule.forFeature('posts', fromPosts.reducer),
    HttpClientModule,
    EffectsModule.forFeature(fromEffects.effects),
  ],
  providers: fromServices.services
})
export class PostModule {}
