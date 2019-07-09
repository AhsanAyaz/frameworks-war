import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteComponent } from './components/vote/vote.component';
import { VoteResultsComponent } from './components/vote-results/vote-results.component';
import { VotesComponent } from './votes.component';

const routes: Routes = [{
  path: '',
  component: VotesComponent,
  children: [{
    path: 'vote',
    component: VoteComponent
  }, {
    path: 'results',
    component: VoteResultsComponent
  }, {
    path: '**',
    redirectTo: 'vote',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotesRoutingModule { }
