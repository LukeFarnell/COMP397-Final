var states;
(function (states) {
    var Debug = (function () {
        function Debug() {
            this.game = new createjs.Container();
            this.bullet = new objects.Ball();
            this.game.addChild(this.bullet);
            this.wall = [];
            this.wall[0] = new objects.Block(100, 400, 90);
            this.wall[1] = new objects.Block(500, 100, 90);
            this.wall[2] = new objects.Block(100, 250, 45);
            this.wall[3] = new objects.Block(500, 250, 0);
            for (var w = 0; w < this.wall.length; w++) {
                this.game.addChild(this.wall[w]);
            }
            stage.addChild(this.game);
        }
        Debug.prototype.checkCollision = function () {
            for (var w in this.wall) {
                var wall = this.wall[w];
                var collision = ndgmr.checkPixelCollision(wall, this.bullet, 1);
                if (collision) {
                    this.bullet.hit(wall.rot);
                    console.log("Boing!");
                }
            }
        };
        Debug.prototype.update = function () {
            this.bullet.update();
            this.checkCollision();
            stage.update();
        };
        return Debug;
    })();
    states.Debug = Debug;
})(states || (states = {}));
//# sourceMappingURL=gametest.js.map