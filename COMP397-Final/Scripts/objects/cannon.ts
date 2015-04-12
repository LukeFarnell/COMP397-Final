//File Source: cannon.ts
//Author: Louis Smith
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This will fire the ball
module objects {
    export class Cannon extends objects.GameObject {

        constructor(posX: number, posY: number) {
            super("cannon");

            this.x = posX;
            this.y = posY;
        }
    }
}