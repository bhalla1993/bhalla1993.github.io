module managers
{
    /**
     *
     *
     * @export
     * @class Keyboard
     */
    export class Keyboard
    {
        //private instance variable 
        //public instance variable 
        public moveForward:boolean;
        public moveBackward:boolean;
        public moveLeft:boolean;
        public moveRight:boolean;
        public jump:boolean;
        public enabled:boolean;
        public paused:boolean;
        

        /**
         *Creates an instance of Keyboard.
         * @memberof Keyboard
         */
        constructor()
        {
            this.enabled=true;
            document.addEventListener('keydown',this.onKeyDown.bind(this),false);
            document.addEventListener('keyup',this.onKeyUp.bind(this),false);
        }
        //public methods 
        /**
         *
         *
         * @param {KeyboardEvent} event
         * @memberof Keyboard
         */
        public onKeyDown(event:KeyboardEvent) :void
        {
        switch(event.keyCode){
            case config.Keys.W:
            case config.Keys.UP_ARROW:
            this.moveForward=true;
            break;
             
            case config.Keys.A:
            case config.Keys.LEFT_ARROW:
            this.moveLeft=true;
            break;

            case config.Keys.S:
            case config.Keys.DOWN_ARROW:
            this.moveBackward=true;
            break;
            
            case config.Keys.D:
            case config.Keys.RIGHT_ARROW:
            this.moveRight=true;
            break;

            case config.Keys.SPACE:
            this.jump=true;
            break;

        }
        }
/**
 *
 *
 * @param {KeyboardEvent} event
 * @memberof Keyboard
 */
public onKeyUp(event:KeyboardEvent) :void
        {
            
            switch(event.keyCode){
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                this.moveForward=false;
                break;
                 
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                this.moveLeft=false;
                break;
    
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                this.moveBackward=false;
                break;
                
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                this.moveRight=false;
                break;
    
                case config.Keys.SPACE:
                this.jump=false;
                break;
             
            }

        }
        
        
    }
}