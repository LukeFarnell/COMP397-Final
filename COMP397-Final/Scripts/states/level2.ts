//File Source: level2.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: The second level of the game

module states {
    export class Level2 {
        public game: createjs.Container;

        public cannon: objects.Cannon;
        public bullet: objects.Ball;
        public corner: objects.Angle[];
        public goal: objects.Goal;

        public c1: objects.Angle;
        public c2: objects.Angle;
        public c3: objects.Angle;
        public c4: objects.Angle;

        public danger: objects.Danger;

        public next: objects.Button;
        public nLevel: boolean = false;

        constructor() {
            this.game = new createjs.Container();

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
            this.danger = new objects.Danger(500, 150, 1, false);
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

            stage.addChild(this.game);
        }
        //CLICK METHODS===================================
        public fire() {
            this.bullet.fire();
        }
        public clicked1() {
            this.c1.clicked = true;
        }
        public clicked2() {
            this.c2.clicked = true;
        }
        public clicked3() {
            this.c3.clicked = true;
        }
        public clicked4() {
            this.c4.clicked = true;
        }
        public nextLevel() {
            this.nLevel = true;
        }
        //CHECK COLLISION==================================
        public checkWallCollision() {
            var wall = this.danger;
            var collision = ndgmr.checkRectCollision(wall, this.bullet);
            if (collision) {
                this.bullet.reset();
                console.log("Crash!");
            }
        }
        public checkCornerCollision() {
            for (var c = 0; c < this.corner.length; c++) {
                var collision = ndgmr.checkPixelCollision(this.corner[c], this.bullet, 0);
                if (collision) {
                    this.bullet.angleHit(this.corner[c].rot);
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
            if (theDistance < (10)) {
                if (this.goal.isColliding !== true) {
                    this.game.removeChild(this.bullet);
                    this.game.addChild(this.next);
                    console.log("Winner!");
                }
            }
        }

        public update() {
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
            this.checkGoalCollision();

            if (this.nLevel) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_MENU;
                stateChanged = true;
            }

            stage.update();
        }
    }
}     