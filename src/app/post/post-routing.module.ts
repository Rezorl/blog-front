import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './components';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PostRoutingModule {}
