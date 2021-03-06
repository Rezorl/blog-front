import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    fromComponents.components
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule
  ],
  exports: [
    fromComponents.components
  ]
})
export class NavBarModule {}
