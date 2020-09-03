import React, { useState, useEffect } from "react";
import AddBook from '../../components/AddBook';
import Header1 from '../../components/Header_1'
import SearchForm from '../../components/SearchForm'
import API from '../../util/API'

const NewBookForm = () => {

    const [book, setBook] = useState([])

    useEffect(() => {
        loadbook()
    }, []);

    function loadbook() {
        API.getBooks()
            .then(res => {
                setBook(res.data)
                console.log(res)
            })
            .catch(err => console.log(err));
    }


    return (
        <>
            <Header1 text='Add New Book' />
            <SearchForm />
            <AddBook />
        </>
    );
}

export default NewBookForm;