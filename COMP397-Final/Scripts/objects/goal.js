var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//File Source: goal.ts
//Author: Louis Smith
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is the goal of where you want the ball to be
var objects;
(function (objects) {
    var Goal = (function (_super) {
        __extends(Goal, _super);
        function Goal(posX, posY) {
            _super.call(this, "goal");
            this.x = posX;
            this.y = posY;
        }
        return Goal;
    })(objects.GameObject);
    objects.Goal = Goal;
})(objects || (objects = {}));
//# sourceMappingURL=goal.js.map