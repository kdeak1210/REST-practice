// ninja.js will represent our Ninja model...

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create ninja Schema & model. Passing objects to props so we can add special validations
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // add in geolocation
});

// Creates a model. collection called 'ninjas' (auto pluralized), with NinjaSchema
const Ninja = mongoose.model('ninja', NinjaSchema);

// Export the model to access from other files
module.exports = Ninja;
