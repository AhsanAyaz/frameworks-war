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
  user$: Observable<User>;
  voteInProgress: boolean;
  voteCasted: boolean;
  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.user$ = this.afAuth.user;
  }

  vote(framework: Framework) {
    let loggedInUser: User;
    this.voteInProgress = true;
    this.user$.pipe(
      first(),
      switchMap((user: User) => {
        loggedInUser = user;
        return this.afStore.doc(`votes/${user.uid}`).get();
      })
    ).subscribe((vote) => {
      // if (!vote.exists) {
        // this.afStore.doc(`votes/${loggedInUser.uid}`)
        //   .set({
        //     framework: framework.id
        //   });
        this.afStore.collection(`votes`)
          .add({
            framework: framework.id,
            uid: loggedInUser.uid
          }).then(() => {
            this.voteInProgress = false;
            this.voteCasted = true;
          });
      // } else {
      //   console.log(vote, framework);
      // }
    });
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}
