var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
        function GamePlay(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // private methods
        GamePlay.prototype._buildEnemies = function () {
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemies.push(new objects.Enemy(this.assetManager, "EnemyImg" + count));
            }
        };
        GamePlay.prototype._buildFood = function () {
            for (var count = 0; count < this._foodNum; count++) {
                this._food.push(new objects.Food(this.assetManager, "FoodImg" + count));
            }
        };
        // public methods
        GamePlay.prototype.Start = function () {
            this.gameSound = createjs.Sound.play("Bullet");
            this.gameSound.loop = -1;
            this.gameSound.volume = 0.0;
            this._background = new objects.Background();
            this._player = new objects.Player(this.assetManager);
            this._food = new Array();
            this._foodNum = 3;
            this._buildFood();
            this._enemies = new Array();
            this._enemyNum = 1;
            this._buildEnemies();
            this.Main();
        };
        GamePlay.prototype.Update = function () {
            var _this = this;
            this._background.Update();
            this._player.Update();
            this._food.forEach(function (food) {
                managers.Collision.check(_this._player, food);
                food.Update();
            });
            this._enemies.forEach(function (enemy) {
                managers.Collision.check(_this._player, enemy);
                enemy.Update();
            });
        };
        GamePlay.prototype.Reset = function () {
        };
        GamePlay.prototype.Destroy = function () {
            this.gameSound.stop();
            this.removeAllChildren();
        };
        GamePlay.prototype.Main = function () {
            console.log("Starting - GAME PLAY SCENE");
            this.addChild(this._background);
            this.addChild(this._player);
            for (var _i = 0, _a = this._food; _i < _a.length; _i++) {
                var food = _a[_i];
                this.addChild(food);
            }
            for (var _b = 0, _c = this._enemies; _b < _c.length; _b++) {
                var enemy = _c[_b];
                this.addChild(enemy);
            }
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        };
        return GamePlay;
    }(objects.Scene));
    scenes.GamePlay = GamePlay;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameplay.js.map