module scenes {
    export class Instructions extends objects.Scene {
        // member variables
        private _background:objects.Background;
        private _gameNameLabel: objects.Label;
        private _instructionText: objects.Label;
        
        private _backButton:objects.Button;
        
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._gameNameLabel=new objects.Label("Instructions","50px","Arial","#FFF000",400,30,true);
            this._background = new objects.Background();
            this._backButton=new objects.Button("BackButton",400,450,true);
            this._instructionText=new objects.Label("Hello World", "50px","Arial","#FFFFFF",400,150,true);            
            this._instructionText.textBaseline = "alphabetic";
            this.Main();
        }

        public Update():void {
            this._background.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            //this.addChild(this._ocean);
            this.addChild(this._background);

            this.addChild(this._gameNameLabel);
            this.addChild(this._instructionText);
            this.addChild(this._backButton);

            
            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
    
       }
    }
}