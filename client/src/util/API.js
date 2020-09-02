import axios from "axios";

export default {
    // Gets all books
    getExamples: function () {
        return axios.get("/api/index");
    },
    // Gets the book with the given id
    getExample: function (id) {
        return axios.get("/api/index/" + id);
    },
    // Deletes the book with the given id
    deleteExample: function (id) {
        return axios.delete("/api/index/" + id);
    },
    // Saves a book to the database
    saveExample: function (bookData) {
        return axios.post("/api/index", bookData);
    }
};
