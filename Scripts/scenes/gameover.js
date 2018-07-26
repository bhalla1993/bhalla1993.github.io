var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameOver = /** @class */ (function (_super) {
        __extends(GameOver, _super);
        //private _startButton: objects.Button;
        //private _ocean: objects.Ocean;
        // constructors
        function GameOver() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        GameOver.prototype.Start = function () {
            //this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("Mail Pilot", "80px", "Dock51", "#FFFF00", 50, 50, true);
            //this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);
            this.Main();
        };
        GameOver.prototype.Update = function () {
            //this._ocean.Update();
        };
        GameOver.prototype.Reset = function () {
        };
        GameOver.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        GameOver.prototype.Main = function () {
            console.log("Starting - START SCENE");
            //this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            //this.addChild(this._startButton);
            /*this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);*/
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map