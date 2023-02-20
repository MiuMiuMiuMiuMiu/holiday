import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function AvailableCountries() {

    const [data, setData] = useState([]);

    //Get available countries of API
    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);
    
    //Sort the countries alphabetically
    const alphabeticCountries = data.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    //Map the countries
    //If country is clicked, send to country page with country name and country code
    const countries = alphabeticCountries.map((country, index) =>
        <Col className="mb-3" key={index}>
            <Link to={`/country/${country.countryCode}`} state={{ code: country.countryCode, name: country.name }}>
                {country.name}
            </Link>
            
        </Col>
    );

    return (
        <div className="mb-5"> 
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h3 className="title-color-black">Available countries</h3>
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