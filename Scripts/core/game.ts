//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function(){
    // Game Variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let AssetManager: createjs.LoadQueue;
    let CurrentScene: objects.Scene;
    let CurrentState: config.Scene;
    let TextureAtlas: createjs.SpriteSheet;
    
    
    let Manifest = [
        {id: "bullet", src:"/Assets/audio/bullet.mp3"},
        {id: "StartButton", src:"/Assets/images/StartButton.png"}
    ]

    

    function Init():void {
        console.log(`%c Assets Loading...`,"font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }

    function Start():void {
        console.log(`%c Game Initializing...`,"font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);

        managers.Game.Stage = stage; // create a reference to the stage class

        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        CurrentState = config.Scene.MENU;
        managers.Game.CurrentState = CurrentState;

        //ScoreBoard = new managers.ScoreBoard;
        //managers.Game.ScoreBoard = ScoreBoard;

        //textureData.images = [AssetManager.getResult("textureAtlas")];
        //TextureAtlas = new createjs.SpriteSheet(textureData);
        //managers.Game.TextureAtlas = TextureAtlas;

        //stats = new Stats();
        //SetupStats();

        // This is where all the magic happens
        Main();
    }

    function Update():void {
        //stats.begin();
        if(CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }

        CurrentScene.Update();

        stage.update();

        //stats.end();
    }

    function Main():void {
        console.log(`%c Switching Scenes...`,"font-style:italic; font-size:16px; color:blue;");

        if(CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }    
        switch(CurrentState) {
            case config.Scene.MENU:
            CurrentScene = new scenes.Menu();
            break;

            case config.Scene.GAMEPLAY:
            CurrentScene = new scenes.GamePlay();
            break;

            case config.Scene.GAMEOVER:
            CurrentScene = new scenes.GameOver();
            break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();