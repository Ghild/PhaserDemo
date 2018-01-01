demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#0066cc';
        console.log('Now you are in stage 9');
        
        addChangeStateEventListener();
    },
    update: function(){}
};