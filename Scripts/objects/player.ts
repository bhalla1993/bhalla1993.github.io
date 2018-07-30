namespace objects {
    export class Player extends objects.GameObject {
      private _bulletNumber:number;
      public count:number=0;
      public static counter:number=0;
      

      /**
       *Creates an instance of Player.
       * @param {createjs.LoadQueue} assetManager
       * @memberof Player
       */
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager, "PlayerImg");        
        this.isColliding=false;
        this.Start();

       
    }

  
      // private methods
      /**
       *Set the boundary of player 
       *
       * @private
       * @memberof Player
       */
      private _checkBounds():void {
       
        // check right boundary
        if(this.x > config.Screen.WIDTH) {
          this.x = config.Screen.WIDTH-19.5;
        }
       if(this.x <=0) {
          this.x =19.5;
        }
        if(this.count==0)
        {
          this.x = this.halfWidth
          this.count++;
        }

      }
  
      // public methods
      /**
       *Method called after constructor intialisation
       *
       * @memberof Player
       */
      public Start(): void {
       // this.scaleX=0.15;
       // this.scaleY=0.15;
       // this.halfWidth=460;
        this.y = 460;     
      
      }
  
      /**
       *Update method is used to update the state of object
       *
       * @memberof Player
       */
      public Update(): void {
          //this.x = managers.Game.Stage.mouseX;
        //  alert("inside player update ");
          this.Move();
         this._checkBounds();
      }
  
      /**
       *
       *
       * @memberof Player
       */
      public Reset(): void {}
      
      /**
       *Move method is called when player uses the keyboard to move object left - right
       *
       * @memberof Player
       */
      public Move(): void {          
        

        //Keyboard Controls
        if (objects.Game.keyboardManager.moveLeft) {   this.x -= 20; }

        if (objects.Game.keyboardManager.moveRight) { this.x += 20; }

        if(objects.Game.keyboardManager.jump){
          




        }
    }
    }
  }
  