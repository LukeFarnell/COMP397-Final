//File Source: background.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description:

module states {
    export class Instruction {
        public game: createjs.Container;

        constructor() {
            this.game = new createjs.Container();
        }
        public update() {
            stage.update();
        }
    }
}  