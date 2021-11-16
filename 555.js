const Animal = function (options) {
  this.name = options.name;
  this.color = options.color;
};

const dog = new Animal({ name: 'Rex' });

console.log(dog);
