import React, {useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Holiday from './Holiday.js';

function CountryOptions() {
    const [data, setData] = useState([]);
    const [countryCode, setCountryCode] = useState();
    const [countryName, setCountryName] = useState();
    
    /*Get available countries of API*/
    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    //Sort countries alphabetically
    const alphabeticCountries = data.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    /*
    Map a list of options with country data
    Index + 1 because there is an extra option not mapped here.
    */
    const options = alphabeticCountries.map((country, index) =>
        <option value={index+1} id={country.countryCode} key={country.name.toString()}>
            {country.name}
        </option>
    );

    return (
        <Container className="text-center">
            <h1 className="mb-5">Is today a holiday in...</h1>
                <Row className="justify-content-center">  
                    <Col xs={12} md={8} lg={6}>
                        <Form.Select size="lg" onChange={(e) => {setCountryName(e.target[e.target.value].innerHTML); setCountryCode(e.target[e.target.value].id)}}>
                            <option value="0">Select country...</option>
                            {options}
                        </Form.Select>
                    </Col>
                </Row> 
            {countryCode &&
            <Holiday
                code={countryCode}
                name={countryName}
                />
            }      
        </Container>
    )
}

export default CountryOptions;