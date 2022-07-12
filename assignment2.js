var kiosk = {
    fruit: "Orange",
    quantity: 2,
    calculateFruitCost: function(){
        console.log(`${this.quantity} ${this.fruit} for KES ${this.quantity * this.price}`);
    },
    pricing:{
        price: 30,
    }
};
var newProduct = new Object (kiosk);
console.log(newProduct.calculateFruitCost());


class KioskCalc {                                        
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPriceList = {"orange": 30, "mango": 15, "avocado": 40 }; 
        this.getTotalCost = function () {
            return ` ${quantity} ${fruit} for KES ${quantity * this.price}`
        }
    }
}
KioskCalc.prototype.price = 30;

var kiosk = new KioskCalc('mango', 2);
// console.log(kiosk.getTotalCost());

