demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#66ccff';
        console.log('Now you are in stage 5');
        
        addChangeStateEventListener();
    },
    update: function(){}
};