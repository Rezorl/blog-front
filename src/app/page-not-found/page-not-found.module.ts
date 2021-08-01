import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './component';
import {PageNotFoundRoutingModule} from './page-not-found-routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PageNotFoundModule {}
