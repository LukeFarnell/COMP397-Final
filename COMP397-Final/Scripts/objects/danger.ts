//File Source: block.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 12/04/15
//Description: This is the AI that can destroy you if you get in the way
module objects {
    export class Danger extends objects.GameObject {
        public move: boolean;
        public rot: number;
        //CONSTRUCTOR
        constructor(posX: number, posY: number, rot: number, move: boolean) {
            super("danger");

            this.x = posX;
            this.y = posY;
            this.rot = rot;
            this.rotation = this.rot * 90;
            this.move = move;
        }
        //PUBLIC METHODS
        public update() {
            if (this.move) {
                if (this.rot % 2 == 0) {

                }
                else {

                }
            }
        }
    }
}  