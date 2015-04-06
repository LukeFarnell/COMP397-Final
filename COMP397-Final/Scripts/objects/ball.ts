module objects {
    export class Ball extends objects.GameObject {

        public xSpeed: number;
        public ySpeed: number;

        private _temp: number;

        //CONSTRUCTOR
        constructor() {
            super("ball");

            this.x = 200;
            this.y = 240;

            this.xSpeed = 3;
            this.ySpeed = 0;

            this._dx = this.xSpeed;
            this._dy = this.ySpeed;
        }
        //PUBLIC METHODS
        public update() {
            this.x += this._dx;
            this.y += this._dy;
        }
        public hit(angle: number) {
            if (this._dy == 0) {
                if (this._dx < 0) {
                    switch (angle) {
                        case 0:
                            this._dx *= -1;
                            break;
                        case 90:
                            this._dy *= -1;
                            break;
                        case 45:
                            this._temp = -this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                    }
                }
                else {
                    switch (angle) {
                        case 0:
                            this._dx *= -1;
                            break;
                        case 90:
                            this._dy *= -1;
                            break;
                        case 45:
                            this._temp = -this._dx;
                            this._dx = this._dy;
                            this._dy = this._temp;
                            break;
                    }
                }
                this.xSpeed = this._dx;
                this.ySpeed = this._dy;
            }
            else if (this._dx == 0) {
                if (this._dy < 0) {
                    switch (angle) {
                        case 0:
                            this._dx *= -1;
                            break;
                        case 90:
                            this._dy *= -1;
                            break;
                        case 45:
                            this._temp = -this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                    }
                }
                else {
                    switch (angle) {
                        case 0:
                            this._dx *= -1;
                            break;
                        case 90:
                            this._dy *= -1;
                            break;
                        case 45:
                            this._temp = -this._dy;
                            this._dy = this._dx;
                            this._dx = this._temp;
                            break;
                    }
                }
                this.xSpeed = this._dx;
                this.ySpeed = this._dy;
            }
        }
        public reset() {

        }
    }
} 