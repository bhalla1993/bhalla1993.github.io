module objects {
    export class Button extends createjs.Bitmap {
        // member variables
        public isCentered:boolean;
        public width:number;
        public height:number;
        public halfWidth:number;
        public halfHeight:number;
        public isColliding:boolean;

        // constructors

        constructor(imagePath:string, x:number = 0, y:number = 0, isCentered:boolean = false) {
            
            super(managers.Game.AssetManager.getResult(imagePath));
            
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.isColliding = false;

            this.isCentered = isCentered;

            if(this.isCentered)
            {
                this.regX=this.halfWidth;
                this.regY=this.halfHeight;
                
            }
            this.x = x;
            this.y = y;

            this.on("mouseover", this._MouseOver);
            this.on("mouseout", this._MouseOut);
        }

        // private methods
        private _MouseOver():void {
            this.alpha = 0.7; // change alpha transparency to 70%
        }

        private _MouseOut():void {
            this.alpha = 1.0; // change alpha transparency to 100%
        }


        // public methods

        /**
         * The Start Method performs object initialization
         * 
         * @returns {void}
         */
        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }
    }
}