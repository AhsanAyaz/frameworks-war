import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotesRoutingModule } from './votes-routing.module';
import { VoteComponent } from './components/vote/vote.component';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { VoteResultsComponent } from './components/vote-results/vote-results.component';
import { VotesComponent } from './votes.component';


@NgModule({
  declarations: [VoteComponent, VoteResultsComponent, VotesComponent],
  imports: [
    CommonModule,
    VotesRoutingModule,
    // AngularFireAuthModule,
    // AngularFirestoreModule
  ]
})
export class VotesModule { }
