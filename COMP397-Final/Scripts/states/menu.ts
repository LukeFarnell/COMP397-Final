//File Source: menu.ts
//Author: Louis Smith
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is the menu, where you can access the game and instructions

module states {
    export class Menu {
        public game: createjs.Container;

        public title: objects.Wiggle;
        public createdBy: objects.Wiggle;
        public play_btn: objects.Button;
        public inst_btn: objects.Button;

        constructor() {
            this.game = new createjs.Container();

            this.title = new objects.Wiggle("title", 0, 1, 0, 0.025);
            this.game.addChild(this.title);

            this.createdBy = new objects.Wiggle("by", -4, 0, -0.5, 0);
            this.game.addChild(this.createdBy);

            this.play_btn = new objects.Button("play", 140, 250);
            this.game.addChild(this.play_btn);

            this.inst_btn = new objects.Button("instruction", 200, 325);
            this.game.addChild(this.inst_btn);

            stage.addChild(this.game);
        }
        public update() {
            this.title.update();
            this.createdBy.update();

            stage.update();
        }
    }
} 