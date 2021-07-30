import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule {}
