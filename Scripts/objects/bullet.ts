namespace objects {
    export class Bullet extends objects.GameObject {

      public count:number=0;

      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager, "BulletImg");
        this.Start();
       
    }

  
      // private methods
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
      public Start(): void {
        this.scaleX=0.15;
        this.scaleY=0.15;
        this.halfWidth=460;
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
       

        //Keyboard Controls
        if (objects.Game.keyboardManager.moveLeft) { this.x -= 20; }

        if (objects.Game.keyboardManager.moveRight) { this.x += 20; }

        if(objects.Game.keyboardManager.jump){
            alert("isnide bullet jump");
            this.y -= 5; 
        }


    }
    }
  }
  