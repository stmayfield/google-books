import React, { useState, useEffect } from "react";
import Header1 from '../../components/Header_1'
import Title from '../../components/Title'
import Comment from '../../components/Comment'
import API from '../../util/API'

const Main = () => {

    const [example, setExample] = useState([])

    useEffect(() => {
        loadExample()
    }, []);

    function loadExample() {
        API.getExamples()
            .then(res => {
                setExample(res.data)
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Header1 text='Example text' />


            {example.length ? (
                <div>
                    {example.map(example => (
                        <div key={example._id}>
                            <Title text={example.title} />
                            <Comment text={example.comment} />
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