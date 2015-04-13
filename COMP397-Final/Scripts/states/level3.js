//File Source: level3.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: The third level of the game
var states;
(function (states) {
    var Level3 = (function () {
        function Level3() {
            this.nLevel = false;
            this.game = new createjs.Container();
            this.levelNum = new createjs.Text("Level 3", "30px Segoe Print", "#000000");
            this.game.addChild(this.levelNum);
            this.next = new objects.Button("play", 320, 240);
            this.next.on("click", this.nextLevel, this);
            this.wall = new objects.Block(100, 240);
            this.game.addChild(this.wall);
            this.danger = new objects.Danger(320, 100, 0, -0.5, true);
            this.game.addChild(this.danger);
            this.corner = [];
            this.c1 = new objects.Angle(570, 410, 3);
            this.c1.on("click", this.clicked1, this);
            this.game.addChild(this.c1);
            this.c2 = new objects.Angle(570, 240, 0);
            this.c2.on("click", this.clicked2, this);
            this.game.addChild(this.c2);
            this.c3 = new objects.Angle(570, 70, 2);
            this.c3.on("click", this.clicked3, this);
            this.game.addChild(this.c3);
            this.goal = new objects.Goal(100, 70);
            this.game.addChild(this.goal);
            this.cannon = new objects.Cannon(100, 410);
            this.cannon.on("click", this.fire, this);
            this.bullet = new objects.Ball(this.cannon);
            this.game.addChild(this.bullet);
            this.game.addChild(this.cannon);
            this.tries = new createjs.Text("Tries: " + tries, "30px Segoe Print", "#000000");
            this.tries.x = 50;
            this.tries.y = 340;
            this.game.addChild(this.tries);
            stage.addChild(this.game);
        }
        //CLICK METHODS===================================
        Level3.prototype.fire = function () {
            this.bullet.fire();
        };
        Level3.prototype.clicked1 = function () {
            this.c1.clicked = true;
        };
        Level3.prototype.clicked2 = function () {
            this.c2.clicked = true;
        };
        Level3.prototype.clicked3 = function () {
            this.c3.clicked = true;
        };
        Level3.prototype.nextLevel = function () {
            this.nLevel = true;
        };
        //CHECK COLLISION==================================
        Level3.prototype.checkDangerCollision = function () {
            var wall = this.danger;
            var collision = ndgmr.checkRectCollision(wall, this.bullet);
            if (collision) {
                this.bullet.reset();
                createjs.Sound.play(this.danger.sound);
                console.log("Crash!");
            }
        };
        Level3.prototype.checkWallCollision = function () {
            var wall = this.wall;
            var collision = ndgmr.checkRectCollision(wall, this.bullet);
            if (collision) {
                this.bullet.blockHit();
                createjs.Sound.play(this.bullet.sound);
                console.log("Boing!");
            }
        };
        Level3.prototype.checkCornerCollision = function () {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkPixelCollision(this.corner[c], this.bullet, 0);
                if (collision) {
                    this.bullet.angleHit(this.corner[c].rot);
                    createjs.Sound.play(this.bullet.sound);
                    console.log("Bang!");
                }
            }
        };
        Level3.prototype.checkCornerDistance = function () {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkRectCollision(this.corner[c], this.bullet);
                if (collision) {
                    this.corner[c].turnable = false;
                }
            }
        };
        // DISTANCE CHECKING METHOD
        Level3.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        Level3.prototype.checkGoalCollision = function () {
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
        Level3.prototype.update = function () {
            this.tries.text = "Tries: " + tries;
            this.bullet.update();
            this.danger.update();
            this.c1.update();
            this.c2.update();
            this.c3.update();
            this.corner[0] = this.c1;
            this.corner[1] = this.c2;
            this.corner[2] = this.c3;
            this.checkDangerCollision();
            this.checkWallCollision();
            this.checkCornerCollision();
            this.checkCornerDistance();
            this.checkGoalCollision();
            if (this.nLevel) {
                currentScore += tries * 10;
                if (fails == 0)
                    currentScore += 100;
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_MENU;
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
        return Level3;
    })();
    states.Level3 = Level3;
})(states || (states = {}));
//# sourceMappingURL=level3.js.map