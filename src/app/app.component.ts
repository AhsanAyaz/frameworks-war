import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'fww-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stateAnalyzed: boolean;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((isLoggedIn) => {
    if (!this.stateAnalyzed) {
      this.stateAnalyzed = true;
    }
    if (!isLoggedIn) {
      this.router.navigate(['/auth/login']);
    } else {
      this.router.navigate(['/votes/vote']);
    }
  });
  }
}
