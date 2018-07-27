module scenes {
    export class GameOver extends objects.Scene {
        // member variables
        private _background:objects.Background;
        private _gameNameLabel: objects.Label;
        public gameSound:createjs.AbstractSoundInstance;
        private _exitButton:objects.Button;
        private _restartButton:objects.Button;



        // constructors
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this.gameSound = createjs.Sound.play("GameMusic");
            this.gameSound.loop = -1;
            this.gameSound.volume = 0;
           

            this._gameNameLabel=new objects.Label("Game Over","70px","Arial","#FFF000",400,100,true);
            this._background = new objects.Background();
            this._exitButton=new objects.Button("ExitButton",600,450,true);
            

            this.Main();
        }

        public Update():void {
            this._background.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.gameSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            this.addChild(this._background);

            this.addChild(this._gameNameLabel);
            this.addChild(this._exitButton);

            this._exitButton.on("click", function(){
                this.gameSound.stop();

                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        }
    }
}