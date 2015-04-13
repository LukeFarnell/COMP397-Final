//File Source: level3.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: The third level of the game

module states {
    export class Level3 {
        public game: createjs.Container;

        public cannon: objects.Cannon;
        public bullet: objects.Ball;
        public wall: objects.Block[];
        public corner: objects.Angle[];
        public goal: objects.Goal;

        public c1: objects.Angle;

        constructor() {
            this.game = new createjs.Container();

            this.wall = [];

            this.corner = [];

            this.c1 = new objects.Angle(100, 250, 1);
            this.c1.on("click", this.clicked1, this);
            this.game.addChild(this.c1);

            this.goal = new objects.Goal(0, 0);

            this.cannon = new objects.Cannon(400, 100);
            this.cannon.on("click", this.fire, this);

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
        //CHECK COLLISION==================================
        public checkWallCollision() {
            for (var w = 0; w < this.wall.length; w++) {
                var wall = this.wall[w];
                var collision = ndgmr.checkPixelCollision(wall, this.bullet, 0);
                if (collision) {
                    this.bullet.blockHit();
                    console.log("Boing!");
                }
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

        public update() {
            this.bullet.update();

            this.c1.update();
            this.corner[0] = this.c1;

            this.checkWallCollision();
            this.checkCornerCollision();

            stage.update();
        }
    }
}     