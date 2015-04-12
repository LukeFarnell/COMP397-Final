var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//File Source: cannon.ts
//Author: Louis Smith
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This will fire the ball
var objects;
(function (objects) {
    var Cannon = (function (_super) {
        __extends(Cannon, _super);
        function Cannon(posX, posY) {
            _super.call(this, "cannon");
            this.x = posX;
            this.y = posY;
        }
        return Cannon;
    })(objects.GameObject);
    objects.Cannon = Cannon;
})(objects || (objects = {}));
//# sourceMappingURL=cannon.js.map