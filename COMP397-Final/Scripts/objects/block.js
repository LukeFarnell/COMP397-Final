var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Block = (function (_super) {
        __extends(Block, _super);
        //CONSTRUCTOR
        function Block(posX, posY, rot) {
            _super.call(this, "block");
            this.x = posX;
            this.y = posY;
            this.rot = rot;
            this.rotation = this.rot;
        }
        //PUBLIC METHODS
        Block.prototype.update = function () {
        };
        return Block;
    })(objects.GameObject);
    objects.Block = Block;
})(objects || (objects = {}));
//# sourceMappingURL=block.js.map