import { Component, OnInit, OnDestroy } from '@angular/core';
import { FRAMEWORKS, Framework } from 'src/app/constants/frameworks';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'fww-vote-results',
  templateUrl: './vote-results.component.html',
  styleUrls: ['./vote-results.component.scss']
})
export class VoteResultsComponent implements OnInit, OnDestroy {
  frameworks: Array<Framework>;
  maxVotes = 0;
  votesLoaded: boolean;
  componentAlive: boolean;
  constructor(
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.componentAlive = true;
    this.getVotes();
  }

  ngOnDestroy() {
    this.componentAlive = false;
  }

  getVotes() {
    this.votesLoaded = false;
    combineLatest(
      FRAMEWORKS.map((framework: Framework) => {
        return this.afStore.collection('votes', ref => {
          return ref.where('framework', '==', framework.id);
        }).valueChanges();
      })
    ).pipe(
      takeWhile(() => !!this.componentAlive)
    ).subscribe((frameworks) => {
      this.votesLoaded = true;
      this.frameworks = FRAMEWORKS.map((fr, index) => {
        const votes = frameworks[index].length;
        if (votes > this.maxVotes) {
          this.maxVotes = votes;
        }
        return {
          ...fr,
          votes
        };
      });
    });
  }
}
