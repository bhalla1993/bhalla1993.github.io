module objects{
    export class Background extends createjs.Bitmap
    {
        // member variables
    private _verticalSpeed: number;

    constructor()
    {
        super(managers.Game.AssetManager.getResult("BackGround"));
        this.Start();    
    }

    // private methods
    private _checkBounds(): void {
        // check top boundary
        if (this.y >= 0) {
          this.Reset();
        }
      }
  
    // public methods
    public Start(): void 
    {
        this._verticalSpeed=8;
        this.Reset();
    }

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