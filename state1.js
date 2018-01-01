demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#9966ff';
        console.log('Now you are in stage 1');
        
        addChangeStateEventListener();
    },
    update: function(){}
};