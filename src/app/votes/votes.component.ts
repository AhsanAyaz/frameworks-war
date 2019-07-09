import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'fww-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.user$ = this.afAuth.user;
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}
