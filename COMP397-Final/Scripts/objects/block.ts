module objects {
    export class Block extends objects.GameObject {
        //CONSTRUCTOR
        constructor(posX: number, posY: number, rot: number) {
            super("block");

            this.x = 100;
            this.y = 240;
        }
        //PUBLIC METHODS
        public update() {
            
        }
    }
} 