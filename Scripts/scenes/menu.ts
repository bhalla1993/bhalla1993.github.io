module scenes {
    export class Menu extends objects.Scene {
        // member variables
        private _background:objects.Background;
        private _gameNameLabel: objects.Label;
        private _singlePlayer: objects.Label;
        private _levelLabel: objects.Label;
        private _playButton:objects.Button;
        private _instructionButton:objects.Button;
        private _exitButton:objects.Button;
        
        public gameSound:createjs.AbstractSoundInstance;

        // constructors
        /**
         *Creates an instance of Menu.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Menu
         */
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        // private methods

        // public methods
        /**
         *Start method is called at the start of the class
         *
         * @memberof Menu
         */
        public Start():void {

            this.gameSound = createjs.Sound.play("GameMusic");
            this.gameSound.loop = -1;
            this.gameSound.volume = 0.1;


            this._gameNameLabel=new objects.Label("Feeding Fish","70px","Arial","#FFF000",400,100,true);
            this._background = new objects.Background();
            this._singlePlayer=new objects.Label("Single Player","50px","Arial","#FFF000",400,200,true);            
            this._levelLabel=new objects.Label("Level 1","70px","Arial","#FFF000",400,300,true);            
            this._playButton=new objects.Button("PlayButton",200,450,true);
            this._instructionButton=new objects.Button("InstructionButton",400,450,true);
            this._exitButton=new objects.Button("ExitButton",600,450,true);
            
            
            this.Main();
        }

        /**
         *Update method is called when stage of scene is updated.
         *
         * @memberof Menu
         */
        public Update():void {
            this._background.Update();
            
        }

        /**
         *Reset method is called while restarting the state of scene
         *
         * @memberof Menu
         */
        public Reset():void {

        }

        /**
         *Destroy method is called while scene is destroyed
         *
         * @memberof Menu
         */
        public Destroy():void {
            this.gameSound.stop();
            this.removeAllChildren();
        }

        /**
         *
         *
         * @memberof Menu
         */
        public Main():void {
            console.log(`Starting - START SCENE`);
            //this.addChild(this._ocean);
            this.addChild(this._background);

            this.addChild(this._gameNameLabel);
            this.addChild(this._singlePlayer);
            this.addChild(this._levelLabel);
            this.addChild(this._playButton);
            this._playButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.GAMEPLAY;
            }, this);
            
            this.addChild(this._instructionButton);
            this.addChild(this._exitButton);
            this._exitButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.GAMEOVER;
            }, this);
            this.addChild(this._instructionButton);

            this._instructionButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INSTRUCTIONS;
            }, this);
        
       }
    }
}