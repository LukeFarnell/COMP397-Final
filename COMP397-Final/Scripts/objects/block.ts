//File Source: block.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 11/04/15
//Description:
module objects {
    export class Block extends objects.GameObject {

        //CONSTRUCTOR
        constructor(posX: number, posY: number) {
            super("block");

            this.x = posX;
            this.y = posY;

        }
        //PUBLIC METHODS
        public update() {
            
        }
    }
} 