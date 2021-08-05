import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPostComponent, PostsComponent} from './components';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'add',
    component: AddPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PostRoutingModule {}
