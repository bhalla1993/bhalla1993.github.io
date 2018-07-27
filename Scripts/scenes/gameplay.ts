module scenes {
    export class GamePlay extends objects.Scene {
        // member variables
        private _background:objects.Background;
        public gameSound:createjs.AbstractSoundInstance;
        private _player:objects.Player;
        private _enemies:objects.Enemy[];
        private _enemyNum:number;


        // constructors
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

          // private methods
          private _buildEnemies():void {
            for (let count = 0; count < this._enemyNum; count++) {
                this._enemies.push(new objects.Enemy(this.assetManager,"EnemyImg"+count));
            }
        }
       

        // public methods
        public Start():void {

            this.gameSound = createjs.Sound.play("Bullet");
            this.gameSound.loop = -1;
            this.gameSound.volume = 0.0;


            this._background = new objects.Background();
            this._player=new objects.Player(this.assetManager);
         

             this._enemies = new Array<objects.Enemy>();
             this._enemyNum = 3;
 
            this._buildEnemies();            
            this.Main();
        }

        public Update():void {
            this._background.Update();
            this._player.Update();
            this._enemies.forEach(enemy => {
                enemy.Update();
            });

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
        // adding the cloud to the scene
        for (const enemy of this._enemies) {
            this.addChild(enemy);
        } 
       }
    }
}