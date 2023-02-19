import React, {useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function CountryInfo(props) {

    //Country name and country code in state
    let { state } = useLocation();
    const [data, setData] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
        axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${state.code}`)
          .then(function (response) {
            setData(response.data);
          })
    }, [state.code, year]);

    const cards = data.map((country, index) => {
        return (
            <Col key={index}>
                <Card style={{ height: '14rem' }}>
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
            <h1 className="mb-3">Public holidays in {state.name}</h1>
            <ButtonGroup className="mb-5" aria-label="Basic example">
                <Button onClick={() => setYear(year-1)} variant="secondary">&lt;</Button>
                <Button variant="dark">{year}</Button>
                <Button onClick={() => setYear(year+1)} variant="secondary">&gt;</Button>
            </ButtonGroup>
            
            <Row  className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
                {cards}
            </Row>      
        </div>
        
    )
}

export default CountryInfo;