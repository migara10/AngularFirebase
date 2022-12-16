import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth)

  constructor(private auth: Auth) { }

  login(userName: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, userName, password));
  }

  logOut() {
    return from(this.auth.signOut());
  }

  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
}
