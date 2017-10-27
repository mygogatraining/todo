var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from './user.service';
var UserComponent = (function () {
    function UserComponent(formBuilder) {
        // this.formGroup = formBuilder.group({
        //   'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        //   'email': ['', Validators.compose([Validators.required, Validators.email])]
        // })
        this.formBuilder = formBuilder;
        this.a = 0;
        this.b = 7;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.sendForm = function () {
        var name = this.formGroup.get('name').value;
        var email = this.formGroup.get('email').value;
        this.data.name;
        this.data.email;
        console.group();
        console.log(name);
        console.log(email);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss'],
        providers: [UserService]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map