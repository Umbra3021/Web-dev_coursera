function Dog(name) {
    this.name = name;
    
}

Dog.prototype.bark = function () {
    
    console.log(this.name + "likes barking! bark!")
}

var max= new Dog("max","buddy");
max.bark();