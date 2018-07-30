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
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        // constructors
        function Menu(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Menu.prototype.Start = function () {
            this.gameSound = createjs.Sound.play("GameMusic");
            this.gameSound.loop = -1;
            this.gameSound.volume = 0.1;
            this._gameNameLabel = new objects.Label("Feeding Fish", "70px", "Arial", "#FFF000", 400, 100, true);
            this._background = new objects.Background();
            this._singlePlayer = new objects.Label("Single Player", "50px", "Arial", "#FFF000", 400, 200, true);
            this._levelLabel = new objects.Label("Level 1", "70px", "Arial", "#FFF000", 400, 300, true);
            this._playButton = new objects.Button("PlayButton", 200, 450, true);
            this._instructionButton = new objects.Button("InstructionButton", 400, 450, true);
            this._exitButton = new objects.Button("ExitButton", 600, 450, true);
            this.Main();
        };
        Menu.prototype.Update = function () {
            this._background.Update();
        };
        Menu.prototype.Reset = function () {
        };
        Menu.prototype.Destroy = function () {
            this.gameSound.stop();
            this.removeAllChildren();
        };
        Menu.prototype.Main = function () {
            console.log("Starting - START SCENE");
            //this.addChild(this._ocean);
            this.addChild(this._background);
            this.addChild(this._gameNameLabel);
            this.addChild(this._singlePlayer);
            this.addChild(this._levelLabel);
            this.addChild(this._playButton);
            this._playButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.GAMEPLAY;
            }, this);
            this.addChild(this._instructionButton);
            this.addChild(this._exitButton);
            this._exitButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.GAMEOVER;
            }, this);
            this.addChild(this._instructionButton);
            this._instructionButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INSTRUCTIONS;
            }, this);
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map