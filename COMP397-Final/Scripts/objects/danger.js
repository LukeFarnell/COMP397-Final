var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//File Source: block.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 12/04/15
//Description: This is the AI that can destroy you if you get in the way
var objects;
(function (objects) {
    var Danger = (function (_super) {
        __extends(Danger, _super);
        //CONSTRUCTOR
        function Danger(posX, posY, rot, scale, move) {
            _super.call(this, "danger");
            this._change = false;
            this.x = posX;
            this.y = posY;
            this.rot = rot;
            this.rotation = this.rot * 90;
            this.sY = scale;
            this.scaleY += scale;
            this.move = move;
            this._speed = 1.6;
            this.sound = "hit";
        }
        //PUBLIC METHODS
        Danger.prototype.update = function () {
            if (this.move) {
                if (this.rot % 2 == 0) {
                    if (this._change == true) {
                        this.y += this._speed;
                        if (this.y >= 480 - -(100 * this.sY))
                            this._change = false;
                    }
                    else {
                        this.y -= this._speed;
                        if (this.y <= -100 * this.sY)
                            this._change = true;
                    }
                }
                else {
                    if (this._change == true) {
                        this.x -= this._speed;
                        if (this.x <= 100)
                            this._change = false;
                    }
                    else {
                        this.x += this._speed;
                        if (this.x >= 540)
                            this._change = true;
                    }
                }
            }
        };
        return Danger;
    })(objects.GameObject);
    objects.Danger = Danger;
})(objects || (objects = {}));
//# sourceMappingURL=danger.js.map