import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../services/auth.service';
import {UserData} from './../models/user-data';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('pseudoText') pseudoText: ElementRef;
  @ViewChild('password') passwordText: ElementRef;
  public pseudo: string = '';
  public password: string = '';
  constructor(private authService: AuthService, private router: Router) {
  }


  public login() {
    this.authService.login(this.pseudo, this.password).subscribe((user: UserData) => {
      this.router.navigate(['/articles']);
    }, error => {
      this.router.navigate(['/login'])
    });
  }
}
