//demo1
var trafficLight = (function(){
    var currentLight = null;
    return {
        change : function(light){
            currentLight = light;
            currentLight.go();
        }
    }
})();

function RedLight(){};
RedLight.prototype.go = function(){
    console.log('this is red light');
}

function GreenLight(){};
GreenLight.prototype.go = function(){
    console.log('this is green light');
}

function YellowLight(){};
YellowLight.prototype.go = function(){
    console.log('this is yellow light');
}

trafficLight.change(new RedLight());
trafficLight.change(new YellowLight());
