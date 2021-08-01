import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts',
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.module').then(({PostModule}) => PostModule)
  },
  {
    path: 'not-found',
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
