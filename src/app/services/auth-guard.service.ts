import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { mapToUserData, UserData } from './../models/user-data';

@Injectable()
export class AuthGuardService implements CanActivate {
  private loginUrl = '/login';
  private articlesUrl = '/articles';
  public authState: UserData | undefined;

  constructor(private router: Router, private afAuth: AngularFireAuth
  ) {

    this.afAuth.authState.subscribe((auth: UserData | undefined) => {
      this.authState = auth;
     });
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.authState === undefined){
      this.router.navigate([this.loginUrl]);
      return false;
    } else {
      return true;
    }
  }
}
