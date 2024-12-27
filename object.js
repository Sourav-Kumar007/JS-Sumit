
let car = {
    name : "fiat",
    model : 500,
    weight : "850kg",
    color : "white",
    start :function()
    {
        this.en();
        console.log('car has started');
    },
    en : function()
    {
        console.log('car has stopped');
    }
}

console.log(car.name);
car.start();