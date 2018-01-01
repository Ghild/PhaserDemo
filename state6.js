demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffffcc';
        console.log('Now you are in stage 6');
        
        addChangeStateEventListener();
    },
    update: function(){}
};