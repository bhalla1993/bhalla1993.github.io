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
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        //private _ocean: objects.Ocean;
        // constructors
        function Menu() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Menu.prototype.Start = function () {
            //this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("Mail Pilot", "80px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            //    this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);
            this.Main();
        };
        Menu.prototype.Update = function () {
            //this._ocean.Update();
        };
        Menu.prototype.Reset = function () {
        };
        Menu.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Menu.prototype.Main = function () {
            console.log("Starting - START SCENE");
            //this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            /*  this.addChild(this._startButton);
  
              this._startButton.on("click", function(){
                  managers.Game.CurrentState = config.Scene.GAMEPLAY;
              }, this);
          */
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map