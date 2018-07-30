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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "PlayerImg") || this;
            _this.count = 0;
            _this.isColliding = false;
            _this.Start();
            return _this;
        }
        // private methods
        Player.prototype._checkBounds = function () {
            // check right boundary
            if (this.x > config.Screen.WIDTH) {
                this.x = config.Screen.WIDTH - 19.5;
            }
            if (this.x <= 0) {
                this.x = 19.5;
            }
            if (this.count == 0) {
                this.x = this.halfWidth;
                this.count++;
            }
        };
        // public methods
        Player.prototype.Start = function () {
            // this.scaleX=0.15;
            // this.scaleY=0.15;
            // this.halfWidth=460;
            this.y = 460;
        };
        Player.prototype.Update = function () {
            //this.x = managers.Game.Stage.mouseX;
            //  alert("inside player update ");
            this.Move();
            this._checkBounds();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            //Keyboard Controls
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= 20;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += 20;
            }
            if (objects.Game.keyboardManager.jump) {
            }
        };
        Player.counter = 0;
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map