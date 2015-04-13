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
        function Danger(posX, posY, rot, move) {
            _super.call(this, "danger");
            this.x = posX;
            this.y = posY;
            this.rot = rot;
            this.rotation = this.rot * 90;
            this.move = move;
        }
        //PUBLIC METHODS
        Danger.prototype.update = function () {
            if (this.move) {
                if (this.rot % 2 == 0) {
                }
                else {
                }
            }
        };
        return Danger;
    })(objects.GameObject);
    objects.Danger = Danger;
})(objects || (objects = {}));
//# sourceMappingURL=danger.js.map