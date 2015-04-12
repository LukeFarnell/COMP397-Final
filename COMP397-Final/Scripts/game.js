/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/ndgmr/ndgmr.collision.d.ts" />
//Author: Louis Smith
//File: game.ts
//Last modified: 30/03/2015
//Description:
var canvas;
var stage;
var assetLoader;
// Game Objects 
var currentState;
var currentStateFunction;
var stateChanged = false;
var bg;
var menu;
var instruction;
var level1;
var level2;
var level3;
var debugGame;
var manifest = [
    { id: "bg", src: "assets/images/Background.png" },
    { id: "title", src: "assets/images/Title.png" },
    { id: "by", src: "assets/images/CreatedBy.png" },
    { id: "play", src: "assets/images/Play.png" },
    { id: "instruction", src: "assets/images/InstructionBtn.png" },
    { id: "ball", src: "assets/images/Ball.png" },
    { id: "cannon", src: "assets/images/Cannon.png" },
    { id: "goal", src: "assets/images/Goal.png" },
    { id: "angle", src: "assets/images/Angle.png" },
    { id: "block", src: "assets/images/Block2.png" }
];
function preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function
    assetLoader.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    //Background Objects
    bg = new objects.BG();
    stage.addChild(bg);
    currentState = constants.STATE_MENU;
    //currentState = constants.STATE_DEBUG;
    changeState(currentState);
}
function gameLoop() {
    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    }
    else {
        currentStateFunction.update();
    }
}
function changeState(state) {
    switch (state) {
        case constants.STATE_MENU:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.STATE_INSTRUCTIONS:
            // instantiate instruction screen
            instruction = new states.Instruction();
            currentStateFunction = instruction;
            break;
        case constants.STATE_LEVEL1:
            // instantiate instruction screen
            level1 = new states.Level1();
            currentStateFunction = level1;
            break;
        case constants.STATE_LEVEL2:
            // instantiate instruction screen
            level2 = new states.Level1();
            currentStateFunction = level2;
            break;
        case constants.STATE_LEVEL3:
            // instantiate instruction screen
            level3 = new states.Level1();
            currentStateFunction = level3;
            break;
        case constants.STATE_DEBUG:
            // instantiate game over screen
            debugGame = new states.Debug();
            currentStateFunction = debugGame;
            break;
    }
}
//# sourceMappingURL=game.js.map