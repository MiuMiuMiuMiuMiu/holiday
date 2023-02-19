import React, {useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CountryInfo(props) {

    //Country name and country code in state
    let { state } = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://date.nager.at/api/v3/PublicHolidays/2023/${state.code}`)
          .then(function (response) {
            setData(response.data);
          })
    }, [state.code]);

    console.log(data);

    const cards = data.map((country, index) => {
        return (
            <Col>
                <Card style={{ height: '12rem' }}>
                    <Card.Header>{country.date}</Card.Header>
                    <Card.Body>
                        <Card.Title>{country.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{country.localName}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        )
    });

    return (
        <div>
            <h1 className="mb-5 text-center">Public holidays in {state.name} in 2023</h1>
            <Row  className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4'>
                {cards}
            </Row>      
        </div>
        
    )
}

export default CountryInfo;