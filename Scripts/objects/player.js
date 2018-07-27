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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this, "PlayerImg") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Player.prototype._checkBounds = function () {
            // check right boundary
            if (this.x > config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Player.prototype.Start = function () {
            //this.scaleX=300;
            //this.scaleY=300;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 200;
        };
        Player.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        };
        Player.prototype.Reset = function () { };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map