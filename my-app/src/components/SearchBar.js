import React, {useState} from 'react';
import Countries from '../components/Countries.js';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function SearchBar() {
    
    const [selected, setSelected] = useState(false);

    function expand() {
        setSelected(true);
    };

    function close() {
        setSelected(false);
    };

    function clickCountry() {
        //A function
    };

   //console.log("This is the search bar component")

    return (
        <Container>
            <h1 className="mt-5 mb-5 text-center">Next holiday</h1>
            <Form size="lg" onFocus={expand} /*onBlur={close}*/>
                <Row className="justify-content-center"> 
                    <Col xs={5}>
                        <Form.Control size="lg" type="text" placeholder="Country" />
                        {selected === true &&
                            < Countries/>
                        }
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