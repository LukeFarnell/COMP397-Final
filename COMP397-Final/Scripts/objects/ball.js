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
            this.x = 200;
            this.y = 240;
            this.xSpeed = 3;
            this.ySpeed = 0;
            this._dx = this.xSpeed;
            this._dy = this.ySpeed;
        }
        //PUBLIC METHODS
        Ball.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
        };
        Ball.prototype.hit = function (angle) {
            if (this._dy == 0) {
                if (this._dx < 0) {
                    switch (angle) {
                        case 0:
                            this._dx *= -1;
                            break;
                        case 90:
                            this._dy *= -1;
                            break;
                        case 45:
                            this._temp = -this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                    }
                }
                else {
                    switch (angle) {
                        case 0:
                            this._dx *= -1;
                            break;
                        case 90:
                            this._dy *= -1;
                            break;
                        case 45:
                            this._temp = -this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                    }
                }
                this.xSpeed = this._dx;
                this.ySpeed = this._dy;
            }
            else if (this._dx == 0) {
                if (this._dy < 0) {
                    switch (angle) {
                        case 0:
                            this._dx *= -1;
                            break;
                        case 90:
                            this._dy *= -1;
                            break;
                        case 45:
                            this._temp = -this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                    }
                }
                else {
                    switch (angle) {
                        case 0:
                            this._dx *= -1;
                            break;
                        case 90:
                            this._dy *= -1;
                            break;
                        case 45:
                            this._temp = -this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                    }
                }
                this.xSpeed = this._dx;
                this.ySpeed = this._dy;
            }
        };
        Ball.prototype.reset = function () {
        };
        return Ball;
    })(objects.GameObject);
    objects.Ball = Ball;
})(objects || (objects = {}));
//# sourceMappingURL=ball.js.map