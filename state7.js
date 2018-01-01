demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#3399ff';
        console.log('Now you are in stage 7');
        
        addChangeStateEventListener();
    },
    update: function(){}
};