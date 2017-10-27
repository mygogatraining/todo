var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { ToUpperCase } from './pipe/to-upper-case.pipe';
import { SigninComponent } from './signin/signin.component';
import { SamplesComponent } from './samples/samples.component';
import { TodoComponent } from './todo/todo.component';
var routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }, {
        path: '',
        component: AppComponent
    }, {
        path: 'user',
        component: UserComponent
    }, {
        path: 'comments',
        component: CommentComponent
    }, {
        path: 'signin',
        component: SigninComponent
    }, {
        path: 'todo',
        component: TodoComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            UserComponent,
            CommentComponent,
            ToUpperCase,
            SigninComponent,
            SamplesComponent,
            TodoComponent
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
            RouterModule.forRoot(routes)
        ],
        exports: [ToUpperCase],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map