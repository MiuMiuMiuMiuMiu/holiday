import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function AvailableCountries() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    console.log(data);

    const countries = data.map((country, index) =>
        <Col className="mb-3" key={index}>
            {country.name}
        </Col>
    );

    return (
        <div> 
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h3>Available countries</h3>
                </Accordion.Header>
                <Accordion.Body>
                    <Row xs={2} sm={2} md={2} lg={2}>
                        {countries}
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default AvailableCountries;