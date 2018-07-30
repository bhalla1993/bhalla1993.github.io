module scenes {
    export class Instructions extends objects.Scene {
        // member variables
        private _background:objects.Background;
        private _gameNameLabel: objects.Label;
        private _instructionText: objects.Label;
        private _instructions:string;

        private _backButton:objects.Button;
        
        // constructors
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
        // private methods

        // public methods
        /**
         * Start method is called at the start of the class
         *
         * @memberof Instructions
         */
        public Start():void {
            this._gameNameLabel=new objects.Label("Instructions For Feeding Fish(Single Level Game)","30px","Arial","#FFF000",400,30,true);
            this._background = new objects.Background();
            this._backButton=new objects.Button("BackButton",400,450,true);
            this._instructions="A. How to Play\n\n";
            this._instructions+="1. Controls\n\n \t\to A(MoveLeft) or Left Arrow Key\n\n \t\to D(MoveRight) or Right Arrow Key\n\n";
            this._instructions+="2. Score\n\n";
            this._instructions+="\t\t\to 100 Points when player eats every single food item(Apple, Grape or Watermelon)\n\n";
            this._instructions+="3. Live(s)\n\n";
            this._instructions+="\t\t\to Total 5 lives, one life reduced when player eats mushroom food item\n\n";
            this._instructions+="\t\t\to When there is no life left, GAME OVER\n\n";
            this._instructionText=new objects.Label(this._instructions, "20px","Arial","#FFFFFF",400,280,true);            
            this._instructionText.textBaseline = "alphabetic";
            this.Main();
        }

        /**
         *Update method is called when stage of scene is updated.
         *
         * @memberof Instructions
         */
        public Update():void {
            this._background.Update();
        }

        /**
         *Reset method is called while restarting the state of scene
         *
         * @memberof Instructions
         */
        public Reset():void {

        }

        /**
         *Destroy method is called while scene is destroyed 
         *
         * @memberof Instructions
         */
        public Destroy():void {
            this.removeAllChildren();
        }

        /**
         *All the objects used in this scene are added in this method to scene.
         *This is the main method of class.
         *
         * @memberof Instructions
         */
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