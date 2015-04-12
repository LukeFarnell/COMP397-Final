var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//File Source: background.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is used to place the background image
var objects;
(function (objects) {
    var BG = (function (_super) {
        __extends(BG, _super);
        function BG() {
            _super.call(this, "bg");
            this.x = this.width / 2;
            this.y = this.height / 2;
        }
        return BG;
    })(objects.GameObject);
    objects.BG = BG;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map