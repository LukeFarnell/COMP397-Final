﻿//File Source: menu.ts
//Author: Louis Smith
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: This is the menu, where you can access the game and instructions

module states {
    export class Menu {
        public game: createjs.Container;

        public current: createjs.Text;
        public best: createjs.Text;
        public txt: createjs.Text;

        public title: objects.Wiggle;
        public createdBy: objects.Wiggle;
        public play_btn: objects.Button;
        public inst_btn: objects.Button;

        public play: boolean = false;
        public inst: boolean = false;

        constructor() {
            this.game = new createjs.Container();

            this.current = new createjs.Text("Current Score: " + currentScore, "30px Segoe Print", "#000000");
            this.current.x = 340;
            this.current.y = 190;
            this.game.addChild(this.current);

            this.best = new createjs.Text("Best Score: " + bestScore, "30px Segoe Print", "#000000");
            this.best.x = 340;
            this.best.y = 230;
            this.game.addChild(this.best);

            this.txt = new createjs.Text("", "30px Segoe Print", "#000000");
            this.txt.x = 340;
            this.txt.y = 270;
            this.game.addChild(this.txt);

            this.title = new objects.Wiggle("title",320, 240, 0, 1, 0, 0.025);
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

        public playGame() {
            this.play = true;
        }

        public instructionMenu() {
            this.inst = true;
        }
        public messagePicker() {
            if (currentScore == 0 && bestScore == 0) {
                this.txt.text = "Did you even play?";
            }
            if (currentScore < bestScore) {
                this.txt.text = "That is just sad";
            }
            if (currentScore > bestScore) {
                bestScore = currentScore;
                this.best.text = "Best Score: " + bestScore;
                this.txt.text = "New Record!";
            }
            if (currentScore == 190) {
                this.txt.text = "Perfect!";
            }
        }

        public update() {
            this.messagePicker();
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
                currentState = constants.STATE_INSTRUCTIONS;
                stateChanged = true;
            }

            stage.update();
        }
    }
} 