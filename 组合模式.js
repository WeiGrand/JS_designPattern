var addClass = function (eles, className) {
    if (eles instanceof NodeList) {
        for (var i = 0, length = eles.length; i < length; i++) {
            eles[i].nodeType === 1 && (eles[i].className += (' ' + className + ' '));
        }
    }
    else if (eles instanceof Node) {
        eles.nodeType === 1 && (eles.className += (' ' + className + ' '));
    }
    else {
        throw "eles is not a html node";
    }
}
addClass(document.getElementById("div3"), "test");
addClass(document.querySelectorAll(".div"), "test");

function FlightOrder() { }
FlightOrder.prototyp.create = function () {
    console.log("flight order created");
}
function HotelOrder() { }
HotelOrder.prototype.create = function () {
    console.log("hotel order created");
}

function TotalOrders() {
    this.orderList = [];
}
TotalOrders.prototype.addOrder = function (order) {
    this.orderList.push(order);
}
TotalOrders.prototype.create = function (order) {
    for (var i = 0, length = this.orderList.length; i < length; i++) {
        this.orderList[i].create();
    }
}

var flight = new FlightOrder();
flight.create();

var orders = new TotalOrders();
orders.addOrder(new FlightOrder());
orders.addOrder(new HotelOrder());
orders.create();
