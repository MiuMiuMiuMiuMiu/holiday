import React from 'react';
import CountryOptions from '../components/CountryOptions.js';
import UpcomingHolidays from '../components/UpcomingHolidays.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    < CountryOptions/>
                </Col>
                <Col md>
                    <UpcomingHolidays/>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Home;
