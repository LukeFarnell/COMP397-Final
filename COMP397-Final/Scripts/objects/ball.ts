module objects {
    export class Ball extends objects.GameObject {

        public xSpeed: number;
        public ySpeed: number;

        //CONSTRUCTOR
        constructor() {
            super("ball");

            this.x = 100;
            this.y = 240;

            this.xSpeed = 5;
            this.ySpeed = 0;

            this._dx = this.xSpeed;
            this._dy = this.ySpeed;
        }
        //PUBLIC METHODS
        public update() {
            this._dx += this.xSpeed;
            this._dy += this.ySpeed;

            if (this.isColliding) {
                this.hit();
            }
        }
        public hit() {
            this.xSpeed *= -1;
        }
        public reset() {

        }
    }
} 