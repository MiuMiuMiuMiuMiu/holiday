import React, { useState , useEffect } from 'react';
import SearchBar from '../components/SearchBar.js';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

function Countries() {

    const [data, setData] = useState([]);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    //console.log(data);
    console.log(country);

    function getCountry(e) {
        setCountry(e.target.textContent)
        //setCountry(e.target.value) //Get country code
    };

    const listItems = data.map((country) =>
        <ListGroup.Item type="button" action value={country.countryCode} key={country.name.toString()} onClick={getCountry}> {/*Country name as id*/}
            {/*country.countryCode*/} {country.name}
        </ListGroup.Item>
    );

    return (
       <div className="country-list">
            <ListGroup variant="flush">
                {listItems}
            </ListGroup>
       </div> 
    )
}

export default Countries;