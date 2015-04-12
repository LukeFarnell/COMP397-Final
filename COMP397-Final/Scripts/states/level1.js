//File Source: level1.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is used for ease of making more levels
var states;
(function (states) {
    var Level1 = (function () {
        function Level1() {
            this.game = new createjs.Container();
            this.wall = [];
            this.wall[0] = new objects.Block(320, 400);
            for (var w = 0; w < this.wall.length; w++) {
                this.game.addChild(this.wall[w]);
            }
            this.corner = [];
            this.c1 = new objects.Angle(320, 100, 3);
            this.c1.on("click", this.clicked1, this);
            this.game.addChild(this.c1);
            this.goal = new objects.Goal(560, 140);
            this.game.addChild(this.goal);
            this.cannon = new objects.Cannon(100, 140);
            this.cannon.on("click", this.fire, this);
            this.bullet = new objects.Ball(this.cannon);
            this.game.addChild(this.bullet);
            this.game.addChild(this.cannon);
            stage.addChild(this.game);
        }
        //CLICK METHODS===================================
        Level1.prototype.fire = function () {
            this.bullet.fire();
        };
        Level1.prototype.clicked1 = function () {
            this.c1.clicked = true;
        };
        //CHECK COLLISION==================================
        Level1.prototype.checkWallCollision = function () {
            for (var w = 0; w < this.wall.length; w++) {
                var wall = this.wall[w];
                var collision = ndgmr.checkPixelCollision(wall, this.bullet, 0);
                if (collision) {
                    this.bullet.blockHit();
                    console.log("Boing!");
                }
            }
        };
        Level1.prototype.checkCornerCollision = function () {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkPixelCollision(this.corner[c], this.bullet, 0);
                if (collision) {
                    this.bullet.angleHit(this.corner[c].rot);
                    console.log("Bang!");
                }
            }
        };
        // DISTANCE CHECKING METHOD
        Level1.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        Level1.prototype.checkGoalCollision = function () {
            var ballPosition = new createjs.Point(this.bullet.x, this.bullet.y);
            var goalPosition = new createjs.Point(this.goal.x, this.goal.y);
            var theDistance = this.distance(ballPosition, goalPosition);
            if (theDistance < (10)) {
                if (this.goal.isColliding !== true) {
                    this.game.removeChild(this.bullet);
                    console.log("Winner!");
                }
            }
        };
        Level1.prototype.update = function () {
            this.bullet.update();
            this.c1.update();
            this.corner[0] = this.c1;
            this.checkWallCollision();
            this.checkCornerCollision();
            this.checkGoalCollision();
            stage.update();
        };
        return Level1;
    })();
    states.Level1 = Level1;
})(states || (states = {}));
//# sourceMappingURL=level1.js.map