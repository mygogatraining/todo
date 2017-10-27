var Comment = (function () {
    function Comment() {
    }
    // please write setters and getters for the above properties
    // below here.
    Comment.prototype.getName = function () {
        return this.name;
    };
    Comment.prototype.getEmail = function () {
        return this.email;
    };
    Comment.prototype.getBody = function () {
        return this.body;
    };
    Comment.fromObject = function (obj) {
        var commentRef = new Comment();
        Object.assign(commentRef, obj);
        return commentRef;
    };
    return Comment;
}());
export { Comment };
//# sourceMappingURL=comment.js.map