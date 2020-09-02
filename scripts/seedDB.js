const mongoose = require("mongoose");
const db = require("../models");

// This file empties the examples collection and inserts the examples below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/skeleton"
);

const exampleSeed = [
    {
        title: "Example text",
        comment: "This is an example of the text",
        date: new Date(Date.now())
    },
    {
        title: "The 2nd example",
        comment: "Bazinga This is an example of second text",
        date: new Date(Date.now())
    }
];

db.Example
    .remove({})
    .then(() => db.Example.collection.insertMany(exampleSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
