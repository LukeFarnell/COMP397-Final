//File Source: background.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description:

module states {
    export class Instruction {
        public game: createjs.Container;

        public title: objects.Wiggle;
        public txt: objects.Wiggle;
        public cannon: objects.Wiggle;
        public ball: objects.Wiggle;
        public triangle: objects.Wiggle;
        public goal: objects.Wiggle;
        public check: objects.Wiggle;
        public wall: objects.Wiggle;
        public nope: objects.Wiggle;

        public menu_btn: objects.Button;
        public checkMenu: boolean = false;

        constructor() {
            this.game = new createjs.Container();

            this.title = new objects.Wiggle("titleinst", 320, 240, 0, -3, 0, 0.02);
            this.game.addChild(this.title);

            this.txt = new objects.Wiggle("txtinst", 320, 240, 1, 0, 0.05, 0);
            this.game.addChild(this.txt);

            this.cannon = new objects.Wiggle("cannoninst", 100, 260, -10, 0, 0, -0.07);
            this.game.addChild(this.cannon);

            this.ball = new objects.Wiggle("ballinst", 200, 260, 100, 0, 0, 0);
            this.game.addChild(this.ball);

            this.triangle = new objects.Wiggle("triangleinst", 140, 390, 0, 0, 90, 0.03);
            this.game.addChild(this.triangle);

            this.goal = new objects.Wiggle("goalinst", 400, 260, 0, 0, 4, 0);
            this.game.addChild(this.goal);

            this.check = new objects.Wiggle("checkinst", 700, 260, -200, 0, 0, 0);
            this.game.addChild(this.check);

            this.wall = new objects.Wiggle("wallinst", 310, 400, 0, 30, 90, 0);
            this.game.addChild(this.wall);

            this.nope = new objects.Wiggle("nopeinst", 400, 400, -90, -50, 0, 0);
            this.game.addChild(this.nope);

            this.menu_btn = new objects.Button("menu", 550, 430);
            this.menu_btn.on("click", this.menu, this);
            this.game.addChild(this.menu_btn);

            stage.addChild(this.game);
        }

        public menu() {
            this.checkMenu = true;
        }

        public update() {

            this.title.update();
            this.txt.update();
            this.ball.update();
            this.cannon.update()
            this.check.update();
            this.goal.update();
            this.nope.update();
            this.wall.update();
            this.triangle.update();

            if (this.checkMenu) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_MENU;
                stateChanged = true;
            }

            stage.update();
        }
    }
}  