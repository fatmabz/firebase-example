import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { CrudService } from './../services/crud.service';

import { ArticleData } from './../models/article-data';


@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {
  public articles$: Observable<ArticleData[]>;
  constructor(private router: Router, private authService: AuthService, private crudService: CrudService) {
    this.articles$ = this.crudService.getArticles();
    this.articles$.subscribe((items: ArticleData[]) => {
      items.map(item => console.log(item));
    })
  }

  public isLogin(): boolean {
    return this.router.url.lastIndexOf('/login', 0) === 0;
  }

  public logout() {
    this.authService.logout();
  }

}
