//File Source: ball.ts
//Author: Louis Smith
//Last Modified by: Louis Smith
//Last Modified Date: 12/04/15
//Description:

module objects {
    export class Ball extends objects.GameObject {

        public xSpeed: number;
        public ySpeed: number;

        private _speed: number;

        private _fired: boolean = false;
        private _temp: number;
        private _resetX: number;
        private _resetY: number;

        //CONSTRUCTOR
        constructor(cannon: objects.Cannon) {
            super("ball");

            this.x = cannon.x;
            this.y = cannon.y;

            this._resetX = this.x;
            this._resetY = this.y;

            this._speed = 4;

            this.xSpeed = this._speed;
            this.ySpeed = 0;

            this._dx = 0;
            this._dy = 0;
        }
        //PUBLIC METHODS
        public update() {
            if (this._fired == true) {
                this.x += this._dx;
                this.y += this._dy;

                this.xSpeed = this._dx;
                this.ySpeed = this._dy;
            }
            if (this.x < 0 - this.width || this.x > 640 + this.width) {
                this.reset();
            }
            if (this.y < 0 - this.height || this.y > 480 + this.height) {
                this.reset();
            }
        }
        public fire() {
            if (this._fired == false) {
                this._dx = this.xSpeed;
                this._dy = this.ySpeed;
                this._fired = true;
            }
        }
        public blockHit() {
            if (this._dx != 0) {
                this._dx *= -1;
            }
            if (this._dy != 0) {
                this._dy *= -1;
            }
            console.log("x: " + this._dx + " | y: " + this._dy);
        }
        public angleHit(angle: number) {
            switch (angle) {
                case 0:
                    if (this._dy == 0) {
                        if (this._dx > 0) {
                            this._temp = -this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                        }
                        else if (this._dx < 0) {
                            this._dx *= -1;
                            break;
                        }
                    }
                    if (this._dx == 0) {
                        if (this._dy > 0) {
                            this._temp = -this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                        }
                        else if (this._dy < 0) {
                            this._dy *= -1;
                            break;
                        }
                    }  
                case 1:
                    if (this._dy == 0) {
                        if (this._dx < 0) {
                            this._temp = this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                        }
                        else if (this._dx > 0) {
                            this._dx *= -1;
                            break;
                        }
                    }
                    if (this._dx == 0) {
                        if (this._dy > 0) {
                            this._temp = this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                        }
                        else if (this._dy < 0) {
                            this._dy *= -1;
                            break;
                        }
                    }  
                case 2:
                    if (this._dy == 0) {
                        if (this._dx < 0) {
                            this._temp = -this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                        }
                        else if (this._dx > 0) {
                            this._dx *= -1;
                            break;
                        }
                    }
                    if (this._dx == 0) {
                        if (this._dy < 0) {
                            this._temp = -this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                        }
                        else if (this._dy > 0) {
                            this._dy *= -1;
                            break;
                        }
                    }
                    break;
                case 3:
                    if (this._dy == 0) {
                        if (this._dx > 0) {
                            this._temp = this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                        }
                        else if (this._dx < 0) {
                            this._dx *= -1;
                            break;
                        }
                    }
                    if (this._dx == 0) {
                        if (this._dy < 0) {
                            this._temp = this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                        }
                        else if (this._dy > 0) {
                            this._dy *= -1;
                            break;
                        }
                    }
                    break;
            }
            console.log("x: " + this._dx + " | y: " + this._dy);
        }
        public reset() {
            this._fired = false;
            this.x = this._resetX;
            this.y = this._resetY;
            this.xSpeed = this._speed;
            this.ySpeed = 0;
        }
    }
} 