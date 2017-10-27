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
import { TodoService } from './todo.service';
import { Todo } from './todo';
var TodoComponent = (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
        this.completedTodos = 0;
        this.archivedTodos = 0;
        this.todos = [];
        this.hideTodos = false;
        this.showCheckbox = false;
        this.hideArchivedTodo = false;
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodoComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().subscribe(function (todos) {
            todos = todos.sort(function (a, b) {
                if (a["id"] < b["id"]) {
                    return -1;
                }
                else if (a["id"] > b["id"]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.todos = todos;
            _this.getCompletedTodos();
            _this.getArchivedTodos();
        }, function (error) {
            console.log("error occured!");
        });
    };
    TodoComponent.prototype.markCompleted = function (todo, event) {
        if (event.checked) {
            todo.setCompleted(true);
        }
        else {
            todo.setCompleted(false);
            todo.setArchived(false);
        }
        this.updateTodo(todo);
        this.getCompletedTodos();
    };
    TodoComponent.prototype.changeTodo = function (todo, event) {
        todo.setTitle(event.srcElement.value);
        this.updateTodo(todo);
    };
    TodoComponent.prototype.updateTodo = function (todo) {
        this.todoService.updateTodo(todo).subscribe(function (success) {
            console.log("success");
        }, function (error) {
            console.log(error);
        });
    };
    TodoComponent.prototype.deleteTodo = function (todo) {
        this.todos = this.todos.filter(function (i) {
            return i.getId() !== todo.getId();
        });
        this.todoService.deleteTodo(todo.getId()).subscribe(function (success) {
            console.log("success");
        }, function (error) {
            console.log(error);
        });
    };
    TodoComponent.prototype.archiveTodo = function (todo) {
        if (todo.getArchived()) {
            todo.setArchived(false);
        }
        else {
            todo.setArchived(true);
        }
        this.updateTodo(todo);
    };
    TodoComponent.prototype.createTodo = function (event) {
        var _this = this;
        var newTodo = new Todo();
        newTodo.setTitle(event.srcElement.value);
        newTodo.setCompleted(false);
        newTodo.setArchived(false);
        newTodo.setUserId(1);
        this.todos.push(newTodo);
        this.showCheckbox = false;
        this.todoService.createTodo(newTodo).subscribe(function (success) {
            _this.getTodos();
        }, function (error) {
            console.log("error occured!");
        });
    };
    TodoComponent.prototype.getCompletedTodos = function () {
        var _this = this;
        this.completedTodos = 0;
        this.todos.forEach(function (todo) {
            if (todo.getCompleted()) {
                _this.completedTodos++;
            }
        });
    };
    TodoComponent.prototype.getArchivedTodos = function () {
        var _this = this;
        this.archivedTodos = 0;
        this.todos.forEach(function (todo) {
            if (todo.getArchived()) {
                _this.archivedTodos++;
            }
        });
    };
    TodoComponent.prototype.hideCompletedTodos = function () {
        this.hideTodos ? this.hideTodos = false : this.hideTodos = true;
    };
    TodoComponent.prototype.hideArchivedTodos = function () {
        this.hideArchivedTodo ? this.hideArchivedTodo = false : this.hideArchivedTodo = true;
    };
    TodoComponent.prototype.allowDrop = function (event) {
        event.preventDefault();
    };
    TodoComponent.prototype.drag = function (event) {
        // event.dataTransfter.setData("text", event.target.id);
        console.log(event);
    };
    TodoComponent.prototype.drop = function (event) {
        event.preventDefault();
        console.log(event);
    };
    TodoComponent.prototype.addNewForm = function () {
        this.showCheckbox ? this.showCheckbox = false : this.showCheckbox = true;
    };
    TodoComponent.prototype.deleteEmptyTodo = function () {
        this.showCheckbox = false;
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    Component({
        selector: 'app-todo',
        templateUrl: './todo.component.html',
        styleUrls: ['./todo.component.scss'],
        providers: [TodoService]
    }),
    __metadata("design:paramtypes", [TodoService])
], TodoComponent);
export { TodoComponent };
//# sourceMappingURL=todo.component.js.map