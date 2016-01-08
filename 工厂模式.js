function AbstractFactory(){

};

AbstractFactory.prototype.createProduct = function(){
    throw '没有实现该方法';
}

function FlightFactory(){
    AbstractFactory.call(this);
}

FlightFactory.prototype = new AbstractFactory();
FlightFactory.prototype.createFactory = function(){
    return new Flight();
}

function HotelFactory(){
    AbstractFactory.call(this);
}

HotelFactory.prototype = new AbstractFactory();
HotelFactory.prototype.createFactory = function(){
    return new Hotel();
}
