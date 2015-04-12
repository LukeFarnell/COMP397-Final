//File Source: background.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is used to place the background image
module objects {
    export class BG extends objects.GameObject {
        constructor() {
            super("bg");

            this.x = this.width / 2;
            this.y = this.height / 2;
        }
    }
} 