demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#cccc00';
        console.log('Now you are in stage 3');
        
        addChangeStateEventListener();
    },
    update: function(){}
};