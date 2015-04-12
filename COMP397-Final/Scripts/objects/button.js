var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//File Source: button.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: The Button script to easily navigate states
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(name, posX, posY) {
            _super.call(this, name);
            this.x = posX;
            this.y = posY;
            this.setButtonListeners();
        }
        Button.prototype.setButtonListeners = function () {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        };
        Button.prototype.onButtonOver = function () {
            this.rotation = 2;
        };
        Button.prototype.onButtonOut = function () {
            this.rotation = -2;
        };
        return Button;
    })(objects.GameObject);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map