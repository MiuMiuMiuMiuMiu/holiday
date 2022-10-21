import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function SearchBar() {

    console.log("This is the search bar component")

    return (
        <Container>
            <h1 className="mt-5 mb-5 text-center">Next holiday</h1>
            <Form size="lg">
                <Row className="align-items-center justify-content-center"> 
                    <Col xs={5}>
                        <Form.Control size="lg" type="text" placeholder="Country" />
                    </Col>
                    <Col xs="auto">
                        <Button variant="info" size="lg" type="submit">Show</Button>
                    </Col>
                </Row> 
            </Form>
        </Container>
    )
}

export default SearchBar;