demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#00ffcc';
        console.log('Now you are in stage 8');
        
        addChangeStateEventListener();
    },
    update: function(){}
};