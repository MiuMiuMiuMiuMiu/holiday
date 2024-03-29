import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpcomingHolidays from '../components/UpcomingHolidays.js';
import AvailableCountries from '../components/AvailableCountries.js';

function Overview() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-evenly">
                <Col lg="5">
                    <UpcomingHolidays/>
                </Col>
                <Col md lg="5">
                    <AvailableCountries/>
                </Col>
            </Row>
        </Container>
    )
}

export default Overview;
