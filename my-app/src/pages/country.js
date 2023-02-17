import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpcomingHolidays from '../components/UpcomingHolidays.js';
import AvailableCountries from '../components/AvailableCountries.js';

function Country() {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <UpcomingHolidays/>
                </Col>
                <Col md>
                    <AvailableCountries/>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Country;
