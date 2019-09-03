import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'votes'
}, {
  path: 'votes', loadChildren: () => import('./votes/votes.module').then(m => m.VotesModule)
}, {
  path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}, {
  path: '**',
  redirectTo: 'vote'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
