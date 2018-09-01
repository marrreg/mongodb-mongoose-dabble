var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    name:       String,
    address:    String,
    city:       String,
    state:      String,
    country:    String,
    zipCode:    String,
    createdOn:  Date,
    isActive:   Boolean
});

// Build a model from the customer schema...
var Customer = mongoose.model('Customer', customerSchema);