import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

export enum APP_ROUTE {
  POSTS = 'posts',
  ADD_POST = '/posts/add',
  NOT_FOUND = 'not-found'
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: APP_ROUTE.POSTS,
  },
  {
    path: APP_ROUTE.POSTS,
    loadChildren: () => import('./post/post.module').then(({PostModule}) => PostModule)
  },
  {
    path: APP_ROUTE.NOT_FOUND,
    loadChildren: () => import('./page-not-found/page-not-found.module')
      .then(({PageNotFoundModule}) => PageNotFoundModule)
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
