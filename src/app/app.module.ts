import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { ToUpperCase } from './pipe/to-upper-case.pipe';
import { SigninComponent } from './signin/signin.component';
import { UserService } from './user/user.service';
import { SamplesComponent } from './samples/samples.component';
import { TodoComponent } from './todo/todo.component';
import { MediaUrlDirective } from './directive/media-url.directive';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'todo', 
    pathMatch: 'full'
  },{
    path: 'home',
    component: AppComponent
  },{
    path: 'user',
    component: UserComponent
  },{
    path: 'comments',
    component: CommentComponent
  },{
    path: 'signin',
    component: SigninComponent
  },{
    path: 'todo',
    component: TodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentComponent,
    ToUpperCase,
    SigninComponent,
    SamplesComponent,
    TodoComponent,
    MediaUrlDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    DragulaModule
  ],
  exports:[ ToUpperCase, MediaUrlDirective],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
