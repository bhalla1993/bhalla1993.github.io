module scenes {
    export class GamePlay extends objects.Scene {
        // member variables
        private _background:objects.Background;
        public gameSound:createjs.AbstractSoundInstance;
        private _player:objects.Player;

        // constructors
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this.gameSound = createjs.Sound.play("Bullet");
            this.gameSound.loop = -1;
            this.gameSound.volume = 0.0;


            this._background = new objects.Background();
            this._player=new objects.Player(this.assetManager);
            
            this.Main();
        }

        public Update():void {
            this._background.Update();
            this._player.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.gameSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - GAME PLAY SCENE`);
            //this.addChild(this._ocean);
            this.addChild(this._background);
            this.addChild(this._player);            

       }

    }
}