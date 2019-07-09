import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineAll, withLatestFrom, takeWhile } from 'rxjs/operators';
import { FRAMEWORKS, Framework } from 'src/app/constants/frameworks';

@Component({
  selector: 'fww-vote-results',
  templateUrl: './vote-results.component.html',
  styleUrls: ['./vote-results.component.scss']
})
export class VoteResultsComponent implements OnInit {
  frameworks = FRAMEWORKS.map((framework) => {
    return {
      ...framework,
      votes: 3
    };
  });
  constructor(
  ) { }

  ngOnInit() {
  }
}
