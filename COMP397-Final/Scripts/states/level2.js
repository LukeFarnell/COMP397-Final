//File Source: level2.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: The second level of the game
var states;
(function (states) {
    var Level2 = (function () {
        function Level2() {
            this.nLevel = false;
            this.game = new createjs.Container();
            this.levelNum = new createjs.Text("Level 2", "30px Segoe Print", "#000000");
            this.game.addChild(this.levelNum);
            this.next = new objects.Button("play", 320, 240);
            this.next.on("click", this.nextLevel, this);
            //Corners
            this.corner = [];
            this.c1 = new objects.Angle(520, 240, 0);
            this.c1.on("click", this.clicked1, this);
            this.game.addChild(this.c1);
            this.c2 = new objects.Angle(520, 400, 2);
            this.c2.on("click", this.clicked2, this);
            this.game.addChild(this.c2);
            this.c3 = new objects.Angle(250, 400, 3);
            this.c3.on("click", this.clicked3, this);
            this.game.addChild(this.c3);
            this.c4 = new objects.Angle(250, 80, 1);
            this.c4.on("click", this.clicked4, this);
            this.game.addChild(this.c4);
            //Danger Wall
            this.danger = new objects.Danger(500, 150, 1, 0, false);
            this.game.addChild(this.danger);
            //Goal
            this.goal = new objects.Goal(500, 80);
            this.game.addChild(this.goal);
            //Cannon
            this.cannon = new objects.Cannon(100, 240);
            this.cannon.on("click", this.fire, this);
            //Bullet
            this.bullet = new objects.Ball(this.cannon);
            this.game.addChild(this.bullet);
            this.game.addChild(this.cannon);
            this.tries = new createjs.Text("Tries: " + tries, "30px Segoe Print", "#000000");
            this.tries.x = 50;
            this.tries.y = 170;
            this.game.addChild(this.tries);
            stage.addChild(this.game);
        }
        //CLICK METHODS===================================
        Level2.prototype.fire = function () {
            this.bullet.fire();
        };
        Level2.prototype.clicked1 = function () {
            this.c1.clicked = true;
        };
        Level2.prototype.clicked2 = function () {
            this.c2.clicked = true;
        };
        Level2.prototype.clicked3 = function () {
            this.c3.clicked = true;
        };
        Level2.prototype.clicked4 = function () {
            this.c4.clicked = true;
        };
        Level2.prototype.nextLevel = function () {
            this.nLevel = true;
        };
        //CHECK COLLISION==================================
        Level2.prototype.checkWallCollision = function () {
            var wall = this.danger;
            var collision = ndgmr.checkRectCollision(wall, this.bullet);
            if (collision) {
                this.bullet.reset();
                createjs.Sound.play(this.danger.sound);
                console.log("Crash!");
            }
        };
        Level2.prototype.checkCornerCollision = function () {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkPixelCollision(this.corner[c], this.bullet, 0);
                if (collision) {
                    this.bullet.angleHit(this.corner[c].rot);
                    createjs.Sound.play(this.bullet.sound);
                    console.log("Bang!");
                }
            }
        };
        Level2.prototype.checkCornerDistance = function () {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkRectCollision(this.corner[c], this.bullet);
                if (collision) {
                    this.corner[c].turnable = false;
                }
            }
        };
        // DISTANCE CHECKING METHOD
        Level2.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        Level2.prototype.checkGoalCollision = function () {
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
        Level2.prototype.update = function () {
            this.tries.text = "Tries: " + tries;
            this.bullet.update();
            this.danger.update();
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
            this.checkCornerDistance();
            this.checkGoalCollision();
            if (this.nLevel) {
                currentScore += tries * 10;
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_LEVEL3;
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
        return Level2;
    })();
    states.Level2 = Level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map