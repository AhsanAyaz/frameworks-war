import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'fww-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  async loginWithGoogle() {
    const userCreds: auth.UserCredential = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    await this.afStore.doc(`users/${userCreds.user.uid}`).set(
      userCreds.user.toJSON()
    );
  }
}
