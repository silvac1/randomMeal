menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this._courses.apppetizers = appetizers;
  },

  get mains() {
    return this._courses.mains = mains;
  },

  get desserts() {
    return this._courses.desserts = desserts;
  },

  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },

  set mains(mains) {
    this._courses.mains = mains;
  },

  set desserts(desserts) {
    this._courses.desserts = desserts;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meals consist of 1 order of ${appetizer.name}, 1 order of ${main.name} and 1 order of ${dessert.name}, A total of: $${totalPrice} dolalrs`
  }

};

menu.addDishToCourse('appetizers', 'salad', 5.00);
menu.addDishToCourse('appetizers', 'wings', 5.00);
menu.addDishToCourse('appetizers', 'fries', 5.00);

menu.addDishToCourse('mains', 'steak', 10.00);
menu.addDishToCourse('mains', 'salmon', 10.00);
menu.addDishToCourse('mains', 'tofu', 10.00);

menu.addDishToCourse('desserts', 'ice cream', 5.00);
menu.addDishToCourse('desserts', 'coffee', 5.00);
menu.addDishToCourse('desserts', 'cake', 5.00);



const meal = menu.generateRandomMeal();
console.log(meal);
