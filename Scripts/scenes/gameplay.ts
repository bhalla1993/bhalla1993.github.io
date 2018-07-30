module scenes {
    export class GamePlay extends objects.Scene {
        // member variables
        private _background:objects.Background;
        public gameSound:createjs.AbstractSoundInstance;
        private _player:objects.Player;
        private _enemies:objects.Enemy[];
        private _enemyNum:number;

        private _food:objects.Food[];
        private _foodNum:number;

        // constructors
        /**
         *Creates an instance of GamePlay.
         * @param {createjs.LoadQueue} assetManager
         * @memberof GamePlay
         */
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

          // private methods
        /**
         *This method help to build enemies in game play scene using enemy number count.
         *
         * @private
         * @memberof GamePlay
         */
        private _buildEnemies():void {
            for (let count = 0; count < this._enemyNum; count++) {
                this._enemies.push(new objects.Enemy(this.assetManager,"EnemyImg"+count));
            }
        }
        /**
         *This method is used to build food items in game play scene.
         *
         * @private
         * @memberof GamePlay
         */
        private _buildFood():void {
            for (let count = 0; count < this._foodNum; count++) {
                this._food.push(new objects.Food(this.assetManager,"FoodImg"+count));
            }
        }
       

        // public methods
        /**
         * Start Method used to start the game 
         *
         * @memberof GamePlay
         */
        public Start():void {

            this.gameSound = createjs.Sound.play("Bullet");
            this.gameSound.loop = -1;
            this.gameSound.volume = 0.0;


            this._background = new objects.Background();
            this._player=new objects.Player(this.assetManager);
         

            this._food = new Array<objects.Food>();
            this._foodNum = 1;
 
            this._buildFood();

             
            this._enemies = new Array<objects.Enemy>();
            this._enemyNum = 1;

            
            this._buildEnemies();            
            this.Main();
        }

        /**
         *Update method is called on change of state of an object   
         *
         * @memberof GamePlay
         */
        public Update():void {
            this._background.Update();
            this._player.Update();
            this._food.forEach(food => {
                managers.Collision.check(this._player,food);
                food.Update();
            });

            this._enemies.forEach(enemy => {
                managers.Collision.check(this._player, enemy);
               // enemy.isColliding=true;
                enemy.Update();
            });
            

        }

        /**
         *Reset method is called when scene needs to reset
         *
         * @memberof GamePlay
         */
        public Reset():void {

        }

        /**
         *Destroy method is called on destroying the scene with all of its children
         *
         * @memberof GamePlay
         */
        public Destroy():void {
            this.gameSound.stop();
            this.removeAllChildren();
        }

        /**
         *This is the main method of game play class, which is called after intializing all the required components.
         *All the objects used in this scene are added in this method to scene.
         * @memberof GamePlay
         */
        public Main():void {
            console.log(`Starting - GAME PLAY SCENE`);
        
            this.addChild(this._background);
            this.addChild(this._player);            
        
            for (const food of this._food) 
            {
                this.addChild(food);
            } 

            for (const enemy of this._enemies) {
            this.addChild(enemy);
            } 
        this.addChild(managers.Game.ScoreBoard.LivesLabel);
        this.addChild(managers.Game.ScoreBoard.ScoreLabel);
       }
    }
}