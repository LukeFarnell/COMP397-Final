//File Source: block.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 12/04/15
//Description: This is the AI that can destroy you if you get in the way
module objects {
    export class Danger extends objects.GameObject {
        public move: boolean;
        public rot: number;
        public sY: number;

        private _speed: number;

        private _change: boolean = false;
        //CONSTRUCTOR
        constructor(posX: number, posY: number, rot: number, scale: number, move: boolean) {
            super("danger");

            this.x = posX;
            this.y = posY;
            this.rot = rot;
            this.rotation = this.rot * 90;
            this.sY = scale;
            this.scaleY += scale;
            this.move = move;

            this._speed = 1.6;
        }
        //PUBLIC METHODS
        public update() {
            if (this.move) {
                if (this.rot % 2 == 0) {
                    if (this._change == true) {
                        this.y += this._speed;
                        if (this.y >= 480 - -(100 * this.sY))
                            this._change = false;
                    }
                    else {
                        this.y -= this._speed;
                        if (this.y <= -100 * this.sY)
                            this._change = true;
                    }

                }
                else {
                    if (this._change == true) {
                        this.x -= this._speed;
                        if (this.x <= 100)
                            this._change = false;
                    }
                    else {
                        this.x += this._speed;
                        if (this.x >= 540)
                            this._change = true;
                    }
                }
            }
        }
    }
}  