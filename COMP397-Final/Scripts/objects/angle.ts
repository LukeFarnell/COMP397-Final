//File Source: angle.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 11/04/15
//Description:
module objects {
    export class Angle extends objects.GameObject {
        public rot: number;
        public clicked: boolean;

        //CONSTRUCTOR
        constructor(posX: number, posY: number, rot: number) {
            super("angle");

            this.x = posX;
            this.y = posY;
            this.rot = rot;
            console.log(this.rot);
            this.rotation = this.rot * 90;

            this.clicked = false;
            console.log("Turn: " + this.clicked);
        }
        //PUBLIC METHODS
        public update() {
            if (this.clicked === true) {
                this.rot += 1;
                if (this.rot == 4)
                    this.rot = 0;
                this.rotation = this.rot * 90;
                this.clicked = false;
                console.log("Turned");
            }
        }
    }
}  