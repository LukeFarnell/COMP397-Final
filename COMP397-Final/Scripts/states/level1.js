//File Source: level1.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is used for ease of making more levels
var states;
(function (states) {
    var Level1 = (function () {
        function Level1() {
            this.nLevel = false;
            this.game = new createjs.Container();
            this.levelNum = new createjs.Text("Level 1", "30px Segoe Print", "#000000");
            this.game.addChild(this.levelNum);
            this.next = new objects.Button("play", 320, 240);
            this.next.on("click", this.nextLevel, this);
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
            this.tries = new createjs.Text("Tries: " + tries, "30px Segoe Print", "#000000");
            this.tries.x = 50;
            this.tries.y = 70;
            this.game.addChild(this.tries);
            stage.addChild(this.game);
        }
        //CLICK METHODS===================================
        Level1.prototype.fire = function () {
            this.bullet.fire();
        };
        Level1.prototype.clicked1 = function () {
            this.c1.clicked = true;
        };
        Level1.prototype.nextLevel = function () {
            this.nLevel = true;
        };
        //CHECK COLLISION==================================
        Level1.prototype.checkWallCollision = function () {
            for (var w = 0; w < this.wall.length; w++) {
                var wall = this.wall[w];
                var collision = ndgmr.checkPixelCollision(wall, this.bullet, 0);
                if (collision) {
                    this.bullet.blockHit();
                    createjs.Sound.play(this.bullet.sound);
                    console.log("Boing!");
                }
            }
        };
        Level1.prototype.checkCornerCollision = function () {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkPixelCollision(this.corner[c], this.bullet, 0);
                if (collision) {
                    this.bullet.angleHit(this.corner[c].rot);
                    createjs.Sound.play(this.bullet.sound);
                    console.log("Bang!");
                }
            }
        };
        Level1.prototype.checkCornerDistance = function () {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkRectCollision(this.corner[c], this.bullet);
                if (collision) {
                    this.corner[c].turnable = false;
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
                    createjs.Sound.play(this.bullet.sound);
                    this.game.removeChild(this.bullet);
                    this.bullet.stop();
                    this.game.addChild(this.next);
                    console.log("Winner!");
                }
            }
        };
        Level1.prototype.update = function () {
            this.tries.text = "Tries: " + tries;
            this.bullet.update();
            this.c1.update();
            this.corner[0] = this.c1;
            this.checkWallCollision();
            this.checkCornerCollision();
            this.checkCornerDistance();
            this.checkGoalCollision();
            if (this.nLevel) {
                currentScore += tries * 10;
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_LEVEL2;
                stateChanged = true;
            }
            if (tries == 0) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_GAMEOVER;
                stateChanged = true;
            }
            stage.update();
        };
        return Level1;
    })();
    states.Level1 = Level1;
})(states || (states = {}));
//# sourceMappingURL=level1.js.map