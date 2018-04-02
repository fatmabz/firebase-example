import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { mapToUserData, UserData } from './../models/user-data';

@Injectable()
export class AuthService {

  public authState: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
    private router: Router
  ) {}


  public login(pseudo: string, password: string):Observable<UserData> {
    //return this.afAuth.auth.signInWithEmailAndPassword<UserData>(pseudo, password);
   return of(this.afAuth.auth.signInWithEmailAndPassword<UserData>(pseudo, password)).map(mapToUserData);
  }

  logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
}