//File Source: level1.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is used for ease of making more levels

module states {
    export class Level1 {
        public game: createjs.Container;
        public levelNum: createjs.Text;
        public tries: createjs.Text;

        public cannon: objects.Cannon;
        public bullet: objects.Ball;
        public wall: objects.Block[];
        public corner: objects.Angle[];
        public goal: objects.Goal;

        public c1: objects.Angle;

        public next: objects.Button;
        public nLevel: boolean = false;

        constructor() {
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
        public fire() {
            this.bullet.fire();
        }
        public clicked1() {
            this.c1.clicked = true;
        }
        public nextLevel() {
            this.nLevel = true;
        }
        //CHECK COLLISION==================================
        public checkWallCollision() {
            for (var w = 0; w < this.wall.length; w++) {
                var wall = this.wall[w];
                var collision = ndgmr.checkPixelCollision(wall, this.bullet, 0);
                if (collision) {
                    this.bullet.blockHit();
                    createjs.Sound.play(this.bullet.sound);
                    console.log("Boing!");
                }
            }
        }
        public checkCornerCollision() {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkPixelCollision(this.corner[c], this.bullet, 0);
                if (collision) {
                    this.bullet.angleHit(this.corner[c].rot);
                    createjs.Sound.play(this.bullet.sound);
                    console.log("Bang!");
                }
            }
        }
        // DISTANCE CHECKING METHOD
        public distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }
        public checkGoalCollision() {
            var ballPosition: createjs.Point = new createjs.Point(this.bullet.x, this.bullet.y);
            var goalPosition: createjs.Point = new createjs.Point(this.goal.x, this.goal.y);
            var theDistance = this.distance(ballPosition, goalPosition);
            if (theDistance < (10)){
                if (this.goal.isColliding !== true) {
                    createjs.Sound.play(this.bullet.sound);
                    this.game.removeChild(this.bullet);
                    this.bullet.stop();
                    this.game.addChild(this.next);
                    console.log("Winner!");
                }
            }
        }

        public update() {
            this.tries.text = "Tries: " + tries;

            this.bullet.update();

            this.c1.update();
            this.corner[0] = this.c1;

            this.checkWallCollision();
            this.checkCornerCollision();
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
        }
    }
}    