var states;
(function (states) {
    var Menu = (function () {
        function Menu() {
            this.game = new createjs.Container();
        }
        Menu.prototype.update = function () {
            stage.update();
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map