menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  };

  get appetizers() {
      this._courses.apppetizers = appetizers;
  },

  get mains() {
    this._courses.mains = mains;
  },

  get desserts() {
    this._courses.desserts = desserts;
  },

  set appetizers(appetizers) {
    return this._courses.appetizers = appetizers;
  },

  set mains(mains) {
    return this._courses.mains = mains;
  },

  set desserts(desserts) {
    return this._courses.desserts = desserts;
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
    const randomIndex = Math.floor(Math.random * dishes.length)
    return dishes[randomIndex];
  },


};
