var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Todo } from './todo';
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get("http://localhost:3000/todos").map(function (response) {
            var todos = [];
            response.json().forEach(function (todo) {
                todos.push(Todo.fromObject(todo));
            });
            return todos;
        });
    };
    TodoService.prototype.updateTodo = function (todo) {
        var options = new RequestOptions();
        options.headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put("http://localhost:3000/todos/" + todo.getId(), JSON.stringify(todo), options).map(function (response) {
            return "success";
        });
    };
    TodoService.prototype.createTodo = function (todo) {
        var options = new RequestOptions();
        options.headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post("http://localhost:3000/todos/", JSON.stringify(todo), options).map(function (response) {
            return "success";
        });
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.http.delete("http://localhost:3000/todos/" + id).map(function (response) {
            return "success";
        });
    };
    return TodoService;
}());
TodoService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], TodoService);
export { TodoService };
//# sourceMappingURL=todo.service.js.map