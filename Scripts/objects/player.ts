namespace objects {
    export class Player extends objects.GameObject {
      
 
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager, "PlayerImg");
        this.Start();
       
    }

  
      // private methods
      private _checkBounds():void {
          // check right boundary
        if(this.x > config.Screen.WIDTH - this.halfWidth ) {
            this.x = config.Screen.WIDTH - this.halfWidth;
        }

        // check left boundary
        if(this.x < this.halfWidth) {
            this.x = this.halfWidth;
        }
      }
  
      // public methods
      public Start(): void {
        this.scaleX=0.15;
        this.scaleY=0.15;
        this.y = 460;     
      }
  
      public Update(): void {
          //this.x = managers.Game.Stage.mouseX;
        //  alert("inside player update ");
          this.Move();
          this._checkBounds();
      }
  
      public Reset(): void {}
      
      public Move(): void {          
        /*
        console.log("move left : " + objects.Game.keyboardManager.moveLeft);
        console.log("move right : " + objects.Game.keyboardManager.moveRight);
        console.log("move up : " + objects.Game.keyboardManager.moveForward);
        console.log("move down : " + objects.Game.keyboardManager.moveBackward);
        */

        //Keyboard Controls
        if (objects.Game.keyboardManager.moveLeft) { this.x -= 5; }

        if (objects.Game.keyboardManager.moveRight) { this.x += 5; }


    }
    }
  }
  