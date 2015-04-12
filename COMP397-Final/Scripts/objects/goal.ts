//File Source: goal.ts
//Author: Louis Smith
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is the goal of where you want the ball to be
module objects {
    export class Goal extends objects.GameObject {

        constructor(posX: number, posY: number) {
            super("goal");

            this.x = posX;
            this.y = posY;
        }
    }
} 