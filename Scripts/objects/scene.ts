module objects{
    export class Scene extends  createjs.Container{
        // instance var 
        // punlic var
        public assetManager;
        //private 
        /**
         *Creates an instance of Scene.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Scene
         */
        constructor(assetManager:createjs.LoadQueue){
            super();
            this.assetManager = assetManager;
        }

        /**
         *
         *
         * @memberof Scene
         */
        public Init():void{
            
        }
        /**
         *
         *
         * @memberof Scene
         */
        public Main():void{

        }
        /**
         *
         *
         * @memberof Scene
         */
        public Start():void{

        }
        public Update():void{
            
        }
       
    }
}