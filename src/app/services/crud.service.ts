import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFirestore } from 'angularfire2/firestore';

import { ArticleData } from './../models/article-data';


@Injectable()
export class CrudService {

  constructor(private fbase: AngularFireDatabase, private fstore: AngularFirestore) { }

  getArticles(): Observable<ArticleData[]> {
    return this.fstore.collection<ArticleData>('articles').valueChanges();
  }

  deleteArticle(article: ArticleData): void {
    alert('try to delete...');
    this.fbase.object('/article/' + article.name).remove();
}


 editArticle(article: ArticleData): void {
    alert('try to edit...');
    this.fbase.object('/article/' + article.name).update({description: article.description});
}
}