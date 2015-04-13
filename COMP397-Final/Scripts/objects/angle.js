var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//File Source: angle.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 11/04/15
//Description:
var objects;
(function (objects) {
    var Angle = (function (_super) {
        __extends(Angle, _super);
        //CONSTRUCTOR
        function Angle(posX, posY, rot) {
            _super.call(this, "angle");
            this.x = posX;
            this.y = posY;
            this.rot = rot;
            console.log(this.rot);
            this.rotation = this.rot * 90;
            this.clicked = false;
            this.turnable = true;
            console.log("Turn: " + this.clicked);
        }
        //PUBLIC METHODS
        Angle.prototype.update = function () {
            if (this.clicked === true) {
                if (this.turnable == true) {
                    this.rot += 1;
                    if (this.rot == 4)
                        this.rot = 0;
                    this.rotation = this.rot * 90;
                    this.clicked = false;
                    console.log("Turned");
                }
            }
            this.turnable = true;
        };
        return Angle;
    })(objects.GameObject);
    objects.Angle = Angle;
})(objects || (objects = {}));
//# sourceMappingURL=angle.js.map