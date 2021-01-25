class game{
    constructor(){

    }
    getState(){
        var gameStateRef = db.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    update(state){
        db.ref('/').update({gameState:state})
    }
    start(){
        if(gameState == 0){
            p = new player();
            p.getCount();
            f = new form();
            f.display();
        }
    }
}