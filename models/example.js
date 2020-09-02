const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
    title: { type: String, required: true },
    comment: { type: String, required: false },
    date: { type: Date, default: Date.now }
});

const Example = mongoose.model('Example', ExampleSchema);

module.exports = Example;
