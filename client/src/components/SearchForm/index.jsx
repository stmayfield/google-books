import React from 'react';

const SearchForm = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" ariaLabel="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                <a href="/add">Add</a>
            </form>
        </nav>
    );
}

export default SearchForm;