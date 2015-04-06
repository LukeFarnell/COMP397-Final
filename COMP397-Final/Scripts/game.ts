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
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

// Game Objects 
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;


var menu: states.Menu;
var debugGame: states.Debug;

var manifest = [
    { id: "ball", src: "assets/images/Ball.png" },
    { id: "block", src: "assets/images/Block1.png" }
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

    //currentState = constants.STATE_MENU;
    currentState = constants.STATE_DEBUG;
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

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.STATE_MENU:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.STATE_DEBUG:
            // instantiate game over screen
            debugGame = new states.Debug();
            currentStateFunction = debugGame;
            break;
    }
}