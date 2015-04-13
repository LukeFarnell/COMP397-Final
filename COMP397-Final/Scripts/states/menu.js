//File Source: menu.ts
//Author: Louis Smith
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is the menu, where you can access the game and instructions
var states;
(function (states) {
    var Menu = (function () {
        function Menu() {
            this.play = false;
            this.inst = false;
            this.game = new createjs.Container();
            this.title = new objects.Wiggle("title", 320, 240, 0, 1, 0, 0.025);
            this.game.addChild(this.title);
            this.createdBy = new objects.Wiggle("by", 320, 240, -4, 0, -0.5, 0);
            this.game.addChild(this.createdBy);
            this.play_btn = new objects.Button("play", 140, 250);
            this.play_btn.on("click", this.playGame, this);
            this.game.addChild(this.play_btn);
            this.inst_btn = new objects.Button("instruction", 200, 325);
            this.inst_btn.on("click", this.instructionMenu, this);
            this.game.addChild(this.inst_btn);
            stage.addChild(this.game);
        }
        Menu.prototype.playGame = function () {
            this.play = true;
        };
        Menu.prototype.instructionMenu = function () {
            this.inst = true;
        };
        Menu.prototype.update = function () {
            this.title.update();
            this.createdBy.update();
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_LEVEL1;
                stateChanged = true;
            }
            if (this.inst) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_GAMEOVER;
                stateChanged = true;
            }
            stage.update();
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map