import React, {useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SearchBar() {
    
    const [country, setCountry] = useState([]);
    const [data, setData] = useState([]);
    let navigate = useNavigate(); 

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/country");
        //console.log("Go to country page")
    }

    const listItems = data.map((country) =>
        <option type="button" value={country.countryCode} key={country.name.toString()}>  {/*Country name as id*/}
            {/*country.countryCode*/} {country.name}
        </option>
    );

    return (
        <Container>
            <h1 className="mt-5 mb-5 text-center">Next holiday</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center" onChange={(e) => setCountry(e.target.value)}> 
                    <Col xs={8} md={6} lg={5}>
                        <Form.Select size="lg">
                            {listItems}
                        </Form.Select>
                    </Col>
                    <Col xs={3} md={1} lg={1}>
                        <Button variant="success" size="lg" type="submit">Show</Button>
                    </Col>
                </Row> 
            </Form>
        </Container>
    )
}

export default SearchBar;