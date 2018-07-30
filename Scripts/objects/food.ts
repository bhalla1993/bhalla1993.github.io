namespace objects {
    export class Food extends objects.GameObject {
      
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
      public counter:number=0;

      /**
       *Creates an instance of Food.
       * @param {createjs.LoadQueue} assetManager
       * @param {string} imageString
       * @memberof Food
       */
      constructor(assetManager: createjs.LoadQueue,imageString:string) {
        super(assetManager, imageString);
        this.Start();       
    }

      // private methods
      /**
       *Check bounds method used to set the bound of boundary.
       *
       * @private
       * @memberof Food
       */
      private _checkBounds(): void {
        // check bottom boundary
        if (this.y > config.Screen.HEIGHT + this.halfHeight) {
            this.Reset();
        }

        if(this.x > config.Screen.WIDTH) {
            this._horizontalSpeed=Math.floor((Math.random() * 4) -2);          
        }
         if(this.x <=0) {
            this._horizontalSpeed=Math.floor((Math.random() * 4) +2); 
          }

      }
  
      // public methods
      /**
       *Start method is the first method called after constructor intialise.
       *
       * @memberof Food
       */
      public Start(): void {
        this.Reset();
      }
  
      /**
       *Uodate method is used to update the state of scene.
       *
       * @memberof Food
       */
      public Update(): void {
        this.y += this._verticalSpeed;
        this.x += this._horizontalSpeed;
        this._checkBounds();
      }
  
      /**
       *Reset method is called on scene reset condition.
       *
       * @memberof Food
       */
      public Reset(): void {
        this._verticalSpeed =  Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
        this._horizontalSpeed = Math.floor((Math.random() * 4) -5); // between -2 and 2 ppf
        
        this.y = -this.height;
        this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
      }
    }
  }
  