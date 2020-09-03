import React from 'react';

const BookCard = (props) => {
    return (
        <>
            <div className="col-10 mb-4">
                <div className="card text-center">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <a href={props.url} target="_blank">
                            <h5 className="card-title">{props.title}</h5>
                        </a>
                        <h6 class="card-subtitle mb-2 text-muted">{props.author}</h6>
                        <p className="card-text">
                            {props.text}
                        </p>
                    </div>
                    <div className="card-footer text-muted">{props.date}</div>
                </div>
            </div>
        </>
    );
}

export default BookCard;
