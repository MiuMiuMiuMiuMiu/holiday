import React, {useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Holiday from './Holiday.js';

function SearchBar() {

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

    /*
    Map a list of options with country data
    Index + 1 because there is an extra option not mapped here.
    */
    const options = data.map((country, index) =>
        <option type="button" value={index+1} id={country.countryCode} key={country.name.toString()}>
            {country.name}
        </option>
    );

    return (
        <Container>
            <h3 className="mt-5 pt-5 mb-5 text-center">Is today a holiday in...</h3>
            <Form>
                <Row className="justify-content-center" > 
                
                    <Col xs={8} md={6} lg={5}>
                        <Form.Select size="lg" onChange={(e) => {setCountryName(e.target[e.target.value].innerHTML); setCountryCode(e.target[e.target.value].id)}}>
                            <option value="0">Select country</option>
                            {options}
                        </Form.Select>
                    </Col>
                </Row> 
            </Form>
            {countryCode &&
            <Holiday
                code={countryCode}
                name={countryName}
                />
            }
            
        </Container>
    )
}

export default SearchBar;