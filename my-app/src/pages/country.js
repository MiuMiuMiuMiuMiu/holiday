import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpcomingHolidays from '../components/UpcomingHolidays.js';

function Country() {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <UpcomingHolidays/>
                </Col>
                <Col md>
                    <h1>Available Countries</h1>>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Country;
