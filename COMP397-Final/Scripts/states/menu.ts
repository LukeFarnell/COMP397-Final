module states {
    export class Menu {
        public game: createjs.Container;

        constructor() {
            this.game = new createjs.Container();
        }
        public update() {
            stage.update();
        }
    }
} 