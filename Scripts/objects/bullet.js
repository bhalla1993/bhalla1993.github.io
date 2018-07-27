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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        function Bullet(assetManager) {
            var _this = _super.call(this, assetManager, "BulletImg") || this;
            _this.count = 0;
            _this.Start();
            return _this;
        }
        // private methods
        Bullet.prototype._checkBounds = function () {
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
        Bullet.prototype.Start = function () {
            this.scaleX = 0.15;
            this.scaleY = 0.15;
            this.halfWidth = 460;
            this.y = 460;
        };
        Bullet.prototype.Update = function () {
            //this.x = managers.Game.Stage.mouseX;
            //  alert("inside player update ");
            this.Move();
            this._checkBounds();
        };
        Bullet.prototype.Reset = function () { };
        Bullet.prototype.Move = function () {
            /*
            console.log("move left : " + objects.Game.keyboardManager.moveLeft);
            console.log("move right : " + objects.Game.keyboardManager.moveRight);
            console.log("move up : " + objects.Game.keyboardManager.moveForward);
            console.log("move down : " + objects.Game.keyboardManager.moveBackward);
            */
            //Keyboard Controls
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= 20;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += 20;
            }
            if (objects.Game.keyboardManager.jump) {
                alert("isnide bullet jump");
                this.y -= 5;
            }
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map