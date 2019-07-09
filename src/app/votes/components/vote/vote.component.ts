import { Component, OnInit } from '@angular/core';
import { FRAMEWORKS, Framework } from '../../../constants/frameworks';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, switchMap } from 'rxjs/operators';

@Component({
  selector: 'fww-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  frameworks = FRAMEWORKS;
  constructor(
  ) { }

  ngOnInit() {
  }
}


// this.afStore.collection(`votes`)
//   .add({
//     framework: framework.id,
//     uid: loggedInUser.uid
//   }).then(() => {
//     this.voteInProgress = false;
//     this.voteCasted = true;
//   });
