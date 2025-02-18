
// inheritance basically is there will be a parent class and there can be 
// multiple child classes and child can inherit characteristics from the parent classes

class Vehicle
{

    constructor(color,price)
    {
            this.color = color;
            this.price = price;
    }
}

class Bus extends Vehicle
{
     constructor(name,seat,color,price)
     {
          super(color,price);
          this.name = name;
          this.seat = seat;
     }

}


class Truck extends Vehicle
{
     constructor(name,load,color,price)
     {  
            super(color,price);
            this.name = name;
            this.load = load;
     }

  details()
  {
     console.log(`The ${this.color}   ${this.name} is moving which is ${this.load} `);
     
  }
}

const car = new Vehicle('yellow', '200000');
console.log(car);
const car2 = new Truck('Truck', '5 Tone', 'yellow','2000000');

console.log(car2);
car2.details();
