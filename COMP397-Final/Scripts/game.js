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
var gameover;
var level1;
var level2;
var level3;
var debugGame;
var tries;
var fails;
var currentScore;
var bestScore;
var manifest = [
    { id: "bg", src: "assets/images/Background.png" },
    { id: "title", src: "assets/images/Title.png" },
    { id: "by", src: "assets/images/CreatedBy.png" },
    { id: "play", src: "assets/images/Play.png" },
    { id: "instruction", src: "assets/images/InstructionBtn.png" },
    { id: "titleinst", src: "assets/images/InstructionScreen/iTitle.png" },
    { id: "txtinst", src: "assets/images/InstructionScreen/iTxt.png" },
    { id: "cannoninst", src: "assets/images/InstructionScreen/iCannon.png" },
    { id: "ballinst", src: "assets/images/InstructionScreen/iBall.png" },
    { id: "triangleinst", src: "assets/images/InstructionScreen/iTriangle.png" },
    { id: "goalinst", src: "assets/images/InstructionScreen/iGoal.png" },
    { id: "checkinst", src: "assets/images/InstructionScreen/iCheck.png" },
    { id: "wallinst", src: "assets/images/InstructionScreen/iWall.png" },
    { id: "nopeinst", src: "assets/images/InstructionScreen/iNope.png" },
    { id: "gameover", src: "assets/images/GameOver.png" },
    { id: "sadface", src: "assets/images/SadFace.png" },
    { id: "menu", src: "assets/images/Menu.png" },
    { id: "tryagain", src: "assets/images/TryAgain.png" },
    { id: "ball", src: "assets/images/Ball2.png" },
    { id: "cannon", src: "assets/images/Cannon2.png" },
    { id: "goal", src: "assets/images/Goal.png" },
    { id: "angle", src: "assets/images/Angle2.png" },
    { id: "danger", src: "assets/images/Block3.png" },
    { id: "block", src: "assets/images/Block4.png" },
    { id: "bounce", src: "assets/audio/Bounce.wav" },
    { id: "hit", src: "assets/audio/Hit.wav" },
    { id: "music", src: "assets/audio/Bacon Pancakes.wav" }
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
    tries = constants.TRIES;
    fails = 0;
    currentScore = 0;
    bestScore = 0;
    createjs.Sound.play("music", { loop: "-1" });
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
            tries = constants.TRIES;
            fails = 0;
            break;
        case constants.STATE_INSTRUCTIONS:
            // instantiate instruction screen
            instruction = new states.Instruction();
            currentStateFunction = instruction;
            break;
        case constants.STATE_GAMEOVER:
            // instantiate game over screen
            gameover = new states.GameOver();
            currentStateFunction = gameover;
            break;
        case constants.STATE_LEVEL1:
            // instantiate level 1 screen
            level1 = new states.Level1();
            currentStateFunction = level1;
            tries = constants.TRIES;
            currentScore = 0;
            break;
        case constants.STATE_LEVEL2:
            // instantiate level 2 screen
            level2 = new states.Level2();
            currentStateFunction = level2;
            tries = constants.TRIES;
            break;
        case constants.STATE_LEVEL3:
            // instantiate level 3 screen
            level3 = new states.Level3();
            currentStateFunction = level3;
            tries = constants.TRIES;
            break;
        case constants.STATE_DEBUG:
            // instantiate debug screen
            debugGame = new states.Debug();
            currentStateFunction = debugGame;
            break;
    }
}
//# sourceMappingURL=game.js.map