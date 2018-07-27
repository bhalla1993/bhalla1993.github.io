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
    var GamePlay = /** @class */ (function (_super) {
        __extends(GamePlay, _super);
        // constructors
        function GamePlay() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        GamePlay.prototype.Start = function () {
            this.gameSound = createjs.Sound.play("Bullet");
            this.gameSound.loop = -1;
            this.gameSound.volume = 0.1;
            this._background = new objects.Background();
            this._player = new objects.Player();
            this.Main();
        };
        GamePlay.prototype.Update = function () {
            this._background.Update();
        };
        GamePlay.prototype.Reset = function () {
        };
        GamePlay.prototype.Destroy = function () {
            this.gameSound.stop();
            this.removeAllChildren();
        };
        GamePlay.prototype.Main = function () {
            console.log("Starting - GAME PLAY SCENE");
            //this.addChild(this._ocean);
            this.addChild(this._background);
            this.addChild(this._player);
        };
        return GamePlay;
    }(objects.Scene));
    scenes.GamePlay = GamePlay;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameplay.js.map