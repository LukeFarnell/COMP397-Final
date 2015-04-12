//File Source: background.ts
//Author: Luke Farnell
//Last Modified by: Luke Farnell
//Last Modified Date: 12/04/15
//Description:
var states;
(function (states) {
    var Instruction = (function () {
        function Instruction() {
            this.game = new createjs.Container();
            stage.addChild(this.game);
        }
        Instruction.prototype.update = function () {
            stage.update();
        };
        return Instruction;
    })();
    states.Instruction = Instruction;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map