import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'fww-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fw-war';
  stateAnalyzed = false;
  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.auth.authState.subscribe((isLoggedIn) => {
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
