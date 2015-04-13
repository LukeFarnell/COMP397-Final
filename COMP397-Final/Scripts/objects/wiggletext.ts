//File Source: wiggletext.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is used to animate the text images
module objects {
    export class Wiggle extends objects.GameObject {

        public moveX: number;
        public moveY: number;
        public moveR: number;
        public scale: number;

        private _counter: number;
        private _moved: boolean;

        constructor(name: string,posX: number, posY: number, mX: number, mY: number, mR: number, mS: number) {
            super(name);

            this.x = posX;
            this.y = posY;

            this.moveX = mX;
            this.moveY = mY;
            this.moveR = mR;
            this.scale = mS;

            this._counter = 0;
            this._moved = false;
        }
        //GAME METHODS
        public update() {
            this._counter += createjs.Ticker.getMeasuredFPS();
            if (this._counter >= 1000) {
                if (this._moved == false) {
                    this.x += this.moveX;
                    this.y += this.moveY;
                    this.rotation += this.moveR;
                    this.scaleX += this.scale;
                    this.scaleY += this.scale;

                    this._moved = true;
                }
                else {
                    this.x -= this.moveX;
                    this.y -= this.moveY;
                    this.rotation -= this.moveR;
                    this.scaleX -= this.scale;
                    this.scaleY -= this.scale;

                    this._moved = false;
                }
                this._counter = 0;
            }
        }
    }
}  