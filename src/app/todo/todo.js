var Todo = (function () {
    function Todo() {
    }
    Todo.prototype.getId = function () {
        return this.id;
    };
    Todo.prototype.setId = function (value) {
        this.id = value;
    };
    Todo.prototype.getUserId = function () {
        return this.userId;
    };
    Todo.prototype.setUserId = function (value) {
        this.userId = value;
    };
    Todo.prototype.getTitle = function () {
        return this.title;
    };
    Todo.prototype.setTitle = function (value) {
        this.title = value;
    };
    Todo.prototype.getCompleted = function () {
        return this.completed;
    };
    Todo.prototype.setCompleted = function (value) {
        this.completed = value;
    };
    Todo.prototype.getArchived = function () {
        return this.archived;
    };
    Todo.prototype.setArchived = function (value) {
        this.archived = value;
    };
    Todo.fromObject = function (obj) {
        var todo = new Todo();
        Object.assign(todo, obj);
        return todo;
    };
    return Todo;
}());
export { Todo };
//# sourceMappingURL=todo.js.map