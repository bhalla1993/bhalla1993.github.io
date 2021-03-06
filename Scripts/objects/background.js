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
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        function Background() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("BackGround")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background.prototype._checkBounds = function () {
            // check top boundary
            if (this.y >= 0) {
                this.Reset();
            }
        };
        // public methods
        Background.prototype.Start = function () {
            this._verticalSpeed = 8;
            this.Reset();
        };
        Background.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Background.prototype.Reset = function () {
            this.y = -605;
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map