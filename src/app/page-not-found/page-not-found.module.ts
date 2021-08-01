import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundRoutingModule} from './page-not-found-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    fromComponents.components
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PageNotFoundModule {}
