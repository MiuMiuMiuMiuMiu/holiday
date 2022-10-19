import React from 'react';
import Form from 'react-bootstrap/Form';

function SearchBar() {

    console.log("This is the search bar component")

    return (
        <>
            <Form.Control size="lg" type="text" placeholder="Large text" />
        </>
    )
}

export default SearchBar;