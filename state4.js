demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffcc99';
        console.log('Now you are in stage 4');
        
        addChangeStateEventListener();
    },
    update: function(){}
};