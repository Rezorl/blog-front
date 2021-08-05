import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

export class ROUTE {
  public static readonly POSTS = 'posts';
  public static readonly ADD_POST = '/posts/add';
  public static readonly NOT_FOUND = 'not-found';
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTE.POSTS,
  },
  {
    path: ROUTE.POSTS,
    loadChildren: () => import('./post/post.module').then(({PostModule}) => PostModule)
  },
  {
    path: ROUTE.NOT_FOUND,
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
