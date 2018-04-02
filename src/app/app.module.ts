import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MaterialModule } from './material/material.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles/articles-list.component';
import { ArticleComponent } from './articles/article/article.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CrudService } from './services/crud.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [AppComponent, LoginComponent, ArticlesListComponent, ArticleComponent],
  providers: [
    AuthService,
    AuthGuardService,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
