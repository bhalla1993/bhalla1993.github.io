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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        function Enemy(assetManager, imageString) {
            var _this = _super.call(this, assetManager, imageString) || this;
            _this.counter = 0;
            _this.isColliding = false;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
            if (this.x > config.Screen.WIDTH) {
                this._horizontalSpeed = Math.floor((Math.random() * 4) - 2);
            }
            if (this.x <= 0) {
                this._horizontalSpeed = Math.floor((Math.random() * 4) + 2);
            }
        };
        // public methods
        Enemy.prototype.Start = function () {
            //this.regX = this.halfWidth;
            //this.regY = this.halfHeight;
            //this.scaleX=0.2;
            //this.scaleY=0.2;
            this.Reset();
        };
        Enemy.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Enemy.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 5); // between -2 and 2 ppf
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map