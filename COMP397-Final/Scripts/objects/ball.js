//File Source: ball.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 12/04/15
//Description:
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
        function Ball(cannon) {
            _super.call(this, "ball");
            this._fired = false;
            this.x = cannon.x;
            this.y = cannon.y;
            this.xSpeed = 3;
            this.ySpeed = 0;
            this._dx = 0;
            this._dy = 0;
        }
        //PUBLIC METHODS
        Ball.prototype.update = function () {
            if (this._fired == true) {
                this.x += this._dx;
                this.y += this._dy;
                this.xSpeed = this._dx;
                this.ySpeed = this._dy;
            }
        };
        Ball.prototype.fire = function () {
            if (this._fired == false) {
                this._dx = this.xSpeed;
                this._dy = this.ySpeed;
                this._fired = true;
            }
        };
        Ball.prototype.blockHit = function () {
            if (this._dx != 0) {
                this._dx *= -1;
            }
            if (this._dy != 0) {
                this._dy *= -1;
            }
            console.log("x: " + this._dx + " | y: " + this._dy);
        };
        Ball.prototype.angleHit = function (angle) {
            switch (angle) {
                case 0:
                    if (this._dy == 0) {
                        if (this._dx > 0) {
                            this._temp = -this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                        }
                        else if (this._dx < 0) {
                            this._dx *= -1;
                            break;
                        }
                    }
                    if (this._dx == 0) {
                        if (this._dy > 0) {
                            this._temp = -this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                        }
                        else if (this._dy < 0) {
                            this._dy *= -1;
                            break;
                        }
                    }
                case 1:
                    if (this._dy == 0) {
                        if (this._dx < 0) {
                            this._temp = this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                        }
                        else if (this._dx > 0) {
                            this._dx *= -1;
                            break;
                        }
                    }
                    if (this._dx == 0) {
                        if (this._dy > 0) {
                            this._temp = this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                        }
                        else if (this._dy < 0) {
                            this._dy *= -1;
                            break;
                        }
                    }
                case 2:
                    if (this._dy == 0) {
                        if (this._dx < 0) {
                            this._temp = -this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                        }
                        else if (this._dx > 0) {
                            this._dx *= -1;
                            break;
                        }
                    }
                    if (this._dx == 0) {
                        if (this._dy < 0) {
                            this._temp = -this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                        }
                        else if (this._dy > 0) {
                            this._dy *= -1;
                            break;
                        }
                    }
                    break;
                case 3:
                    if (this._dy == 0) {
                        if (this._dx > 0) {
                            this._temp = this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                        }
                        else if (this._dx < 0) {
                            this._dx *= -1;
                            break;
                        }
                    }
                    if (this._dx == 0) {
                        if (this._dy < 0) {
                            this._temp = this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                        }
                        else if (this._dy > 0) {
                            this._dy *= -1;
                            break;
                        }
                    }
                    break;
            }
            console.log("x: " + this._dx + " | y: " + this._dy);
        };
        Ball.prototype.reset = function () {
        };
        return Ball;
    })(objects.GameObject);
    objects.Ball = Ball;
})(objects || (objects = {}));
//# sourceMappingURL=ball.js.map