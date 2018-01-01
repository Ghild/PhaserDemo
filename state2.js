demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff00ff';
        console.log('Now you are in stage 2');
        
        addChangeStateEventListener();
    },
    update: function(){}
};