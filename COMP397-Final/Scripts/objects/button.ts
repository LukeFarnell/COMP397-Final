//File Source: button.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: The Button script to easily navigate states
module objects {
    export class Button extends objects.GameObject {

        constructor(name: string, posX: number, posY: number) {
            super(name);

            this.x = posX;
            this.y = posY;

            this.setButtonListeners();
        }
        public setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }
        public onButtonOver() {
            this.rotation = 2;
        }
        public onButtonOut() {
            this.rotation = -2;
        }
    }
} 