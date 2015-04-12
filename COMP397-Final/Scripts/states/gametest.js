//File Source: gametest.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 11/04/15
//Description: This was used for testing all the game mechanics
var states;
(function (states) {
    var Debug = (function () {
        function Debug() {
            this.game = new createjs.Container();
            this.wall = [];
            for (var w = 0; w < this.wall.length; w++) {
            }
            this.c1 = new objects.Angle(100, 250, 1);
            this.c1.on("click", this.clicked1, this);
            this.game.addChild(this.c1);
            this.c2 = new objects.Angle(500, 250, 0);
            this.c2.on("click", this.clicked2, this);
            this.game.addChild(this.c2);
            this.c3 = new objects.Angle(500, 100, 3);
            this.c3.on("click", this.clicked3, this);
            this.game.addChild(this.c3);
            this.c4 = new objects.Angle(100, 100, 2);
            this.c4.on("click", this.clicked4, this);
            this.game.addChild(this.c4);
            this.corner = [];
            this.corner[0] = this.c1;
            this.corner[1] = this.c2;
            this.corner[2] = this.c3;
            this.corner[3] = this.c4;
            this.cannon = new objects.Cannon(400, 100);
            this.cannon.on("click", this.fire, this);
            this.bullet = new objects.Ball(this.cannon);
            this.game.addChild(this.bullet);
            this.game.addChild(this.cannon);
            stage.addChild(this.game);
        }
        Debug.prototype.fire = function () {
            this.bullet.fire();
        };
        Debug.prototype.clicked1 = function () {
            this.c1.clicked = true;
        };
        Debug.prototype.clicked2 = function () {
            this.c2.clicked = true;
        };
        Debug.prototype.clicked3 = function () {
            this.c3.clicked = true;
        };
        Debug.prototype.clicked4 = function () {
            this.c4.clicked = true;
        };
        Debug.prototype.checkWallCollision = function () {
            for (var w = 0; w < this.wall.length; w++) {
                var wall = this.wall[w];
                var collision = ndgmr.checkPixelCollision(wall, this.bullet, 0);
                if (collision) {
                    this.bullet.blockHit();
                    console.log("Boing!");
                }
            }
        };
        Debug.prototype.checkCornerCollision = function () {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkPixelCollision(this.corner[c], this.bullet, 0);
                if (collision) {
                    this.bullet.angleHit(this.corner[c].rot);
                    console.log("Bang!");
                }
            }
        };
        Debug.prototype.update = function () {
            this.bullet.update();
            this.c1.update();
            this.c2.update();
            this.c3.update();
            this.c4.update();
            this.corner[0] = this.c1;
            this.corner[1] = this.c2;
            this.corner[2] = this.c3;
            this.corner[3] = this.c4;
            this.checkWallCollision();
            this.checkCornerCollision();
            stage.update();
        };
        return Debug;
    })();
    states.Debug = Debug;
})(states || (states = {}));
//# sourceMappingURL=gametest.js.map