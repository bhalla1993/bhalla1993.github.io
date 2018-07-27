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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // constructors
        function Instructions(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instructions.prototype.Start = function () {
            this._gameNameLabel = new objects.Label("Instructions", "50px", "Arial", "#FFF000", 400, 30, true);
            this._background = new objects.Background();
            this._backButton = new objects.Button("BackButton", 400, 450, true);
            this._instructionText = new objects.Label("Hello World", "50px", "Arial", "#FFFFFF", 400, 150, true);
            this._instructionText.textBaseline = "alphabetic";
            this.Main();
        };
        Instructions.prototype.Update = function () {
            this._background.Update();
        };
        Instructions.prototype.Reset = function () {
        };
        Instructions.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instructions.prototype.Main = function () {
            console.log("Starting - START SCENE");
            //this.addChild(this._ocean);
            this.addChild(this._background);
            this.addChild(this._gameNameLabel);
            this.addChild(this._instructionText);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map