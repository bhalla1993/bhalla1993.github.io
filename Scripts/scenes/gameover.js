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
        // constructors
        function GameOver(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        GameOver.prototype.Start = function () {
            this.gameSound = createjs.Sound.play("GameMusic");
            this.gameSound.loop = -1;
            this.gameSound.volume = 0.1;
            this._gameNameLabel = new objects.Label("Game Over", "70px", "Arial", "#FFF000", 400, 100, true);
            this._background = new objects.Background();
            this._exitButton = new objects.Button("ExitButton", 600, 450, true);
            this.Main();
        };
        GameOver.prototype.Update = function () {
            this._background.Update();
        };
        GameOver.prototype.Reset = function () {
        };
        GameOver.prototype.Destroy = function () {
            this.gameSound.stop();
            this.removeAllChildren();
        };
        GameOver.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._background);
            this.addChild(this._gameNameLabel);
            this.addChild(this._exitButton);
            this._exitButton.on("click", function () {
                this.gameSound.stop();
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map