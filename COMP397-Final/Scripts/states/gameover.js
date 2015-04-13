//File Source: menu.ts
//Author: Louis Smith
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is the menu, where you can access the game and instructions
var states;
(function (states) {
    var GameOver = (function () {
        function GameOver() {
            this.checkTryAgain = false;
            this.checkMenu = false;
            this.game = new createjs.Container();
            this.gameOverTitle = new objects.Wiggle("gameover", 320, 240, 0, -4, 0, -0.05);
            this.game.addChild(this.gameOverTitle);
            this.sadFace = new objects.Wiggle("sadface", 120, 340, 0, 0, 45, 0.08);
            this.game.addChild(this.sadFace);
            this.menu_btn = new objects.Button("menu", 325, 420);
            this.menu_btn.on("click", this.menu, this);
            this.game.addChild(this.menu_btn);
            this.try_btn = new objects.Button("tryagain", 325, 330);
            this.try_btn.on("click", this.tryAgain, this);
            this.game.addChild(this.try_btn);
            stage.addChild(this.game);
        }
        //CLICK METHODS
        GameOver.prototype.tryAgain = function () {
            this.checkTryAgain = true;
        };
        GameOver.prototype.menu = function () {
            this.checkMenu = true;
        };
        GameOver.prototype.update = function () {
            this.gameOverTitle.update();
            this.sadFace.update();
            if (this.checkTryAgain) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_LEVEL1;
                stateChanged = true;
            }
            if (this.checkMenu) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.STATE_MENU;
                stateChanged = true;
            }
            stage.update();
        };
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map