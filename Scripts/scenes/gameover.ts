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
           

            this._gameNameLabel=new objects.Label("Game Over","90px","Arial","#FFF000",400,200,true);
            this._background = new objects.Background();
            this._restartButton=new objects.Button("RestartButton",300,400,true);
            this._exitButton=new objects.Button("ExitButton",500,400,true);
            

            this.Main();
        }

        /**
         *Update method is used to update the state of object
         *
         * @memberof GameOver
         */
        public Update():void {
            this._background.Update();
        }

        /**
         *Reset method is used to reset the state of objects
         *
         * @memberof GameOver
         */
        public Reset():void {

        }

        /**
         *
         *
         * @memberof GameOver
         */
        public Destroy():void {
            this.gameSound.stop();
            this.removeAllChildren();
        }

        /**
         *Main method is called after intialisation
         *
         * @memberof GameOver
         */
        public Main():void {
            console.log(`Starting - START SCENE`);
            this.addChild(this._background);

            this.addChild(this._gameNameLabel);
            this.addChild(this._restartButton);

            this._restartButton.on("click", function(){
                this.gameSound.stop();
                managers.Game.ScoreBoard.Lives = 5;
                managers.Game.ScoreBoard.Score = 0;
                managers.Game.CurrentState = config.Scene.GAMEPLAY;
            }, this);


            this.addChild(this._exitButton);
            this._exitButton.on("click", function(){
                this.gameSound.stop();
                managers.Game.ScoreBoard.Lives = 5;
                managers.Game.ScoreBoard.Score = 0;
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);


        }
    }
}