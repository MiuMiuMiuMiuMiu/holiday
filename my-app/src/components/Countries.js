import React, { useState , useEffect } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';


function Countries() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    console.log(data)

    const listItems = data.map((country, index) =>
        <ListGroup.Item action value={index} key={country.name.toString()}> {/*Country name as id*/}
            {/*country.countryCode*/} {country.name}
        </ListGroup.Item>
    );

    return (
       <div class="country-list">
            <ListGroup variant="flush">
                {listItems}
            </ListGroup>
       </div> 
    )
}

export default Countries;