import React, {useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SearchBar() {

    const [index, setIndex] = useState();
    const [data, setData] = useState([]);
    let navigate = useNavigate(); 
    
    /*Get available countries of API*/
    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    /*
    Handles submit of form.
    If there is no country code (ie no valid country was selected)
    prevent from navigating to next page: Country page.
    */
    function handleSubmit(e) {
        e.preventDefault();

        if (index !== "0" && index !== undefined) {
            navigate("/country", {
                state: {
                    code: e.target[0][index].id, //Country code
                    name: e.target[0][index].innerHTML //Country name
                }
            });
        }
    }

    /*
    Map a list of options with country data
    Index + 1 because there is an extra option not mapped here.
    */
    const options = data.map((country, index) =>
        <option type="button" value={index + 1} id={country.countryCode} key={country.name.toString()}>
            {country.name}
        </option>
    );

    return (
        <Container>
            <h1 className="mt-5 mb-5 text-center">Holidays</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center" > 
                    <Col xs={8} md={6} lg={5}>
                        <Form.Select size="lg" onChange={(e) => setIndex(e.target.value)}>
                            <option value="0">Select country</option>
                            {options}
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