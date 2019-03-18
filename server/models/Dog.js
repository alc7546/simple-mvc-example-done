const mongoose = require('mongoose');

// Set mongoose promise to the ES6 promises
mongoose.Promise = global.Promise;

// variable to hold Dog Model
let DogModel = {};

// Create the Dog Schema
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdData: {
    type: Date,
    default: Date.now,
  },

});

DogSchema.statics.sayName = (dog) => {
  console.log(dog.name);
};

// Static func to find by name
DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

// Create the model based on the schema
DogModel = mongoose.model('Dog', DogSchema);

// export public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
