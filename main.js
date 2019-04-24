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

  
};
