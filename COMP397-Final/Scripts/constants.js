//File Source: angle.ts
//Author: Louis Smith
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description: All the global variables that will never change
var constants;
(function (constants) {
    constants.TRIES = 3;
    //STATES
    constants.STATE_MENU = 0;
    constants.STATE_GAMEOVER = 1;
    constants.STATE_INSTRUCTIONS = 2;
    constants.STATE_LEVEL1 = 3;
    constants.STATE_LEVEL2 = 4;
    constants.STATE_LEVEL3 = 5;
    constants.STATE_DEBUG = 154;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map