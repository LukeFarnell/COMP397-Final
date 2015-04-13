var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//File Source: wiggletext.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is used to animate the text images
var objects;
(function (objects) {
    var Wiggle = (function (_super) {
        __extends(Wiggle, _super);
        function Wiggle(name, posX, posY, mX, mY, mR, mS) {
            _super.call(this, name);
            this.x = posX;
            this.y = posY;
            this.moveX = mX;
            this.moveY = mY;
            this.moveR = mR;
            this.scale = mS;
            this._counter = 0;
            this._moved = false;
        }
        //GAME METHODS
        Wiggle.prototype.update = function () {
            this._counter += createjs.Ticker.getMeasuredFPS();
            if (this._counter >= 1000) {
                if (this._moved == false) {
                    this.x += this.moveX;
                    this.y += this.moveY;
                    this.rotation += this.moveR;
                    this.scaleX += this.scale;
                    this.scaleY += this.scale;
                    this._moved = true;
                }
                else {
                    this.x -= this.moveX;
                    this.y -= this.moveY;
                    this.rotation -= this.moveR;
                    this.scaleX -= this.scale;
                    this.scaleY -= this.scale;
                    this._moved = false;
                }
                this._counter = 0;
            }
        };
        return Wiggle;
    })(objects.GameObject);
    objects.Wiggle = Wiggle;
})(objects || (objects = {}));
//# sourceMappingURL=wiggletext.js.map