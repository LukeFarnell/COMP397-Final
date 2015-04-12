//File Source: gametest.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 11/04/15
//Description: This was used for testing all the game mechanics

module states {
    export class Debug {
        public game: createjs.Container;

        public bullet: objects.Ball;
        public wall: objects.Block[];
        public corner: objects.Angle[];

        public c1: objects.Angle;
        public c2: objects.Angle;
        public c3: objects.Angle;
        public c4: objects.Angle;

        constructor() {
            this.game = new createjs.Container();

            this.wall = [];
            //this.wall[0] = new objects.Block(100, 100);
            //this.wall[1] = new objects.Block(500, 100);

            for (var w = 0; w < this.wall.length; w++) {
                //this.game.addChild(this.wall[w]);
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

            this.bullet = new objects.Ball();
            this.game.addChild(this.bullet);

            stage.addChild(this.game);
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
        }
    }
}  