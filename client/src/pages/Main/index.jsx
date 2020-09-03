import React, { useState, useEffect } from "react";
import Header1 from '../../components/Header_1'
import Title from '../../components/Title'
import Comment from '../../components/Comment'
import BookCard from '../../components/BookCard'
import SearchForm from '../../components/SearchForm'
import API from '../../util/API'
import { PromiseProvider } from "mongoose";

const Main = () => {

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
            <Header1 text='Google Books Search' />
            <SearchForm />
            {book.length ? (
                <div>
                    {book.map(book => (
                        <div key={book._id}>
                            <BookCard
                                title={book.title}
                                url={book.link}
                                author={book.author}
                                text={book.description}
                                date={book.date}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </>
    );
}

export default Main;