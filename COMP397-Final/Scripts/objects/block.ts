module objects {
    export class Block extends objects.GameObject {
        public rot: number;

        //CONSTRUCTOR
        constructor(posX: number, posY: number, rot: number) {
            super("block");

            this.x = posX;
            this.y = posY;
            this.rot = rot;
            this.rotation = this.rot;

        }
        //PUBLIC METHODS
        public update() {
            
        }
    }
} 