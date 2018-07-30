module objects{
    export class Background extends createjs.Bitmap
    {
        // member variables
    private _verticalSpeed: number;

    /**
     *Creates an instance of Background.
     * @memberof Background
     */
    constructor()
    {
        super(managers.Game.AssetManager.getResult("BackGround"));
        this.Start();    
    }

    // private methods
    /**
     *Method used to set the boundary of objects
     *
     * @private
     * @memberof Background
     */
    private _checkBounds(): void {
        // check top boundary
        if (this.y >= 0) {
           
          this.Reset();
        }
      }
  
    // public methods
    /**
     *Start method is called to intialise the class
     *
     * @memberof Background
     */
    public Start(): void 
    {
        this._verticalSpeed=8;
        this.Reset();
    }

    /**
     *Update method is used to update the state of obejcts
     *
     * @memberof Background
     */
    public Update(): void 
    {
        this.y+=this._verticalSpeed;
        this._checkBounds();              
    }

    public Reset(): void {
        this.y = -605;

    }
  }

}