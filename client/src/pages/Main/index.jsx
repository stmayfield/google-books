import React, { useState, useEffect } from "react";
import Header1 from '../../components/Header_1'
import Title from '../../components/Title'
import Comment from '../../components/Comment'
import API from '../../util/API'

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
            <Header1 text='Example text' />


            {book.length ? (
                <div>
                    {book.map(book => (
                        <div key={book._id}>
                            <Title text={book.title} />
                            <Comment text={book.author} />
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