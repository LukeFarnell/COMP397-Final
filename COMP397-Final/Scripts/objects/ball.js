var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Ball = (function (_super) {
        __extends(Ball, _super);
        //CONSTRUCTOR
        function Ball() {
            _super.call(this, "ball");
            this.x = 100;
            this.y = 240;
            this.xSpeed = 5;
            this.ySpeed = 0;
            this._dx = this.xSpeed;
            this._dy = this.ySpeed;
        }
        //PUBLIC METHODS
        Ball.prototype.update = function () {
            this._dx += this.xSpeed;
            this._dy += this.ySpeed;
            if (this.isColliding) {
                this.hit();
            }
        };
        Ball.prototype.hit = function () {
            this.xSpeed *= -1;
        };
        Ball.prototype.reset = function () {
        };
        return Ball;
    })(objects.GameObject);
    objects.Ball = Ball;
})(objects || (objects = {}));
//# sourceMappingURL=ball.js.map