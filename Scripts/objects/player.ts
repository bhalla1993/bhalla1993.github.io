namespace objects {
    export class Player extends objects.GameObject {
      
    constructor() {
        super("PlayerImg");
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


        //  this.regX = 100;
        //  this.regY = 100;
          this.scaleX=0.15;
          this.scaleY=0.15;
          this.y = 420;          
      }
  
      public Update(): void {
          //this.x = managers.Game.Stage.mouseX;
          this.Move();
          this._checkBounds();
      }
  
      public Reset(): void {}
      
      public Move(): void {          
        console.log("move left : " + objects.Game.keyboardManager.moveLeft);

        //Keyboard Controls
        if (objects.Game.keyboardManager.moveLeft) { this.x -= 5; }

        if (objects.Game.keyboardManager.moveRight) { this.x += 5; }


    }
    }
  }
  